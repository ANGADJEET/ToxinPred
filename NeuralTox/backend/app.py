from flask import Flask, request, jsonify
from flask_cors import CORS
import warnings
import logging
import pandas as pd
from main import predict

warnings.filterwarnings("ignore")

app = Flask(__name__)
CORS(app)

# Configure logging
logging.basicConfig(level=logging.DEBUG)

@app.route('/make-prediction', methods=['POST'])
def make_prediction():
    try:
        data = request.json
        logging.debug(f"Received data: {data}")
        
        smile = data.get('smile')
        if not smile:
            raise ValueError("SMILE string is missing")

        prediction = predict(smile)
        
        if prediction is None:
            raise ValueError("Prediction returned None")

        logging.debug(f"Prediction result: {prediction}")

        response = {'prediction': ['Non-Toxic' if prediction[0][0] == 0 else 'Toxic'],
                    'result-type': 'single'}
        return jsonify(response)
    
    except Exception as e:
        logging.error(f"Error occurred: {e}", exc_info=True)
        return jsonify({'error': f"An error occurred: {str(e)}"}), 500

@app.route('/make-prediction-file', methods=['POST'])
def make_prediction_file():
    try:
        if 'file' not in request.files:
            raise ValueError("File is missing")
        
        file = request.files['file']
        if not file.filename.endswith('.csv'):
            raise ValueError("File is not a CSV")

        df = pd.read_csv(file)
        if 'SMILES' not in df.columns:
            raise ValueError("CSV file must contain a 'smile' column")

        predictions = []
        for smile in df['SMILES']:
            prediction = predict(smile)
            if prediction is None:
                raise ValueError(f"Prediction returned None for SMILE: {smile}")
            predictions.append('Non-Toxic' if prediction[0][0] == 0 else 'Toxic')

        logging.debug(f"Batch prediction results: {predictions}")

        response = {'predictions': predictions, 'result-type': 'batch'}
        return jsonify(response)
    
    except Exception as e:
        logging.error(f"Error occurred: {e}", exc_info=True)
        return jsonify({'error': f"An error occurred: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True)
