import CommonStorage from '../common/storage'

CommonStorage.upload()
  .catch((e) => {
    console.error(e.message)
    process.exit(1)
  })
  .then(() => {
    console.log('...Success')
  })
