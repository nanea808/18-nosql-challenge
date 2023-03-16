const router = require('express').Router();
// import methods from controllers
const { getUsers, getSingleUser, createUser, removeUser, updateUser } = require('../../controllers/userController');

// set up routes for controller methods ex: router.route('/').get(getMethod).post(createMethod) 
router.route('/').get(getUsers).post(createUser);

router.route('/:id').get(getSingleUser).delete(removeUser).put(updateUser);

module.exports = router;