const fs = require('fs');
const path = require('path');

const rootDir = require('../util/path');

const p = path.join(rootDir, 'data', 'products.json');

const getProductsFromFile = (callback) => {
    fs.readFile(p, (err, fileContent) => {
        if (err) {
            return callback([]);
        }
        callback(JSON.parse(fileContent));
    });
}


module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    // with static we make sure we can call this method directly on the class itself, and not on an instantiated object
    static fetchAll(cb) {
        getProductsFromFile(cb);
    }
}