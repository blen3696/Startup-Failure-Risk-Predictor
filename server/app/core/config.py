from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent.parent
MODEL_DIR = BASE_DIR / "artifacts"

LOGISTIC_MODEL_PATH = MODEL_DIR / "logistic_startup_failure_model.pkl"
DECISION_TREE_MODEL_PATH = MODEL_DIR / "decision_tree_startup_failure_model.pkl"
