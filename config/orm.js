
let connection = require("../config/connection.js");
//Add question marks where needed to send query to database.
function printQuestionMarks(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function objToSql(ob) {
  let arr = [];
  for (let key in ob) {
    let value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      //Add quotation marks if string has spaces.
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

// SQL statement functions.
let orm = {
  selectAll: function (tableInput, cb) {
    //Display all records using MySQL syntax.
    let queryString = `SELECT * FROM ${tableInput};`
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  createOne: function (table, cols, vals, cb) {
    //Insert record into database using MySQL syntax.
    let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${(printQuestionMarks(vals.length))})`
    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne: function (table, objColVals, condition, cb) {
    //Update value of 'devoured' using MySQL syntax.
    let queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

// Export ORM object for burger.js.
module.exports = orm;
