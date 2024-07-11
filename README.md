# Molecular Toxicity Prediction Project README

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
1. **Artificial Neural Networks (ANN)**: 
   - Deep learning model chosen for its superior performance in this domain.
   - Implemented with Bayesian optimization for hyperparameter tuning.

2. **XGBoost**:
   - Gradient boosting framework used as a baseline model.
   - Known for its efficiency and performance in structured data.

3. **Logistic Regression**:
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
1. Clone the repository:
   ```bash
   git clone https://github.com/ANGADJEET/MolToxInsight
   ```
2. Navigate to the project directory:
   ```bash
   cd src
   ```

## Usage
1. **Data Preparation**: Ensure the dataset is in the correct format as required by the scripts.
2. **Model Training**: Run the training script to train the model.
   ```bash
   python dl_model.py
   ```

## Contributing
We welcome contributions to improve this project. Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements
- **T3DB**: For providing comprehensive data on toxic compounds.
- **Research Papers**: For the foundational knowledge and additional data sources.
- **Open Source Libraries**: Including Scikit-learn, TensorFlow, and XGBoost, which made this project possible.

For any questions or issues, please open an issue on the repository or contact us at angadjeet22071@iiitd.ac.in.
