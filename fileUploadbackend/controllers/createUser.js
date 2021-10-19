
const _ = require ('lodash');
const path = require ('path');
const { uploadFile } = require (path.resolve (__dirname, '..', 's3', 's3'));
const { User } = require (path.resolve (__dirname, '..', 'Databases', 'Models', 'User'));

const createUser = async (req, res) => {

    try {

        const { name } = _.pick (req.body, ['name']);
        if (!name) {
            throw new Error ('No name is present in the request');
        }

        const file = req.file;
        if (!file) {
            throw new Error ('No file is present');
        }

        const user = await User.create ({ name, profileImage: file.location });
        return res.status (200).send ({
            status: 'success',
            user
        })


    } catch (error) {
        return res.status (401).send ({
            status: 'failure',
            message: error.message
        })
    }

}

module.exports = {
    createUser
}