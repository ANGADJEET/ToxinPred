from flask import Flask, request, jsonify
from flask_cors import CORS
import warnings
import logging
import pandas as pd
import base64
from main import predict, calculate_properties, generate_molecule_image
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
            raise ValueError("CSV file must contain a 'SMILES' column")

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

@app.route('/make-prediction-mini-batch', methods=['POST'])
def make_prediction_mini_batch():
    try:
        data = request.json
        logging.debug(f"Received data: {data}")
        #recived comma seperated smiles
        smiles = data.get('smiles')
        if not smiles:
            raise ValueError("SMILES list is missing")

        predictions = []
        for smile in smiles:
            prediction = predict(smile)
            if prediction is None:
                predictions.append('Error')
            else:    
                predictions.append('Non-Toxic' if prediction[0][0] == 0 else 'Toxic')

        logging.debug(f"Mini-batch prediction results: {predictions}")

        response = {'predictions': predictions, 'result-type': 'mini-batch'}
        return jsonify(response)
    
    except Exception as e:
        logging.error(f"Error occurred: {e}", exc_info=True)
        return jsonify({'error': f"An error occurred: {str(e)}"}), 500
# Route 1: Single SMILES Search
@app.route('/search-toxin', methods=['POST'])
def search_toxin():
    try:
        data = request.json
        smiles = data.get('smile', '')
        print(f"Received SMILES for single search: {smiles}")

        if not smiles:
            print("SMILES string is missing")
            return jsonify({"error": "SMILES string is required"}), 400

        # Calculate properties
        properties = calculate_properties(smiles)
        if properties is None:
            print("Invalid SMILES string provided")
            return jsonify({"error": "Invalid SMILES string"}), 400

        # Generate image
        img_bytes = generate_molecule_image(smiles)
        if img_bytes is None:
            print("Error generating image for SMILES string")
            return jsonify({"error": "Error generating image"}), 500

        # Prepare response
        response = {
            "properties": properties,
            "image": "data:image/png;base64," + base64.b64encode(img_bytes.getvalue()).decode()
        }
        return jsonify(response)

    except Exception as e:
        print(f"Exception in search_toxin: {e}")
        print(traceback.format_exc())
        return jsonify({"error": f"An unexpected error occurred: {str(e)}"}), 500

# Route 2: Batch SMILES from File Upload
@app.route('/search-toxin-file', methods=['POST'])
def search_toxin_file():
    try:
        if 'file' not in request.files:
            print("No file part in the request")
            return jsonify({"error": "No file part in the request"}), 400

        file = request.files['file']
        if file.filename == '':
            print("No selected file")
            return jsonify({"error": "No selected file"}), 400

        # Process CSV file and calculate properties for each SMILES
        df = pd.read_csv(file)
        if 'SMILES' not in df.columns:
            print("CSV file must contain a 'SMILES' column")
            return jsonify({"error": "CSV file must contain a 'SMILES' column"}), 400

        results = []
        for smile in df['SMILES']:
            print(f"Processing SMILES: {smile}")
            properties = calculate_properties(smile)
            if properties is None:
                results.append({"error": f"Invalid SMILES string: {smile}"})
                continue

            img_bytes = generate_molecule_image(smile)
            if img_bytes is None:
                results.append({"error": f"Error generating image for SMILES: {smile}"})
                continue

            results.append({
                "properties": properties,
                "image": "data:image/png;base64," + base64.b64encode(img_bytes.getvalue()).decode()
            })

        return jsonify(results)

    except pd.errors.EmptyDataError:
        print("Uploaded file is empty")
        return jsonify({"error": "Uploaded file is empty"}), 400
    except Exception as e:
        print(f"Exception in search_toxin_file: {e}")
        print(traceback.format_exc())
        return jsonify({"error": f"An unexpected error occurred: {str(e)}"}), 500

# Route 3: Mini-Batch SMILES Search
@app.route('/search-toxin-mini-batch', methods=['POST'])
def search_toxin_mini_batch():
    try:
        data = request.json
        smiles_list = data.get('smiles', [])
        print(f"Received SMILES list for mini-batch search: {smiles_list}")

        if not smiles_list:
            print("SMILES list is missing")
            return jsonify({"error": "SMILES list is required"}), 400

        results = []
        for smile in smiles_list:
            print(f"Processing SMILES: {smile}")
            properties = calculate_properties(smile)
            if properties is None:
                results.append({"error": f"Invalid SMILES string: {smile}"})
                continue

            img_bytes = generate_molecule_image(smile)
            if img_bytes is None:
                results.append({"error": f"Error generating image for SMILES: {smile}"})
                continue

            results.append({
                "properties": properties,
                "image": "data:image/png;base64," + base64.b64encode(img_bytes.getvalue()).decode()
            })

        return jsonify(results)

    except Exception as e:
        print(f"Exception in search_toxin_mini_batch: {e}")
        print(traceback.format_exc())
        return jsonify({"error": f"An unexpected error occurred: {str(e)}"}), 500
    
if __name__ == '__main__':
    app.run(debug=True)
