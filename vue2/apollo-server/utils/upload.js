import { createWriteStream } from 'fs'
import { resolve } from 'path'
import { sync } from 'mkdirp'
import { generate } from 'shortid'
import { db } from './db'

const uploadDir = resolve(__dirname, '../../live/uploads')

// Ensure upload directory exists
sync(uploadDir)

const storeUpload = async ({ stream, filename }) => {
  const id = generate()
  const file = `${id}-${filename}`
  const path = `${uploadDir}/${file}`
  const urlPath = `files/${file}`

  try {
    const promise = new Promise((resolve, reject) => {
      stream
        .pipe(createWriteStream(path))
        .on('finish', () => resolve({ id, path: urlPath }))
        .on('error', reject);
    });

    const result = await promise;
    return result;
  } catch (error) {
    console.log('storeUpload / error:', error)
  }
}

const recordFile = file =>
  db
    .get('uploads')
    .push(file)
    .last()
    .write()

export async function processUpload (file) {
  try {
    const { createReadStream, filename, mimetype, encoding } = await file
    const stream = await createReadStream();
    const { id, path } = await storeUpload({ stream, filename })
    return recordFile({ id, filename, mimetype, encoding, path })
  } catch (error) {
    console.log('processUpload / error:', error)
  }
}
