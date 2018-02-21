//region Import
const fs = require('fs');
const split = require('split');
let mysql = require('mysql');
const config = require('../../config.json');
let con;
const dateTime = require('date-time');
//endregion

module.exports = class Database {
    constructor() {
        con = mysql.createConnection(config.DATABASE.DB_CONFIG).connect(function (err) {
            if (err) throw err;
            console.log("Database Connected!");
        });
    }

    add(table, fields, values) {
        const sql = "INSERT INTO test_report (field, actual, expected, status, type) VALUES ('" + field + "', '" + actual + "', '" + expected + "', '" + status + "', '" + type + "')";
        con.query(sql, function (err, result) {
            if (err) throw err;
        });
    }

    getAll(table, response) {
        con.query("SELECT * FROM " + table, function (err, result) {
            if (err) {
                response({status: false, data: result, message: err});
            }
            if (result.length > 0) {
                response({status: true, data: result});
            } else {
                response({status: false, data: result, message: 'No Data Found!'});
            }
        });
    }
};