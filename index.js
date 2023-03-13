// imports
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

// cwd
const cwd = process.cwd();

// port and app declarations
const PORT = 3001;
const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// connect to database
db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`${cwd} server running on https://localhost:${PORT}`);
    });
});