# [WIP]Serverless Compose
Orchestrator for multiple serverless services. Suppoert for the Serverless Framework and Serverless Components.

## serverless-compose.yml

```yaml
services:
  db:
    type: components
    path: ./db/
  api:
    type: serverless
    path: ./api/
    depends_on:
      - db
  shared_api:
    type: serverless
    path: ./shared_api/
    depends_on:
      - api
      - db
```
