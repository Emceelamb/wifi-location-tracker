let floorMap;
let clientObj=[];
var clients=[];
function preload(){
    floorMap = loadImage('./assets/floorMap_architecture.png');
}
function setup() {
    createCanvas(1200, 800);
    image(floorMap, 0, 0);

    fill(255,255, 0, 150);
    stroke(0);
    ellipse(660,100, 10,10);
    noStroke();
    fill(255,255,0, 80);
    ellipse(660,100, 350,350);

    fill(0);
//    for(var i = 0; i<clients.length; i++){
//        text(clients[i], random(660-150,660+150), random(0,100+150));
 //   }
}

var x=600;
var y=110;
function draw() {

     image(floorMap, 0, 0);

     fill(255,255, 0, 150);
     stroke(0);
     ellipse(660,100, 10,10);
     noStroke();
     fill(255,255,0, 80);
     ellipse(660,100, 350,350);

     fill(0);
     for(var i = 0; i<clients.length; i++){
        clients[i].move();
         clients[i].display();
        // clients[i].display();
     }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
    }
};
xhttp.open("GET", "assets/aptest-01.kismet.netxml", true);
//xhttp.open("GET", "aptest-02.kismet.netxml.xml", true);
xhttp.send();

function myFunction(xml) {
    console.log(xml);
    var xmlDoc = xml.responseXML;
    var allClients = xmlDoc.getElementsByTagName("wireless-client");
    //console.log(allClients);
    
    for(var i = 0; i < allClients.length; i++){
        clients.push(allClients[i].getElementsByTagName("client-mac")[0].childNodes[0].nodeValue);
        clients[i] = new Movement(clients[i], x+i*15, y+i*15);
    }

       
}


// Movement class(cats) //
class Movement {
    constructor(t, x,y) {
      this.x = x;
      this.t = t;
      this.y = y;
        this.prob = 0;
    }
  
    move() {
      this.prob = random(0, 8);
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
    }
  
    display() {
      text(this.t, this.x, this.y);
    }
  
  }