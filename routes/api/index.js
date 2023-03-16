const router = require('express').Router();
// import api routes
const userRoutes = require('./userRoutes');
// set up router.use() with imported routes
router.use('users', userRoutes);

module.exports = router;