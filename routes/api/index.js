const router = require('express').Router();
// import api routes
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// set up router.use() with imported routes
router.use('/users', userRoutes);

router.use('/thoughts', thoughtRoutes);

module.exports = router;