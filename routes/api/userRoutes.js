const router = require('express').Router();
// import methods from controllers
const { getUsers, getSingleUser, createUser, removeUser, updateUser, addFriend, deleteFriend } = require('../../controllers/userController');

// set up routes for controller methods ex: router.route('/').get(getMethod).post(createMethod) 
router.route('/').get(getUsers).post(createUser);

router.route('/:id').get(getSingleUser).delete(removeUser).put(updateUser);

router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;