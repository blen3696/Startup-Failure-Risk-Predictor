import joblib
from app.core.config import LOGISTIC_MODEL_PATH, DECISION_TREE_MODEL_PATH

logistic_model = joblib.load(LOGISTIC_MODEL_PATH)
tree_model = joblib.load(DECISION_TREE_MODEL_PATH)
