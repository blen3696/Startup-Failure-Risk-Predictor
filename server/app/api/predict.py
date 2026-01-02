from fastapi import APIRouter
from app.models.schemas import StartupInput
from app.models.ml_models import logistic_model, tree_model
from app.services.risk import risk_label
import pandas as pd  

router = APIRouter(prefix="/predict", tags=["Prediction"])

@router.post("/")
def predict(input: StartupInput, model_name: str = "logistic"):

    data_dict = input.model_dump()
    df = pd.DataFrame([data_dict])  

    # Select model
    model = logistic_model if model_name == "logistic" else tree_model

    # Predict probability
    probability = model.predict_proba(df)[0][1]

    # Get risk label
    risk = risk_label(probability)

    return {
        "failure_probability": round(probability, 3),
        "risk_level": risk
    }



