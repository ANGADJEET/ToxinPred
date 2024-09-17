import pandas as pd
import pickle
import joblib
from sklearn.impute import SimpleImputer
from sklearn.preprocessing import StandardScaler

def print_stylish_message(message):
    """Prints a stylish message with line breaks."""
    print("\n" + "="*50)
    print(f"{message}")
    print("="*50 + "\n")

def remove_duplications(features_df):
    """Removes duplicated columns from a DataFrame.

    Args:
        features_df: A DataFrame containing features.

    Returns:
        A DataFrame with duplicated columns removed.
    """
    try:
        print_stylish_message("Removing duplicated columns...")
        with open("feature_selection/utils/duplicate_columns.txt") as f:
            duplicate_columns = f.read().splitlines()

        features_df = features_df.drop(columns=[col for col in duplicate_columns if col in features_df.columns])
        return features_df
    except Exception as e:
        print(f"Error removing duplicated columns: {e}")
        return None

def preprocess_features(feature_dataframe):
    """
    Preprocesses a DataFrame by handling missing values and scaling features.

    Args:
        feature_dataframe (pd.DataFrame): A DataFrame containing features.

    Returns:
        pd.DataFrame: A preprocessed DataFrame with missing values imputed and features scaled,
                      or None if an error occurs.
    """
    if feature_dataframe is None:
        print("Error: Input DataFrame is None.")
        return None

    try:
        print_stylish_message("Loading imputer and scaler...")
        # Load the imputer and scaler from their respective files
        with open("feature_selection/utils/simple_imputer.pkl", "rb") as imputer_file:
            imputer = pickle.load(imputer_file)
        with open("feature_selection/utils/scaler.pkl", "rb") as scaler_file:
            scaler = pickle.load(scaler_file)
        
        print_stylish_message("Imputing missing values...")
        imputed_features = imputer.transform(feature_dataframe)
        print_stylish_message("Scaling features...")
        scaled_features = scaler.transform(imputed_features)

        return pd.DataFrame(scaled_features, columns=feature_dataframe.columns)
    except Exception as error:
        print(f"Error in preprocessing features: {error}")
        return None

def select_features(features_df):
    """Selects features from a DataFrame.

    Args:
        features_df: A DataFrame containing features.

    Returns:
        A DataFrame containing the selected features, or None if an error occurs.
    """
    try:
        print_stylish_message("Starting feature selection...")
        features_df = remove_duplications(features_df)
        if features_df is None:
            return None

        preprocessed_features = preprocess_features(features_df)
        if preprocessed_features is None:
            return None

        print_stylish_message("Loading selected features...")
        with open("feature_selection/utils/important_features.txt") as f:
            selected_features = f.read().splitlines()

        preprocessed_features = preprocessed_features[selected_features]
        
        print_stylish_message("Loading PCA instance...")
        with open("feature_selection/utils/pca_instance.pkl", "rb") as pca_instance_file:
            pca = joblib.load(pca_instance_file)
        
        print_stylish_message("Applying PCA transformation...")
        transformed_features = pca.transform(preprocessed_features)

        print_stylish_message("Feature selection completed.")
        print("Transformed features shape:", transformed_features.shape)
        
        transformed_features = pd.DataFrame(transformed_features, columns=[f'PC{i+1}' for i in range(pca.n_components_)])
        return transformed_features
    except Exception as e:
        print(f"Error selecting features: {e}")
        return None
