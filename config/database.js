// Asynchronous
const crypto = require('crypto').randomBytes(256).toString('hex');

module.exports = {
    //url: 'mongodb://localhost:27017/mean-angular-2',
    uri: 'mongodb://batzol_angular:Ba123@ds147864.mlab.com:47864/angular-2-app-batzol',
    secret: crypto,
    db: 'angular-2-app-batzol'  //'mean-angular-2'
}