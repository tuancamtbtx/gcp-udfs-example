import { Bigquery } from '@google-cloud/bigquery'

const getBigqueryClient = () => {
  return new Bigquery()
}
const createDataset = async ({ datasetName }) => {
  const bigqueryClient = getBigqueryClient()
  const [dataset] = await bigqueryClient.createDataset(datasetName)
  return dataset
}
const executeQuery = async ({ sql }) => {
  const options = {
    query: sql
  }
  const bigqueryClient = getBigqueryClient()
  const [rows] = await bigqueryClient.query(options)
  return rows
}
export default {
  getBigqueryClient,
  createDataset,
  executeQuery
}
