//new version check?
var express = require('express');
var app = express();
app.use(express.static('./web'));

// var bodyParser = require("body-parser");
//app.use(bodyParser.json());

var {
  Client
} = require('pg');
var client;

client = new Client({
  database: 'inclass3'
});

client.connect();

var inputFile_ap1 = './web/assets/aptest2-01.csv'; //make this aptest1-01.csv             //lounge
var inputFile_ap2 = './web/assets/aptest2-01.csv'; //make this aptest2-01.csv             //ima-area
var inputFile_ap3 = './web/assets/aptest2-01.csv'; //make this aptest3-01.csv             //j-area
var inputFile_ap4 = './web/assets/aptest2-01.csv'; //make this aptest4-01.csv             //room15

const PORT = process.env.PORT || 8000;

var fs = require('fs');
var parse = require('csv-parse');

setInterval(csv2pg_ap1, 10000);
setInterval(csv2pg_ap2, 10000);
setInterval(csv2pg_ap3, 10000);
setInterval(csv2pg_ap4, 10000);

function csv2pg_ap1() {
  var csvNew_ap1 = [];
  var counter_ap1 = 0;

  fs.createReadStream(inputFile_ap1)
    .pipe(parse({
      delimiter: ';'
    }))
    .on('data', function(oldcsvrow_ap1) {
      // console.log(oldcsvrow_ap1); //print each row of csv file
      // counter = 0;
      if (counter_ap1 > 4) {
        csvNew_ap1.push(oldcsvrow_ap1);
      }
      counter_ap1++;
      client.query('DELETE FROM devices', function(e, r) {
        // console.log('deleting old entries');
      });

    })
    .on('end', function() {
      console.log('new csv AP 1');
      console.log(csvNew_ap1); //print each row of new csv file excluding the first 4 rows

      csvNew_ap1.forEach(element => {
        let arr = element[0].split(',');
        // console.log(arr[0]);
        client.query('INSERT INTO devices (station, ap) VALUES ($1, $2)', [arr[0], arr[5]], function(error, results) {
          // console.log('adding new entries');
        });
      });
      // client.query('DELETE FROM devices ORDER BY id DESC LIMIT 1', function(error, results) {
      //   console.log('deleted last blank entry');
      // });
    });

  app.get('/getData1', function(req, res1) {
    let message1 = [];
    // console.log("got data request from main.js");
    client.query('SELECT * FROM devices', function(err, result1) {
      if (err) {
        console.log(err);
      }
      for (let row of result1.rows) {
        message1.push(row);
      }
      res1.send(message1);
    });
  });
}

function csv2pg_ap2() {
  var csvNew_ap2 = [];
  var counter_ap2 = 0;

  fs.createReadStream(inputFile_ap2)
    .pipe(parse({
      delimiter: ';'
    }))
    .on('data', function(oldcsvrow_ap2) {
      // console.log(oldcsvrow_ap2); //print each row of csv file
      // counter = 0;
      if (counter_ap2 > 4) {
        csvNew_ap2.push(oldcsvrow_ap2);
      }
      counter_ap2++;
      client.query('DELETE FROM devices2', function(e, r) {
        // console.log('deleting old entries2');
      });

    })
    .on('end', function() {
      console.log('new csv AP 2');
      console.log(csvNew_ap2); //print each row of new csv file excluding the first 4 rows

      csvNew_ap2.forEach(element => {
        let arr = element[0].split(',');
        // console.log(arr[0]);
        client.query('INSERT INTO devices2 (station, ap) VALUES ($1, $2)', [arr[0], arr[5]], function(error, results) {
          // console.log('adding new entries2');
        });
      });
      // client.query('DELETE FROM devices ORDER BY id DESC LIMIT 1', function(error, results) {
      //   console.log('deleted last blank entry');
      // });
    });

  app.get('/getData2', function(req, res2) {
    let message2 = [];
    // console.log("got data request from main.js");
    client.query('SELECT * FROM devices2', function(err, result2) {
      if (err) {
        console.log(err);
      }
      for (let row of result2.rows) {
        message2.push(row);
      }
      res2.send(message2);
    });
  });
}

function csv2pg_ap3() {
  var csvNew_ap3 = [];
  var counter_ap3 = 0;

  fs.createReadStream(inputFile_ap3)
    .pipe(parse({
      delimiter: ';'
    }))
    .on('data', function(oldcsvrow_ap3) {
      // console.log(oldcsvrow_ap3); //print each row of csv file
      // counter = 0;
      if (counter_ap3 > 4) {
        csvNew_ap3.push(oldcsvrow_ap3);
      }
      counter_ap3++;
      client.query('DELETE FROM devices3', function(e, r) {
        // console.log('deleting old entries3');
      });

    })
    .on('end', function() {
      console.log('new csv AP 3');
      console.log(csvNew_ap3); //print each row of new csv file excluding the first 4 rows

      csvNew_ap3.forEach(element => {
        let arr = element[0].split(',');
        // console.log(arr[0]);
        client.query('INSERT INTO devices3 (station, ap) VALUES ($1, $2)', [arr[0], arr[5]], function(error, results) {
          // console.log('adding new entries3');
        });
      });
      // client.query('DELETE FROM devices ORDER BY id DESC LIMIT 1', function(error, results) {
      //   console.log('deleted last blank entry');
      // });
    });

  app.get('/getData3', function(req, res3) {
    let message3 = [];
    // console.log("got data request from main.js");
    client.query('SELECT * FROM devices3', function(err, result3) {
      if (err) {
        console.log(err);
      }
      for (let row of result3.rows) {
        message3.push(row);
      }
      res3.send(message3);
    });
  });
}

function csv2pg_ap4() {
  var csvNew_ap4 = [];
  var counter_ap4 = 0;

  fs.createReadStream(inputFile_ap4)
    .pipe(parse({
      delimiter: ';'
    }))
    .on('data', function(oldcsvrow_ap4) {
      // console.log(oldcsvrow_ap4); //print each row of csv file
      // counter = 0;
      if (counter_ap4 > 4) {
        csvNew_ap4.push(oldcsvrow_ap4);
      }
      counter_ap4++;
      client.query('DELETE FROM devices4', function(e, r) {
        // console.log('deleting old entries3');
      });

    })
    .on('end', function() {
      console.log('new csv AP 4');
      console.log(csvNew_ap4); //print each row of new csv file excluding the first 4 rows

      csvNew_ap4.forEach(element => {
        let arr = element[0].split(',');
        // console.log(arr[0]);
        client.query('INSERT INTO devices4 (station, ap) VALUES ($1, $2)', [arr[0], arr[5]], function(error, results) {
          // console.log('adding new entries3');
        });
      });
      // client.query('DELETE FROM devices ORDER BY id DESC LIMIT 1', function(error, results) {
      //   console.log('deleted last blank entry');
      // });
    });

  app.get('/getData4', function(req, res4) {
    let message4 = [];
    // console.log("got data request from main.js");
    client.query('SELECT * FROM devices4', function(err, result4) {
      if (err) {
        console.log(err);
      }
      for (let row of result4.rows) {
        message4.push(row);
      }
      res4.send(message4);
    });
  });
}

app.listen(PORT, function() {
  console.log('Server up! Listening on port: ' + PORT);
});