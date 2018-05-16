# Serverless Compose
Orchestrator for multiple serverless services. Suppoert for the Serverless Framework and Serverless Components.

## serverless-compose.yml

```
services:
  api:
    type: serverless
    path: ./api/
  shared_api:
    type: serverless
    path: ./api/
    depends_on:
      - api
```
