import StringUtils from '../utils/StringUtils'


const format = (input) => {
  if(StringUtils.isEmpty(input)) {
    return StringUtils.EMPTY
  }
  return StringUtils.removeSpace(input)
}
export default {
  format
}
