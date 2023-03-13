// import mongoose
const { connect, connection } = require('mongoose');

// connect method (set useUnifiedTopology to true)
connect('mongodb://localhost/CDN-Api', {
    useUnifiedTopology: true,
});

// export
module.exports = connection;
