const http = require('http');
const path = require('path');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const rootDir = require('./util/path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// setting global configuration items
// we are telling express that we want to compile dynamic templates with the pug engine and where to find these templates
app.set('view engine', 'pug');
app.set('views', 'views'); // this is already set automatically because root/views is the default 

app.use(bodyParser.urlencoded({ extended: false }));
// Using Express's static middleware to serve static files for styling (we can create multiple static middlewares)
app.use(express.static(path.join(rootDir, 'public')));

// /admin - starting segment for all routes of adminRoutes
app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404', { docTitle: '404 - Not Found' })
})

app.listen(3000);