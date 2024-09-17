import pandas as pd
from feature_generation.rdkit_features import generate_rdkit_features
from feature_generation.padel_features import generate_padel_features
from feature_selection.feature_selection import select_features
import tensorflow as tf
from rdkit import Chem
from rdkit.Chem import Descriptors, rdMolDescriptors, Draw
import io
import base64
from io import BytesIO
import traceback

def calculate_properties(smiles):
    try:
        mol = Chem.MolFromSmiles(smiles)
        if mol is None:
            raise ValueError("Invalid SMILES string provided.")
        
        properties = {
            "molecularWeight": Descriptors.MolWt(mol),
            "logP": Descriptors.MolLogP(mol),
            "tpsa": Descriptors.TPSA(mol),
            "hbd": Chem.rdMolDescriptors.CalcNumHBD(mol),
            "hba": Chem.rdMolDescriptors.CalcNumHBA(mol),
            "rotBonds": Chem.rdMolDescriptors.CalcNumRotatableBonds(mol),
            "aromaticRings": Chem.rdMolDescriptors.CalcNumAromaticRings(mol),
            "molecularFormula": Chem.rdMolDescriptors.CalcMolFormula(mol)
        }
        return properties
    except Exception as e:
        print(f"Error in calculate_properties: {e}")
        print(traceback.format_exc())
        return None

def generate_molecule_image(smiles):
    try:
        mol = Chem.MolFromSmiles(smiles)
        if mol is None:
            raise ValueError("Invalid SMILES string provided.")
        
        img = Draw.MolToImage(mol, size=(300, 300))

        img_bytes = BytesIO()
        img.save(img_bytes, format='PNG')
        img_bytes.seek(0)
        return img_bytes
    except Exception as e:
        print(f"Error in generate_molecule_image: {e}")
        print(traceback.format_exc())
        return None

def print_stylish_message(message):
    """Prints a stylish message with line breaks."""
    print("\n" + "="*50)
    print(f"{message}")
    print("="*50 + "\n")

def generate_features(smile):
    """Generates features for a given SMILE string.

    Args:
        smile: A SMILE string.

    Returns:
        A DataFrame containing all features, or None if an error occurs.
    """
    try:
        print_stylish_message("Generating RDKit features...")
        rdkit_features_df = generate_rdkit_features(smile)
        print("rdkit_features_df shape: ", rdkit_features_df.shape)
        print_stylish_message("Generating PaDEL features...")
        padel_features_df = generate_padel_features(smile)
        print("padel_features_df shape: ", padel_features_df.shape)
        if rdkit_features_df is None or padel_features_df is None:
            print("Error: Either RDKit or PaDEL features are None.")
            return None

        print_stylish_message("Combining RDKit and PaDEL features...")
        features_df = pd.concat([rdkit_features_df, padel_features_df], axis=1)
        return features_df
    except Exception as e:
        print(f"Error generating features: {e}")
        return None

def get_selected_features(smile):
    """Selects features from a DataFrame and saves the result to a CSV file.

    Args:
        smile: A SMILE string.

    Returns:
        A DataFrame containing the selected features, or None if an error occurs.
    """
    try:
        print_stylish_message("Generating all features...")
        features = generate_features(smile)
        if features is None:
            return None

        print_stylish_message("Sorting and saving features to CSV...")
        features = features[sorted(features.columns)]
        features.to_csv("features.csv", index=False)
        print(f"Features saved to 'features.csv'.")

        # Select features
        print_stylish_message("Selecting features...")
        selected_features = select_features(features)
        return selected_features
    except Exception as e:
        print(f"Error getting selected features: {e}")
        return None
    
def predict(smile):
    """Predicts the activity of a molecule given its SMILE string.

    Args:
        smile: A SMILE string.

    Returns:
        A string representing the predicted activity, or None if an error occurs.
    """
    try:
        print_stylish_message("Getting selected features...")
        selected_features = get_selected_features(smile)
        if selected_features is None:
            return None

        print_stylish_message("Making prediction...")
        # Load the model
        model = tf.keras.models.load_model("toxicity_prediction_model.h5")
        Y_pred_prob = model.predict(selected_features)
        Y_pred = (Y_pred_prob > 0.5).astype(int)
        print("prediction probability: ", Y_pred_prob)
        print("prediction: ", Y_pred)
        return Y_pred
    except Exception as e:
        print(f"Error predicting activity: {e}")
        return None

