var MyRick = [];
var NumberOfRicks = 0;

function preload() {
	Pickle = loadImage ('cartoon-pickle-png.png')	
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	Pickle.resize(50,0)
for (var i =0;i < 0; i++) {
	  MyRick[i] = new pickleObject(random(width),random(height),Pickle);
	}
}

function draw() {
		background (0,0,0)

	for (var i =0;i < MyRick.length; i++) {
	  MyRick[i].Display();
	  MyRick[i].X = (MyRick[i].X+MyRick[i].step)%width;
	}	 
}

function mouseDragged() {
	MyRick[MyRick.length] = new pickleObject(mouseX,mouseY,Pickle);
}

function pickleObject (X,Y,img) {
	this.img = img;
	this.X = X;
	this.Y = Y;
	this.step = random(10)-5;
	
  this.Display = function() {
		image(this.img,this.X,this.Y)
	}
}
