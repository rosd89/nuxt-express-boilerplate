import multer from 'multer'

const upload = multer()

export const single = fieldName => upload.single(fieldName)

export const array = fieldName => upload.array(fieldName)

export default { single, array }
