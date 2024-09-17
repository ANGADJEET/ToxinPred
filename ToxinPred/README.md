# Molecular Toxicity Prediction Project

## Overview
This project focuses on developing a machine learning application for predicting molecular toxicity. By utilizing advanced deep learning models (Artificial Neural Networks) and Bayesian optimization, our solution surpasses existing tools like MolToxPred and ToxiM. We built a custom dataset from public databases such as T3DB and research papers, applying feature engineering to gain enhanced data insights.

## Features
- **Custom Dataset**: Compiled from public databases (T3DB) and research papers.
- **Feature Engineering**: Applied to extract meaningful insights and improve model performance.
- **Model Evaluation**: Compared multiple models including XGBoost, Logistic Regression, and ANN to identify the best-performing model.

## Data Collection
- **Sources**: Public databases like T3DB and various research papers.
- **Preprocessing**: Data cleaning, normalization, and feature extraction were performed to prepare the dataset for model training.

## Models and Techniques
### Artificial Neural Networks (ANN)
- Deep learning model chosen for its superior performance in this domain.
- Implemented with Bayesian optimization for hyperparameter tuning.

### XGBoost
- Gradient boosting framework used as a baseline model.
- Known for its efficiency and performance in structured data.

### Logistic Regression
- Simple yet effective model used for comparison.
- Provides a benchmark for evaluating the performance of more complex models.

## Evaluation Metrics
- **Accuracy**: Percentage of correctly predicted instances.
- **Precision**: Proportion of true positive predictions among all positive predictions.
- **Recall**: Proportion of true positive predictions among all actual positives.
- **F1 Score**: Harmonic mean of precision and recall, providing a balance between the two.

## Results
- **ANN with Bayesian Optimization**: Outperformed other models, showing the highest accuracy and best overall performance.
- **Comparison**: ANN > XGBoost > Logistic Regression in terms of accuracy and predictive capability.

## Installation
1. **Clone the repository**:
    ```bash
    git clone https://github.com/ANGADJEET/MolToxInsight
    ```

## Running the Project
   
1. **Navigate to the `neuralTox` directory**:
    ```bash
    cd neuralTox
    ```

### Backend
1. Navigate to the backend directory:
    ```bash
    cd backend
    ```

2. Run the server:
    ```bash
    python app.py
    ```

3. Wait for the server to start.

### Frontend
1. Navigate to the frontend directory:
    ```bash
    cd ..
    cd frontend
    ```

2. Run the development server:
    ```bash
    npm run dev
    ```

3. Click on the provided link to access the application.

## Acknowledgements
- **T3DB**: For providing comprehensive data on toxic compounds.
- **Research Papers**: For the foundational knowledge and additional data sources.
- **Open Source Libraries**: Including Scikit-learn, TensorFlow, and XGBoost, which made this project possible.

For any questions or issues, please open an issue on the repository or contact us at [angadjeet22071@iiitd.ac.in ](mailto:angadjeet22071@iiitd.ac.in)[arav22091@iiitd.ac.in](mailto:arav22091@iiitd.ac.in).