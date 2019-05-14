let floorMap;

var clients = [];

function preload() {
  floorMap = loadImage('./assets/floorMap_architecture.png');
}

function setup() {
  createCanvas(1200, 800);
  image(floorMap, 0, 0);

  fill(255, 255, 0, 150);
  stroke(0);
  ellipse(660, 100, 10, 10);
  noStroke();
  fill(255, 255, 0, 80);
  ellipse(660, 100, 350, 350);

  fill(0);
  for (var i = 0; i < clients.length; i++) {
    text(clients[i], random(660 - 150, 660 + 150), random(0, 100 + 150));
  }

  getData('/getData');
}

function getData(url) {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      jsonData.forEach(element => {
        console.log(element);
        text(element.station, random(660 - 150, 660 + 150), random(0, 100 + 150));

      });
    });
}


function draw() {

  // image(floorMap, 0, 0);

  // fill(255,255, 0, 150);
  // stroke(0);
  // ellipse(660,100, 10,10);
  // noStroke();
  // fill(255,255,0, 80);
  // ellipse(660,100, 350,350);

  // fill(0);
  // for(var i = 0; i<clients.length; i++){
  //     text(clients[i], random(660-175,660+175), random(100-150,100+175));
  // }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// var xhttp = new XMLHttpRequest();
//
// xhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     myFunction(this);
//   }
// };
// xhttp.open("GET", "./assets/aptest-01.kismet.netxml", true);
// //xhttp.open("GET", "aptest-01.kismet.netxml.xml", true);
// xhttp.send();
//
// function myFunction(xml) {
//   console.log(xml);
//   var xmlDoc = xml.responseXML;
//   var allClients = xmlDoc.getElementsByTagName("wireless-client");
//   console.log(allClients);
//
//   for (var i = 0; i < allClients.length; i++) {
//     clients.push(allClients[i].getElementsByTagName("client-mac")[0].childNodes[0].nodeValue);
//   }
//
// }

// function keyPressed() {
//   getData('/getData');
//
// }