var red_range = document.getElementById('red');
var red_value = red_range.value;
var red_index = document.getElementById('red_value');
red_index.innerHTML = red_value;

var green_range = document.getElementById('green');
var green_value = green_range.value;
var green_index = document.getElementById('green_value');
green_index.innerHTML = green_value;

var blue_range = document.getElementById('blue');
var blue_value = blue_range.value;
var blue_index = document.getElementById('blue_value');
blue_index.innerHTML = blue_value;

var color = "rgb(" + red_value + "," + green_value + "," + blue_value +")";
$('.color_screen').css('background-color', color);
console.log(color);

function color_range() {
    red_value = document.getElementById('red').value;
    red_index = document.getElementById('red_value');
    red_index.innerHTML = red_value;

    green_value = document.getElementById('green').value;
    green_index = document.getElementById('green_value');
    green_index.innerHTML = green_value;

    blue_value = document.getElementById('blue').value;
    blue_index = document.getElementById('blue_value');
    blue_index.innerHTML = blue_value;
    
    color = "rgb(" + red_value + "," + green_value + "," + blue_value +")";
    $('.color_screen').css('background-color', color);
}

function reset() {
    red_value = 255;
    green_value = 255;
    blue_value = 255;
    red_range.value = red_value;
    red_index.innerHTML = red_value;
    green_range.value = red_value;
    green_index.innerHTML = green_value;
    blue_range.value = blue_value;
    blue_index.innerHTML = blue_value;
    color = "rgb(" + red_value + "," + green_value + "," + blue_value +")";
    $('.color_screen').css('background-color', color);
}

function random() {
    red_value = Math.floor(Math.random() * 255);
    green_value = Math.floor(Math.random() * 255);
    blue_value = Math.floor(Math.random() * 255);
    red_range.value = red_value;
    red_index.innerHTML = red_value;
    green_range.value = red_value;
    green_index.innerHTML = green_value;
    blue_range.value = blue_value;
    blue_index.innerHTML = blue_value;
    color = "rgb(" + red_value + "," + green_value + "," + blue_value +")";
    $('.color_screen').css('background-color', color);
}