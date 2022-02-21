var angle = 0;
var slider;
var diminutiveFactor = 0.67;

function setup(){
    createCanvas(500, 500);
    slider = createSlider(0, PI, PI / 8, 0.01);
}

function draw(){
    background(10);
    angle = slider.value();
    stroke(255);
    translate(250, height);
    branch(125);
}

function branch(len){
    line(0, 0, 0, -len);
    translate(0, -len);
    if(len > 3){
        push();
        rotate(angle);
        branch(len * diminutiveFactor);
        pop();
        push();
        rotate(-angle);
        branch(len * diminutiveFactor);
        pop();
    }

}