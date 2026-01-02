from fastapi import FastAPI
from app.api.predict import router as predict_router

app = FastAPI(
    title="Startup Failure Risk Predictor",
    version="1.0.0"
)

app.include_router(predict_router)

@app.get("/")
def health():
    return {"status": "ok"}
