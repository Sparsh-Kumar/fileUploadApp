

const path = require ('path');
const { User } = require (path.resolve (__dirname, '..', 'Databases', 'Models', 'User'));

const deleteUser = async (req, res) => {
    
    try {

        const id = req.params.id;
        if (!id) {
            throw new Error ('No Id is present in the request');
        }

        const user = await User.findOne ({ _id: id }).lean ();
        if (!user) {
            throw new Error ('No user exists with the given ID');
        }

        const deletedUser = await User.findOneAndDelete ({
            _id: id
        });

        return res.status (200).send ({
            status: 'success',
            deletedUser
        })

    } catch (error) {
        return res.status (401).send ({
            status: 'failure',
            message: error.message
        })
    }

}

module.exports = {
    deleteUser
}