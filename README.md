# Google BigQuery Javascript UDF Function Examples
![Google Badge](https://img.shields.io/badge/GoogleCloud-4285F4?style=for-the-badge&labelColor=black&logo=Google%20Cloud&logoColor=white)

## Progaming language
![Nodejs Badge](https://img.shields.io/badge/-Nodejs-3C873A?style=for-the-badge&labelColor=black&logo=node.js&logoColor=3C873A)

## Install

```
nvm use
npm install
```
## Lint Code
Before push this code to Github (Please run)
```
npm run lint
```
## Testing

To run unit tests:

```
npm run test
```

To run the distribution asset tests:

```
npm run build
npm run test:dist
````

## Deploy

*This requires your terminal to be authenticated with the GCloud SDK*

```
export DEST_BUCKET=your_bucket_name
export GCP_PROJECT=your_project_gcp_id

npm run build
npm run deploy
```

*To Create UDF Function on A Dataset Bigquery*
```
CREATE FUNCTION `${dataset_name}`.stringFormatter(input STRING)
  RETURNS STRING
    LANGUAGE js
    OPTIONS (
      library=["gs://js-udfs/bigquery-js-udf-example/dist/dist.js"]
    )
    AS r"""
      return stringFormatter.format(input);
    """
;

SELECT `${dataset_name}`.stringFormatter("I am Tuan Cam ") AS result;
```