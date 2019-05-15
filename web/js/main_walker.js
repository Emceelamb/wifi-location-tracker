let floorMap;
let clients = [];
let x1 = 600;
let y1 = 100;
let range = 350;

function preload() {
  floorMap = loadImage('./assets/floorMap_architecture.png');
}

function setup() {
  createCanvas(1200, 800);
  image(floorMap, 0, 0);

  fill(255, 255, 0, 150);
  stroke(0);
  ellipse(x1, y1, 10, 10);
  noStroke();
  fill(255, 255, 0, 80);
  ellipse(x1, y1, range, range);

  fill(0);
  //    for(var i = 0; i<clients.length; i++){
  //        text(clients[i], random(660-150,660+150), random(0,100+150));
  //   }

  getData('/getData1'); //access point 1
  // getData('/getData2'); //access point 2
  // getData('/getData3'); //access point 3
  // getData('/getData4'); //access point 4
}

function getData(url) {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      jsonData.forEach(element => {
        console.log(element);
        // text(element.station, random(660 - 150, 660 + 150), random(0, 100 + 150));
        clients.push(element.station);
      });
      for (var i = 0; i < clients.length; i++) {
        clients[i] = new Target(clients[i], x1, y1);
      }
      clients.splice(clients.length - 1, 1);
    });
}

function draw() {

  image(floorMap, 0, 0);

  fill(255, 255, 0, 150);
  stroke(0);
  ellipse(660, 100, 10, 10);
  noStroke();
  fill(255, 255, 0, 80);
  ellipse(660, 100, 350, 350);

  fill(0);
  for (var i = 0; i < clients.length; i++) {
    clients[i].display();
    clients[i].move();
  }
  // console.log(clients.length);

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
    this.prob = random(0, 20);
    if (this.prob < 0.25) {
      this.x += 10;
    } else if (this.prob < 0.50) {
      this.x -= 10;
    } else if (this.prob < 0.75) {
      this.y += 10;
    } else if (this.prob < 1) {
      this.y -= 10;
    }
    this.x = constrain(this.x, 0, width);
    this.y = constrain(this.y, 0, width);
    this.x = constrain(this.x, this.centerX - range / 2, this.centerX + range / 2);
    this.y = constrain(this.y, this.centerY - range / 2, this.centerY + range / 2);
  }

  display() {
    text(this.t, this.x, this.y);
  }

}