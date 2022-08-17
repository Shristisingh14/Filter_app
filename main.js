function preload() {

}

function setup() {
    canvas = createCanvas(640,500);
    canvas.position(120,240);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 0, 0, 640, 500);
    tint(tint_color);
}

function take_snapshot() {
    save('Shristi.png');
}

function filter_tint() {
    tint_color = document.getElementById("color_name").value;
}