function changeColors1() {
    // console.log('changeColors1()');
    setColors("#1d8f53", "#6e0e60");
}

function changeColors2() {
    // console.log('changeColors2()');
    setColors("#454270", "#d9ab42");
}

function changeColors3() {
    // console.log('changeColors3()');
    setColors("#00011f", "#c65d0c");
}

function changeColors4() {
    // console.log('changeColors4()');
    setColors("#0b0e69", "#2accfe");
}

function changeColorsRandom() {
    console.log('changeColorsRandom()');

    let fgColor = getRandomColor();
    let bgColor = getRandomColor();

    document.getElementById("random1").style.color = fgColor;
    document.getElementById("random2").style.color = bgColor;
    document.getElementById("ball5").style.background = "linear-gradient(45deg, " + bgColor + " 0 50%, " + fgColor + " 50% 100%)";

    setColors(bgColor, fgColor);
}

function setColors(bgColor, fgColor) {
    document.getElementById("headline").style.color = fgColor;
    document.body.style.backgroundColor = bgColor;
}

function getRandomColor() {
    let r = getRandomInt(0, 255);
    let g = getRandomInt(0, 255);
    let b = getRandomInt(0, 255);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}