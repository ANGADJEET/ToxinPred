from flask import Flask, request, jsonify
from flask_cors import CORS
import warnings
import logging
import pandas as pd
import base64
from main import predict, calculate_properties, generate_molecule_image
warnings.filterwarnings("ignore")
import traceback
import logging
from io import StringIO
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.base import MIMEBase
from email import encoders
import smtplib


app = Flask(__name__)
CORS(app)

# Configure logging
logging.basicConfig(level=logging.DEBUG)

@app.route('/make-prediction', methods=['POST'])
def make_prediction():
    try:
        data = request.json
        logging.debug(f"Received data: {data}")
        
        smile = data.get('smile','')
        print(f"Received SMILES for single prediction: {smile}")
        
        if not smile:
            print("SMILES string is missing")
            return jsonify({"error": "SMILES string is required"}), 400


        prediction = predict(smile)
        
        if prediction is None:
            raise ValueError("Prediction returned None")

        logging.debug(f"Prediction result: {prediction}")

        response = {
            'smile': smile,
            'prediction': ['Non-Toxic' if prediction[0][0] == 0 else 'Toxic'],
            'result-type': 'single'
        }
        return jsonify(response)
    
    except Exception as e:
        logging.error(f"Error occurred: {e}", exc_info=True)
        return jsonify({'error': f"An error occurred: {str(e)}"}), 500

def send_email(email, predictions_result=None, search_result=None):
    try:
        # Set up the server and email account details
        sender_email = "cosylab.iiitd@gmail.com"
        sender_password = "blxf svnh awdk kdem"  # Replace with your email password or app password
        smtp_server = "smtp.gmail.com"
        smtp_port = 587

        # Create a polite email message
        message = MIMEMultipart()
        message['From'] = sender_email
        message['To'] = email
        message['Subject'] = "Your Batch Prediction Results"

        body = """Dear User,

Please find the attached CSV file containing your batch prediction results.

Thank you for using our service. If you have any further questions or need assistance, feel free to reach out.

Best regards,
ToxinPredictor Team
"""
        message.attach(MIMEText(body, 'plain'))

        # Prepare the CSV file attachment
        csv_buffer = StringIO()
        if predictions_result is not None and not predictions_result.empty:
            pd.DataFrame({'smile': predictions_result['smile'], 'Prediction': predictions_result['prediction']}).to_csv(csv_buffer, index=False)
            csv_buffer.seek(0)
        elif search_result is not None and not search_result.empty:
            pd.DataFrame(search_result).to_csv(csv_buffer, index=False)
            csv_buffer.seek(0)
        else:
            logging.error("No valid data to attach to the email.")
            return

        # Attach the CSV file
        part = MIMEBase('application', 'octet-stream')
        part.set_payload(csv_buffer.getvalue().encode('utf-8'))
        encoders.encode_base64(part)
        part.add_header('Content-Disposition', 'attachment; filename="predictions.csv"')
        message.attach(part)

        # Connect to the server and send the email
        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(sender_email, sender_password)
        text = message.as_string()
        server.sendmail(sender_email, email, text)
        server.quit()

        logging.info(f"Prediction results successfully sent to {email}")
    except Exception as e:
        logging.error(f"Failed to send email: {e}", exc_info=True)
        raise e

@app.route('/make-prediction-file', methods=['POST'])
def make_prediction_file():
    try:
        # Check if a file was uploaded
        if 'file' not in request.files:
            print("No file part in the request")
            return jsonify({"error": "No file part in the request"}), 400
        
        file = request.files['file']
        
        if file.filename == '':
            print("No selected file")
            return jsonify({"error": "No selected file"}), 400

        df = pd.read_csv(file)
        if 'SMILES' not in df.columns:
            print("CSV file must contain a 'SMILES' column")
            return jsonify({"error": "CSV file must contain a 'SMILES' column"}), 400

        results = []
        for smile in df['SMILES']:
            print(f"Processing SMILES: {smile}")
            prediction = predict(smile)  # Call your prediction logic here
            if prediction is None:
                print("Invalid SMILES string provided")
                return jsonify({"error": "Invalid SMILES string"}), 400
            
            results.append({"smile": smile, "prediction": 'Non-Toxic' if prediction[0][0] == 0 else 'Toxic'})
        
        results_df = pd.DataFrame(results)
        # Check if an email was provided for sending results
        email = request.form.get('email')
        if email:
            send_email(email, predictions_result=results_df)

        return jsonify(results)
    
    except pd.errors.EmptyDataError:
        print("Uploaded file is empty")
        return jsonify({"error": "Uploaded file is empty"}), 400
    except Exception as e:
        print(f"Exception in predicting_toxin_file: {e}")
        print(traceback.format_exc())
        return jsonify({"error": f"An unexpected error occurred: {str(e)}"}), 500



@app.route('/make-prediction-mini-batch', methods=['POST'])
def make_prediction_mini_batch():
    try:
        data = request.json
        logging.debug(f"Received data: {data}")
        # Received comma-separated SMILES
        smiles_list = data.get('smiles',[])
        if not smiles_list:
            print("SMILES list is missing")
            return jsonify({"error": "SMILES list is required"}), 400

        results = []
        for smile in smiles_list:
            print(f"Processing SMILES: {smile}")
            prediction = predict(smile)
            if prediction is None:
                print("Invalid SMILES string provided")
                return jsonify({"error": "Invalid SMILES string"}), 400

            results.append({"smile": smile, "prediction": 'Non-Toxic' if prediction[0][0] == 0 else 'Toxic'})
        return jsonify(results)
    except Exception as e:
        print(f"Exception in predicting_toxin_mini_batch: {e}")
        print(traceback.format_exc())
        return jsonify({"error": f"An unexpected error occurred: {str(e)}"}), 500

    
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
            "smile": smiles,  # Include SMILES in the response
            "properties": properties,
            "image": "data:image/png;base64," + base64.b64encode(img_bytes.getvalue()).decode()
        }
        return jsonify(response)
    
    except Exception as e:
        print(f"Exception in search_toxin: {e}")
        print(traceback.format_exc())
        return jsonify({"error": f"An unexpected error occurred: {str(e)}"}), 500


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

        # Get email if provided
        email = request.form.get('email')
        print(f"Received file: {file.filename}, email: {email}")
        
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
                results.append({"smile": smile, "error": f"Invalid SMILES string: {smile}"})
                continue

            img_bytes = generate_molecule_image(smile)
            if img_bytes is None:
                results.append({"smile": smile, "error": f"Error generating image for SMILES: {smile}"})
                continue

            results.append({
                "smile": smile,  # Include SMILES in the response
                "properties": properties,
                "image": "data:image/png;base64," + base64.b64encode(img_bytes.getvalue()).decode()
            })

        # Convert results to CSV format
        results_df = pd.DataFrame(results)

        # Send email if provided
        if email != "null":
            send_email(email, search_result=results_df)

        return jsonify(results)

    except pd.errors.EmptyDataError:
        print("Uploaded file is empty")
        return jsonify({"error": "Uploaded file is empty"}), 400
    except Exception as e:
        print(f"Exception in search_toxin_file: {e}")
        print(traceback.format_exc())
        return jsonify({"error": f"An unexpected error occurred: {str(e)}"}), 500


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
                results.append({"smile": smile, "error": f"Invalid SMILES string: {smile}"})
                continue

            img_bytes = generate_molecule_image(smile)
            if img_bytes is None:
                results.append({"smile": smile, "error": f"Error generating image for SMILES: {smile}"})
                continue

            results.append({
                "smile": smile,  # Include SMILES in the response
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
