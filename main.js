function setup() {
  canvas = createCanvas(400, 400);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier= ml5.imageClassifier('MobileNet',modelLoaded);
}

function draw(){
  image(video,0,0,400,400);
  classifier.classify(video,gotresult);
}

function modelLoaded(){
  console.log("Model is Loaded");
}

function gotresult(error,results){
  if(error){
    console.log(error);
  }else{
    console.log(results);
    document.getElementById("name_object").innerHTML= results[0].label;
    document.getElementById("accuracy_object").innerHTML= results[0].confidence.toFixed(3);
  }
}