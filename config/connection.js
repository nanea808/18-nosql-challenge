// import mongoose
const { connect, connection } = require('mongoose');


// connect method (set useNewParser and useUnifiedTopology to true)
connect('mongodb://localhost/CDN-Api', {
    useNewParser: true,
    useUnifiedTopology: true,
});
// export
module.exports = connection;
