const router = require('express').Router();
// import methods from controllers
const { getThoughts, getOneThought, createThought, updateThought, deleteThought } = require('../../controllers/thoughtController')

// set up routes for controller methods ex: router.route('/').get(getMethod).post(createMethod)
router.route('/').get(getThoughts);

router.route('/:id').get(getOneThought).post(createThought).put(updateThought).delete(deleteThought); 

module.exports = router;