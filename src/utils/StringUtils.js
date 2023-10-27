
const EMPTY = ''

const removeSpace = (input) => {
  if (!input) {
    return EMPTY
  }
  return String(input).replace(/\s/g, '')
}

const isEmpty = (str) => {
  return str == null || str.length <= 0
}

const isNotEmpty = (str) => {
  return !isEmpty(str)
}

export default {
  EMPTY,
  removeSpace,
  isEmpty,
  isNotEmpty
}
