let floorMap;
let clients_ap1 = [];
let clients_ap2 = [];
let clients_ap3 = [];
let x1 = 600;
let y1 = 100;
let x2 = 1192;
let y2 = 218;
let x3 = 968;
let y3 = 476;
let range = 500;

function preload() {
  floorMap = loadImage('./assets/floorMap_architecture.png');
}

function setup() {
  createCanvas(1315, 610); //1320, 615
  image(floorMap, 0, 0);

  //access point 1
  fill(255, 255, 0, 150);
  stroke(0);
  ellipse(x1, y1, 10, 10);
  noStroke();
  fill(255, 255, 0, 80);
  ellipse(x1, y1, range, range);

  //access point 2
  fill(0, 255, 0, 150);
  stroke(0);
  ellipse(x2, y2, 10, 10);
  noStroke();
  fill(0, 255, 0, 80);
  ellipse(x2, y2, range, range);

  //access point 3
  fill(255, 0, 0, 150);
  stroke(0);
  ellipse(x3, y3, 10, 10);
  noStroke();
  fill(255, 0, 0, 80);
  ellipse(x3, y3, range, range);

  fill(0);
  //    for(var i = 0; i<clients.length; i++){
  //        text(clients[i], random(660-150,660+150), random(0,100+150));
  //   }

  getData1('/getData1'); //access point 1
  getData2('/getData2'); //access point 2
  getData3('/getData3'); //access point 3
  // getData('/getData4'); //access point 4
}

setTimeout(timer, 100);

function timer() {
  setInterval(function() {
    getData1('/getData1');
    getData2('/getData2');
    getData3('/getData3');
    console.log('update!');
  }, 7000);

}


function getData1(url) {
  console.log('got data from Access Point 1');
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      clients_ap1 = [];
      jsonData.forEach(element => {
        console.log(element);
        // text(element.station, random(660 - 150, 660 + 150), random(0, 100 + 150));
        clients_ap1.push(element.station);
      });
      for (var i = 0; i < clients_ap1.length; i++) {
        clients_ap1[i] = new Target(clients_ap1[i], x1, y1);
      }
      // clients_ap1.splice(clients.length - 1, 1);
    });
}

function getData2(url) {
  console.log('got data from Access Point 2');
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      clients_ap2 = [];
      jsonData.forEach(element => {
        console.log(element);
        // text(element.station, random(660 - 150, 660 + 150), random(0, 100 + 150));
        clients_ap2.push(element.station);
      });
      for (var i = 0; i < clients_ap2.length; i++) {
        clients_ap2[i] = new Target(clients_ap2[i], x2, y2);
      }
      // clients_ap1.splice(clients.length - 1, 1);
    });
}

function getData3(url) {
  console.log('got data from Access Point 3');
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      clients_ap3 = [];
      jsonData.forEach(element => {
        console.log(element);
        // text(element.station, random(660 - 150, 660 + 150), random(0, 100 + 150));
        clients_ap3.push(element.station);
      });
      for (var i = 0; i < clients_ap3.length; i++) {
        clients_ap3[i] = new Target(clients_ap3[i], x3, y3);
      }
      // clients_ap1.splice(clients.length - 1, 1);
    });
}

function draw() {

  // console.log(mouseX, mouseY);

  image(floorMap, 0, 0);

  //access point 1
  fill(255, 255, 0, 150);
  stroke(0);
  ellipse(660, 100, 10, 10);
  noStroke();
  fill(255, 255, 0, 80);
  ellipse(660, 100, range, range);

  //access point 2
  fill(0, 255, 0, 150);
  stroke(0);
  ellipse(x2, y2, 10, 10);
  noStroke();
  fill(0, 255, 0, 80);
  ellipse(x2, y2, range, range);

  //access point 3
  fill(255, 0, 0, 150);
  stroke(0);
  ellipse(x3, y3, 10, 10);
  noStroke();
  fill(255, 0, 0, 80);
  ellipse(x3, y3, range, range);

  fill(0);
  for (var i = 0; i < clients_ap1.length; i++) {
    clients_ap1[i].display();
    clients_ap1[i].move();
  }
  // console.log(clients_ap1.length);

  for (var i = 0; i < clients_ap2.length; i++) {
    clients_ap2[i].display();
    clients_ap2[i].move();
  }

  for (var i = 0; i < clients_ap3.length; i++) {
    clients_ap3[i].display();
    clients_ap3[i].move();
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


class Target {
  constructor(t, x, y) {
    this.t = t;
    this.x = random(x - 150, x + 150);
    this.y = random(y - 150, y + 150);
    this.centerX = x;
    this.centerY = y;
    this.prob = 0;
  }

  move() {
    this.prob = random(0, 50);
    if (this.prob < 0.10) {
      this.x += 10;
    } else if (this.prob < 0.20) {
      this.x -= 10;
    } else if (this.prob < 0.30) {
      this.y += 10;
    } else if (this.prob < 0.40) {
      this.y -= 10;
    }
    this.x = constrain(this.x, 20, width - 20);
    this.y = constrain(this.y, 20, height - 20);
    this.x = constrain(this.x, this.centerX - range / 2, this.centerX + range / 2);
    this.y = constrain(this.y, this.centerY - range / 2, this.centerY + range / 2);
  }

  display() {
    textSize(7);
    text(this.t, this.x, this.y);
  }

}