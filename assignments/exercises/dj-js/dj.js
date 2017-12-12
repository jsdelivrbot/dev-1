function myFunction() {
    document.getElementById("box1").style.backgroundColor = "green";
}

function change() {
    document.getElementById("box1").style.backgroundColor = "red";
};

function release() {
    document.getElementById("box1").style.backgroundColor = "yellow";
}
function mouseOver() {
    document.getElementById("box1").style.backgroundColor = "blue";
}
function mouseOut() {
    document.getElementById("box1").style.backgroundColor = "orange";
}

function onClick() {
    document.getElementById("box1").style.backgroundColor = "purple";
}

var box = document.getElementById("box1");

window.onkeyup = function (event) {

    //console.log(event);
    //check what key was pressed
    switch (event.key) {
        case "y":
            box.style.backgroundColor = "yellow";
            break;
        case "b":
            box.style.backgroundColor = "blue";
            break;
        case "r":
            box.style.backgroundColor = "red";
            break;
    }

    if (event.which === 89) {
        box.style.backgroundColor = "yellow"
    } else if (event.which === 66) {
        box.style.backgroundColor = "blue"
    }
}
