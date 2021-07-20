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

function setColors(bgcolor, fgcolor) {
    // console.log("setColors()");
    document.getElementById("headline").style.color = fgcolor;
    document.body.style.backgroundColor = bgcolor;
}
