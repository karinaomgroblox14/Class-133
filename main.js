img = "";
statuss = "";
objects = [];

function setup(){
canvas = createCanvas(640, 420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function preload(){
img = loadImage('dog_cat.jpg');
}

function draw() {
image(img, 0, 0, 640, 420);
if( statuss != ""){
for(i=0; i < objects.length; i++){
document,getElementById("status").innerHTML="Status: object detected!";

fill("#b650e6");
percent=floor(objects[i].confidence*100);
text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
noFill();
stroke("#b650e6");
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}
}
}

function modelLoaded(){
console.log("Model Loaded!")
statuss=true;
objectDetector.detect(img, gotResult);
}

function gotResult(results, error){
if (error) {
console.log(error);
}
console.log(results);
objects = results;
}
