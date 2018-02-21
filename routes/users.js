let express = require('express');
let mysql = require('mysql');
let router = express.Router();
/*let con = mysql.createConnection({
    "connectTimeout": 50000,
    "host": "sql212.byethost9.com",
    "user": "b9_16347341",
    "password": "sawon1122334455",
    "database": "b9_16347341_testlab"
});
con.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected!");
});*/

/* GET users listing. */
router.get('/', function (req, res, next) {
    /*getAll("test", function (data) {
        console.log(data);
        res.json(data);
    });*/
    res.send("Users page!")
});

function add(table, fields, values) {
    const sql = "INSERT INTO test_report (field, actual, expected, status, type) VALUES ('" + field + "', '" + actual + "', '" + expected + "', '" + status + "', '" + type + "')";
    con.query(sql, function (err, result) {
        if (err) throw err;
    });
}


function getAll(table, response)
{
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
module.exports = router;
