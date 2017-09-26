var mic;
var amp;

var scale = 1.0;

function setup() {
    createCanvas(1500, 800);
    background(000);
    // Create an audio input and start it
    mic = new p5.AudioIn();
    mic.start();
    // Create a new amplitude analyzer and patch into input
    amp = new p5.Amplitude();
    amp.setInput(mic);
}


function draw() {
    // Draw a background that fades to black
    noStroke();
    fill(000, 10);
    rect(0, 0, width, height);
    // The getLevel() method returns values between 0 and 1,
    // so map() is used to convert the values to larger numbers
    scale = map(amp.getLevel(), 0, 0.5, 10, width);
	scale2 = map(amp.getLevel(), 0, 1, 10, width);
    // Draw the circle based on the volume
    fill(0, 225, 225);
    ellipse(width / 2, height / 2, scale, scale);
    // ellipse(width / 2, height / 2, width, width);

	
	fill(random(255,255),random(255,255), random(250,255),255);
	push();
	rotate(random(0, PI));
	translate(random(0,width), random(0, height));
	ellipse(-26, -26, scale2, scale2);
	pop();
}
