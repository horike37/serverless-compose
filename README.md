# [WIP]Serverless Compose
Orchestrator for multiple serverless services. Suppoert for the Serverless Framework and Serverless Components.

## Getting Started
```
$ compose deploy
$ compose remove
```

## serverless-compose.yml

```yaml
services:
  db:
    type: components # Specify serverless or components
    path: ./db/ # Path to serverless.yml
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
