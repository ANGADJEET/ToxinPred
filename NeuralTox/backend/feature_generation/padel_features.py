import padelpy
import pandas as pd
import os
from padelpy import padeldescriptor

def print_stylish_message(message):
    """Prints a stylish message with line breaks."""
    print("\n" + "="*50)
    print(f"{message}")
    print("="*50 + "\n")

def create_smi_file(smile):
    """Creates a SMILES file from a given SMILES string.

    Args:
        smile: A SMILES string representing a molecule.

    Returns:
        A string representing the path to the SMILES file.
    """
    smi_file = 'CRPD.smi'
    try:
        with open(smi_file, "w") as f:
            f.write(str(smile))
        print_stylish_message("SMILES file created successfully.")
        return smi_file
    except Exception as e:
        print(f"Error creating SMILES file: {e}")
        return None

def get_xml_files():
    """Returns a list of XML files containing PaDEL descriptors.

    Returns:
        A list of strings representing the paths to the XML files.
    """
    try:
        print_stylish_message("Fetching XML files...")
        xml_files = [i for i in os.listdir('feature_generation\descriptors') if i.endswith('.xml')]
        xml_files.sort()
        print_stylish_message(f"Found {len(xml_files)} XML files.")
        return xml_files
    except Exception as e:
        print(f"Error fetching XML files: {e}")
        return []

def generate_padel_features(smile):
    """Generates PaDEL features for a given SMILE string.

    Args:
        smile: A SMILE string.

    Returns:
        A dataframe containing the PaDEL features, or None if an error occurs.
    """
    try:
        print_stylish_message("Starting PaDEL feature generation...")
        
        # Create a SMILES file
        features_df = pd.DataFrame()
        print_stylish_message("Creating SMILES file...")
        smi_file = create_smi_file(smile)
        if smi_file is None:
            return None

        xml_files = get_xml_files()
        
        for xml_file in xml_files:
            print_stylish_message(f"Generating PaDEL features for {xml_file}...")
            try:
                output_csv = f'{xml_file[:-4]}.csv'
                padeldescriptor(
                    mol_dir=smi_file,
                    d_file=output_csv,
                    descriptortypes=os.path.join('feature_generation\descriptors', xml_file),
                    retainorder=True,
                    fingerprints=True,
                    d_2d=False,
                    d_3d=False
                )
                fp = pd.read_csv(output_csv)
                fp = fp.drop('Name', axis=1)
                features_df = pd.concat([features_df, fp], axis=1)
                os.remove(output_csv)
            except Exception as e:
                print(f"Error generating PaDEL features for {xml_file}: {e}")
                continue
        print_stylish_message("PaDEL feature generation completed.")
        return features_df
    except Exception as e:
        print(f"Error generating PaDEL features: {e}")
        return None
