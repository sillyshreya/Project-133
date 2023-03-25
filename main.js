status1 = "";
LRS_image = "";
objects = [];
function preload() {
    LRS_image=loadImage('livingroomsets.png');
}
function setup() {
canvas=createCanvas(480,380);
canvas.center();
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML = "Detecting Objects";
}
function gotResult(error,results) {
    if(error) {
        console.log(error); 
    }
    console.log(results)
    objects=results;
}
function modelLoaded() {
    console.log("Model Loaded!");
    status1 = true;
    objectDetector.detect(LRS_image,gotResult);
}
function draw() {
    if(status1 != undefined) {
        image(LRS_image,0,0,640,350);
    for (i = 0; i < objects.length; i++) {
        document.getElementById("status").innerHTML = "Status: Objects Detected";


        fill("#fc0303");
        percent = floor(objects[i].confidence * 100);
        text(objects[i].label + " " + percent + "%",objects[i].x,objects[i].y);
        noFill();
        stroke("#fc0303");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }   
    }
}







