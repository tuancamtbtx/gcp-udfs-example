# Google BigQuery Javascript UDF Function Examples



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
CREATE FUNCTION `${dataset_name}`.phoneNumberFormat(input STRING, code STRING, formatType STRING)
  RETURNS STRING
    LANGUAGE js
    OPTIONS (
      library=["gs://js-udfs/bigquery-js-udf-example/dist/dist.js"]
    )
    AS r"""
      return PhoneNumberFormatter.format(input, code, formatType);
    """
;

SELECT `${dataset_name}`.phoneNumberFormat("0387902375", "VN", "E164") AS result;
```