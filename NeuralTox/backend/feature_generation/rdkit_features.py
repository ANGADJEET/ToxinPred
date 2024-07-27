import pandas as pd
from rdkit import Chem
from rdkit.Chem import Descriptors, AllChem

def print_stylish_message(message):
    """Prints a stylish message with line breaks."""
    print("\n" + "="*50)
    print(f"{message}")
    print("="*50 + "\n")

def calculate_rdkit_descriptors(mol):
    """Calculates RDKit descriptors for a given molecule.

    Args:
        mol: An RDKit Mol object representing the molecule.

    Returns:
        A list of RDKit descriptors, or a list of Nones if an error occurs.
    """
    try:
        print_stylish_message("Calculating RDKit descriptors...")
        descriptors = [desc[1](mol) for desc in Descriptors.descList]
        return descriptors
    except Exception as e:
        print(f"Error calculating RDKit descriptors for molecule: {e}")
        return [None] * len(Descriptors.descList)

def calculate_morgan_fingerprint(mol):
    """Calculates a Morgan fingerprint (2D) for a given molecule.

    Args:
        mol: An RDKit Mol object representing the molecule.

    Returns:
        A list of bits representing the Morgan fingerprint, or a list of Nones if an error occurs.
    """
    try:
        print_stylish_message("Calculating Morgan fingerprints (2D)...")
        fp = AllChem.GetMorganFingerprintAsBitVect(mol, 2)
        return list(fp)
    except Exception as e:
        print(f"Error calculating Morgan fingerprints for molecule: {e}")
        return [None] * 2048

def calculate_ecfp_fingerprint(mol):
    """Calculates an ECFP fingerprint (3D) for a given molecule.

    Args:
        mol: An RDKit Mol object representing the molecule.

    Returns:
        A list of bits representing the ECFP fingerprint, or a list of Nones if an error occurs.
    """
    try:
        print_stylish_message("Calculating ECFP fingerprints (3D)...")
        fp = AllChem.GetMorganFingerprintAsBitVect(mol, 3)
        return list(fp)
    except Exception as e:
        print(f"Error calculating ECFP fingerprints for molecule: {e}")
        return [None] * 2048

def concatenate_rdkit_features(rdkit_descriptors, morgan_fingerprints, ecfp_fingerprints):
    """Concatenates RDKit descriptors and fingerprints into a single DataFrame.

    Args:
        rdkit_descriptors: List of RDKit descriptors.
        morgan_fingerprints: List of Morgan fingerprints.
        ecfp_fingerprints: List of ECFP fingerprints.

    Returns:
        A DataFrame containing all descriptors and fingerprints, or None if an error occurs.
    """
    try:
        print_stylish_message("Creating DataFrame for RDKit descriptors...")
        rdkit_columns = [desc[0] for desc in Descriptors.descList]
        rdkit_df = pd.DataFrame([rdkit_descriptors], columns=rdkit_columns)

        print_stylish_message("Creating DataFrame for Morgan fingerprints...")
        morgan_columns = [f"Morgan_{i}" for i in range(2048)]
        morgan_df = pd.DataFrame([morgan_fingerprints], columns=morgan_columns)

        print_stylish_message("Creating DataFrame for ECFP fingerprints...")
        ecfp_columns = [f"ECFP_{i}" for i in range(2048)]
        ecfp_df = pd.DataFrame([ecfp_fingerprints], columns=ecfp_columns)

        print_stylish_message("Concatenating descriptors and fingerprints...")
        features_df = pd.concat([rdkit_df, morgan_df, ecfp_df], axis=1)
        features_df.reset_index(drop=True, inplace=True)

        return features_df
    except Exception as e:
        print(f"Error concatenating features into DataFrame: {e}")
        return None

def generate_rdkit_features(smile):
    """Generates RDKit features for a given SMILE string.

    Args:
        smile: A SMILE string.

    Returns:
        A dataframe containing the RDKit features, or None if an error occurs.
    """
    try:
        print_stylish_message("Generating RDKit features...")
        mol = Chem.MolFromSmiles(str(smile))
        if mol is None:
            print("Error: Invalid SMILES string.")
            return None

        rdkit_descriptors = calculate_rdkit_descriptors(mol)
        morgan_fingerprints = calculate_morgan_fingerprint(mol)
        ecfp_fingerprints = calculate_ecfp_fingerprint(mol)

        features_df = concatenate_rdkit_features(rdkit_descriptors, morgan_fingerprints, ecfp_fingerprints)
        return features_df
    except Exception as e:
        print(f"Error generating RDKit features: {e}")
        return None
