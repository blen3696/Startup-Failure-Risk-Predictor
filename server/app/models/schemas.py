from pydantic import BaseModel, Field

class StartupInput(BaseModel):
    funding_total_usd: float = Field(..., example=5000000)
    funding_rounds: int = Field(..., example=3)
    years_active: float = Field(..., example=4.5)
    burn_rate: float = Field(..., example=1000000)
    revenue_growth: float = Field(..., example=2.5)
    category: str = Field(..., example="Apps")


class PredictionResponse(BaseModel):
    model: str
    failure_probability: float
    risk_level: str
