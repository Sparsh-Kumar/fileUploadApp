
const Router = require ('express').Router ();
const path = require ('path');
const { createUser } = require (path.resolve (__dirname, '..', 'controllers', 'createUser'));
const { getUsers } = require (path.resolve (__dirname, '..', 'controllers', 'getUsers'));
const { deleteUser } = require (path.resolve (__dirname, '..', 'controllers', 'deleteUser'));
const { upload } = require (path.resolve (__dirname, '..', 'multerConfig', 'multerConfig'));


Router.post ('/create-user', upload.single ('avatar'), createUser);
Router.get ('/get-users', getUsers);
Router.delete ('/delete-user/:id', deleteUser);

module.exports = {
    Router
}