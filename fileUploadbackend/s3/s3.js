

const S3 = require ('aws-sdk/clients/s3');
const fs = require ('fs');


/** initialize new instance of S3 */

const bucketName = process.env.AWS_BUCKET_NAME;

const s3 = new S3 ({
    
    region: process.env.AWS_BUCKET_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY

})

/** uploads a file to S3 */

const uploadFile = async (file) => {

    try {

        const fileStream = fs.createReadStream (file.path);
        const uploadParams = {
            Bucket: bucketName,
            Body: fileStream,
            Key: file.filename
        }

        return s3.upload (uploadParams).promise ();

    } catch (error) {
        return new Promise ((resolve, reject) => {
            reject (error)
        })
    }

}


/** downloads a file from S3 */

const downloadFile = async (fileKey) => {

    try {

        const downloadParams = {
            key: fileKey,
            Bucket: bucketName
        }

        return s3.getObject (downloadParams).createReadStream ();

    } catch (error) {
        return new Promise ((resolve, reject) => {
            reject (error);
        })
    }

}

module.exports = {
    uploadFile,
    downloadFile
}