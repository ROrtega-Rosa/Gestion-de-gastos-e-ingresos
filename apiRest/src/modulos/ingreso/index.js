const db = require('../../BD/mysql');
const ctrl = require('./controlador');

module.exports= ctrl(db);