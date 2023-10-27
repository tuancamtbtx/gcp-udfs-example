import stringFormatter from '../src/handlers/stringFormatter'

describe('stringFormatter', () => {
  // unit test format phone number
  describe('format()', () => {
    it('returns a formatted', () => {
      expect(stringFormatter.format('nguyen van tuan')).toStrictEqual('nguyenvantuan')
    })
  })
})
