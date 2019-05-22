let floorMap;
let clients_ap1 = [];
let clients_ap2 = [];
let clients_ap3 = [];
let clients_ap4 = [];
let x1 = 600;
let y1 = 100;
let x2 = 1192 - 50;
let y2 = 218;
let x3 = 968;
let y3 = 476;
let x4 = 910;
let y4 = 300;
let totalCount;
let lengthTotal = 0;

let range = 350;

function preload() {
  floorMap = loadImage('./assets/floorMap_architecture_black.png');
}

function setup() {
  createCanvas(1315, 610); //1320, 615
  image(floorMap, 0, 0);

  totalCount = select('#count');

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

  //access point 4
  fill(0, 0, 255, 150);
  stroke(0);
  ellipse(x4, y4, 10, 10);
  noStroke();
  fill(230, 40);
  ellipse(x4, y4, range, range);

  fill(0);
  //    for(var i = 0; i<clients.length; i++){
  //        text(clients[i], random(660-150,660+150), random(0,100+150));
  //   }

  getData1('/getData1'); //access point 1
  getData2('/getData2'); //access point 2
  getData3('/getData3'); //access point 3
  getData4('/getData4'); //access point 4
}

setTimeout(timer, 100);

function timer() {
  setInterval(function() {
    getData1('/getData1');
    getData2('/getData2');
    getData3('/getData3');
    getData4('/getData4');
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
        // console.log(element);
        // text(element.station, random(660 - 150, 660 + 150), random(0, 100 + 150));
        clients_ap1.push(element.station);
      });
      for (var i = 0; i < clients_ap1.length; i++) {
        clients_ap1[i] = new Target(clients_ap1[i], x1, y1);
      }
      // clients_ap1.splice(clients.length - 1, 1);
      console.log(clients_ap1.length); //0
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
        // console.log(element);
        // text(element.station, random(660 - 150, 660 + 150), random(0, 100 + 150));
        clients_ap2.push(element.station);
      });
      for (var i = 0; i < clients_ap2.length; i++) {
        clients_ap2[i] = new Target(clients_ap2[i], x2, y2);
      }
      // clients_ap1.splice(clients.length - 1, 1);
      console.log(clients_ap2.length); //1300~
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
        // console.log(element);
        // text(element.station, random(660 - 150, 660 + 150), random(0, 100 + 150));
        clients_ap3.push(element.station);
      });
      for (var i = 0; i < clients_ap3.length; i++) {
        clients_ap3[i] = new Target(clients_ap3[i], x3, y3);
      }
      // clients_ap1.splice(clients.length - 1, 1);
      console.log(clients_ap3.length); //11
    });
}

function getData4(url) {
  console.log('got data from Access Point 4');
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      clients_ap4 = [];
      jsonData.forEach(element => {
        // console.log(element);
        // text(element.station, random(660 - 150, 660 + 150), random(0, 100 + 150));
        clients_ap4.push(element.station);
      });
      for (var i = 0; i < clients_ap4.length; i++) {
        clients_ap4[i] = new Target(clients_ap4[i], x4, y4);
      }
      // clients_ap1.splice(clients.length - 1, 1);
      console.log(clients_ap4.length); //11
    });
}

function draw() {

  // console.log(mouseX, mouseY);

  image(floorMap, 0, 0);

  push();
  translate(x4, y4);
  rotate(PI / 4.0);
  stroke(255, 0, 0);
  strokeWeight(3);
  line(0, -50, 0, -100);
  line(0 - 25, -75, +25, -75);
  pop();

  //access point 1
  fill(255, 255, 0, 150);
  stroke(0);
  ellipse(660, 100, 10, 10);
  noStroke();
  fill(230, 30);
  ellipse(660, 100, range, range);

  //access point 2
  fill(0, 255, 0, 150);
  stroke(0);
  ellipse(x2, y2, 10, 10);
  noStroke();
  fill(230, 30);
  ellipse(x2, y2, range, range);

  //access point 3
  fill(255, 0, 0, 150);
  stroke(0);
  ellipse(x3, y3, 10, 10);
  noStroke();
  fill(230, 30);
  ellipse(x3, y3, range, range);

  //access point 4
  fill(0, 0, 255, 150);
  stroke(0);
  ellipse(x4, y4, 10, 10);
  noStroke();
  fill(230, 40);
  ellipse(x4, y4, range, range);

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

  for (var i = 0; i < clients_ap4.length; i++) {
    clients_ap4[i].display();
    clients_ap4[i].move();
  }

  lengthTotal = clients_ap1.length + clients_ap2.length + clients_ap3.length + clients_ap4.length;
  totalCount.html("Total number of people: " + lengthTotal);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


class Target {
  constructor(t, x, y) {
    this.t = t;
    this.x = random(x - (range / 2), x + (range / 2));
    this.y = random(y - (range / 2), y + (range / 2));
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
    this.x = constrain(this.x, this.centerX - (range / 2), this.centerX + (range / 2));
    this.y = constrain(this.y, this.centerY - (range / 2), this.centerY + (range / 2));
    this.x = constrain(this.x, 0, width - 100);
    this.y = constrain(this.y, 30, height - 20);

  }

  display() {
    textSize(7);
    fill(230);
    text(this.t, this.x, this.y);
  }

}