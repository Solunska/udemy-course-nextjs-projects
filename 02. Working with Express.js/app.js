const http = require('http');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const rootDir = require('./util/path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, 'public'))); // Using Express's static middleware to serve static files for styling (we can create multiple static middlewares)

// /admin - starting segment for all routes of adminRoutes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})

app.listen(3000);