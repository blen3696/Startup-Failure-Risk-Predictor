from app.models.ml_models import logistic_model, tree_model
from app.services.risk import risk_label

def predict(model_name: str, features):
    model = logistic_model if model_name == "logistic" else tree_model
    prob = model.predict_proba(features)[0][1]
    return prob, risk_label(prob)
