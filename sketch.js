function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  translate(200, 200);
  rotate(-90);
  let hr= hour();
  let mn=  minute();
  let sc= second();
  

  noFill();
  strokeWeight(6);
  
  stroke(255, 167, 200);
  let secondangle= map(sc, 0, 60, 0, 360);
  //arc(0,0,190,190, 0, secondangle);
  
  push();
  rotate(secondangle);
  stroke(255);
  line(0,0,80,0);
  pop();
  
  stroke(155, 147, 200);
  let minuteangle= map(mn, 0, 60, 0, 360);
   //arc(0,0,145,145, 0, minuteangle);
  
  push();
  rotate(minuteangle);
  stroke(175);
  line(0,0,60,0);
  pop();
  
   stroke(255, 247, 200);
   let hoursangle= map(hr%12, 0, 12, 0, 360);
   //arc(0,0,120,120, 0, hoursangle);
  
  push();
  rotate(hoursangle);
  stroke(125);
  line(0,0,40,0);
  pop();
  
}