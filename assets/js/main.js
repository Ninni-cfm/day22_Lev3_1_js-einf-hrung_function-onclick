// Four functions for settings the colors according to the balls
function changeColors1() {
    setColors("#1d8f53", "#6e0e60");
}
function changeColors2() {
    setColors("#454270", "#d9ab42");
}
function changeColors3() {
    setColors("#00011f", "#c65d0c");
}
function changeColors4() {
    setColors("#0b0e69", "#2accfe");
}

// the last ball is specific, it generates random colors for each click
function changeColorsRandom() {
    // get some random colors for background and text-color
    let fgColor = getRandomColor();
    let bgColor = getRandomColor();

    // fill the ball with the random colors
    document.getElementById("ball5").style.background = "linear-gradient(45deg, " + bgColor + " 50%, " + fgColor + " 50%)";

    setColors(bgColor, fgColor);
}

// apply the colors to headline and body background
function setColors(bgColor, fgColor) {
    document.getElementById("headline").style.color = fgColor;
    document.body.style.backgroundColor = bgColor;
}

// create a random color by using random numbers for each single color
function getRandomColor() {
    let r = getRandomInt(0, 255);
    let g = getRandomInt(0, 255);
    let b = getRandomInt(0, 255);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

// create a random number between min and max
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}