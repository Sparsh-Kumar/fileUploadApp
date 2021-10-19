
const path = require ('path');
const { User } = require (path.resolve (__dirname, '..', 'Databases', 'Models', 'User'));

const getUsers = async (req, res) => {

    try {

        const users = await User.find ({}).lean ();
        return res.status (200).send ({
            status: 'success',
            users
        })
        
    } catch (error) {
        return res.status (401).send ({
            status: 'failure',
            message: error.message
        })
    }

}

module.exports = {
    getUsers
}