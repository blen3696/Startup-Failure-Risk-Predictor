<p align="center">
  <img src="./client/src/assets/image.png" alt="Startup Failure Risk Predictor" width="1000" />
</p>


# Startup Failure Risk Predictor


An end-to-end machine learning application that predicts the risk of startup failure using historical funding and company data.
The system combines production-ready ML pipelines, a FastAPI backend, and a modern React + Tailwind frontend, deployed to cloud platforms.



## Overview

Startup failure is influenced by multiple factors such as funding history, market category, and operational duration. This project provides a probabilistic risk assessment and classifies startups into **Low**, **Medium**, or **High** failure risk categories.

The focus of this project is not only predictive accuracy, but also clean system design, maintainability, and deployability, following industry best practices.



## Machine Learning

### Dataset

* **Source:** Kaggle (Crunchbase-derived dataset)
* **File:** `big_startup_secsees_dataset.csv`
* **Records:** ~19,000 startups

### Target

Binary classification derived from startup status:

* Failed / Closed → Failure
* Operating / Acquired → Non-failure

### Models

* Logistic Regression
* Decision Tree Classifier

### Feature Engineering

* Funding metrics
* Temporal features (company lifetime, funding cadence)
* Market category encoding
* Financial proxies (burn rate, growth indicators)

### Pipeline Design

* All preprocessing (scaling, encoding) is encapsulated inside a single Scikit-Learn pipeline
* Pipelines are serialized using `joblib`
* Backend performs inference using the saved pipeline directly (no duplicated preprocessing logic)



## Backend API

### Stack

* FastAPI
* Scikit-Learn
* Pydantic
* Uvicorn

### Responsibilities

* Input validation
* Model inference
* Probability estimation
* Risk classification

### Risk Classification Logic

| Failure Probability | Risk Level |
| ------------------- | ---------- |
| < 0.35              | Low        |
| 0.35 – 0.65         | Medium     |
| > 0.65              | High       |

### API Endpoint

```
POST /predict
```

### Example Request

```json
{
  "funding_amount": 500000,
  "team_size": 12,
  "market_type": "SaaS",
  "revenue_growth": 0.4,
  "burn_rate": 18000
}
```

### Example Response

```json
{
  "failure_probability": 0.72,
  "risk_level": "High"
}
```

The backend is deployed on Render as a production-ready web service.


## Frontend Client

### Stack

* React
* Tailwind CSS
* Axios

### Features

* Modern dark-themed interface
* Startup input form
* Real-time predictions
* Clear visual risk labeling
* Responsive layout

The frontend is deployed on Vercel and communicates with the FastAPI backend via REST.



## Deployment

### Backend

* **Platform:** Render
* **Service Type:** Web Service
* **Start Command:**

```bash
python -m uvicorn app.main:app --host 0.0.0.0 --port 10000
```

### Frontend

* **Platform:** Vercel
* Environment variable configuration for backend API URL



## Design Principles

* Separation of concerns
* Reusable ML pipelines
* Version-controlled dependencies
* Clear API contracts
* Cloud-native deployment

This project is intentionally structured to resemble real-world production systems.


