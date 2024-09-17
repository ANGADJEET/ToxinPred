import pandas as pd
from pymongo import MongoClient

# MongoDB configuration
MONGO_URI = 'mongodb+srv://angad071:angad123@cluster0.i8p0g.mongodb.net/'
DB_NAME = 'toxindb'
COLLECTION_NAME = 'toxins'

# Path to your CSV file
CSV_FILE_PATH = './boruta_features.csv.csv'

def import_csv_to_mongodb():
    # Connect to MongoDB
    client = MongoClient(MONGO_URI)
    db = client[DB_NAME]
    collection = db[COLLECTION_NAME]

    # Read CSV file into DataFrame
    df = pd.read_csv(CSV_FILE_PATH)

    # Convert DataFrame to dictionary format
    data = df.to_dict(orient='records')

    # Insert data into MongoDB
    collection.insert_many(data)

    print(f'{len(data)} records inserted into MongoDB.')

if __name__ == '__main__':
    import_csv_to_mongodb()
