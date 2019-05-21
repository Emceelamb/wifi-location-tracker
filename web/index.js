var express = require('express');
var app = express();
app.use(express.static('.'));

// var bodyParser = require("body-parser");
//app.use(bodyParser.json());
var counter = 0;

var {
  Client
} = require('pg');
var client;

client = new Client({
  database: 'inclass3'
});

client.connect();

var inputFile = 'aptest-02.csv';

const PORT = process.env.PORT || 8000;

var fs = require('fs');
var parse = require('csv-parse');


var csvData = [];
fs.createReadStream('aptest-02.csv')
  .pipe(parse({
    delimiter: ';'
  }))
  .on('data', function(csvrow) {
    console.log(csvrow); //print each row of csv file
    // counter = 0;
    if (counter > 4) {
      csvData.push(csvrow);
    }
    counter++;
    client.query('DELETE FROM devices', function(e, r) {
      console.log('deleting old entries');
    });

  })
  .on('end', function() {
    console.log('new csv');
    console.log(csvData); //print each row of new csv file excluding the first 4 rows

    csvData.forEach(element => {
      let arr = element[0].split(',');
      // console.log(arr[0]);
      client.query('INSERT INTO devices (station, ap) VALUES ($1, $2)', [arr[0], arr[5]], function(error, results) {
        console.log('adding new entries');
      });
    });
    // client.query('DELETE FROM devices ORDER BY id DESC LIMIT 1', function(error, results) {
    //   console.log('deleted last blank entry');
    // });
  });

app.get('/getData', function(req, res1) {
  let message = [];
  // console.log("got data request from main.js");
  client.query('SELECT * FROM devices', function(err, result) {
    if (err) {
      console.log(error);
    }
    for (let row of result.rows) {
      message.push(row);
    }
    // console.log(message);
    res1.send(message);
  });
});


app.listen(PORT, function() {
  console.log('Server up! Listening on port: ' + PORT);
});
