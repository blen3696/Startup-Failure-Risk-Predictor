from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.predict import router as predict_router


origins = [
    "http://localhost:5173",  # Testing         
    "https://startup-failure-risk-predictor.vercel.app", 
]

app = FastAPI(
    title="Startup Failure Risk Predictor",
    version="1.0.0"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(predict_router)

@app.get("/")
def health():
    return {"status": "ok"}
