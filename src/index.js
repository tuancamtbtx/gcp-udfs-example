import stringFormatter from './handlers/stringFormatter'

const index = {}

index.stringFormatter = stringFormatter

Object.assign(globalThis, index)

export default index
