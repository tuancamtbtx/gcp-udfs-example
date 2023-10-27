import path from 'path'
import { Storage } from '@google-cloud/storage'

const storage = new Storage({ projectId: process.env.GCP_PROJECT })

const createBucketIfNeeded = async (bucketName) => {
  try {
    await storage.createBucket(bucketName)
  } catch (e) {
    if (e.message !== 'The requested bucket name is not available. The bucket namespace is shared by all users of the system. Please select a different name and try again.') throw e
  }
  return storage.bucket(bucketName)
}

const uploadFile = (bucket, dest, source) => {
  return bucket.upload(source, {
    destination: path.join(dest, source)
  })
}

const upload = async () => {
  const bucketName = process.env.DEST_BUCKET
  if (!bucketName) throw new Error('DEST BUCKET env var not set')
  const bucket = await createBucketIfNeeded(bucketName)
  await uploadFile(bucket, 'js_libs', 'dist/dist.js')
}
export default {
  upload,
  uploadFile,
  createBucketIfNeeded
}
