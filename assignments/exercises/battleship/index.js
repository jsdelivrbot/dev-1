//first component is a grid
//second component is a location object that contains info about a particular coordinate
//third component is the game loop
function whetherShip() {
    let randomNum = Math.floor(Math.random() * 10);
    return randomNum === 0;
}

function Location() {
    this.isShip = whetherShip();
    this.isHit = false;
    this.display = "~";
}

function Grid() {
    this.grid = [];
    this.shipsSunk = 0;
    this.totalShips = 0;
}
Grid.prototype.genGrid = function () {
    for (let i = 0; i < 8; i++) {
        this.grid.push([]);
        for (let j = 0; j < 8; j++) {
            let location = new Location();
            if (location.isShip) {
                this.totalShips++;
            }
            this.grid[i].push(location);
        }
    }
}
Grid.prototype.displayGrid = function () {
    //print the grid to the screen
    for (let i = 0; i < this.grid.length; i++) {
        let row = [];
        for (let j = 0; j < this.grid[i].length; j++) {
            row.push(this.grid[i][j].display);
        }
        console.log(row.join(" "));
    }
}
Grid.prototype.attack = function (x, y) {

}

// when the game starts, show a brand new grid
// [
//     ["~", "~", "~"],
//     ["~", "~", "~"],
//     ["~", "~", "~"]
// ]

// asks you to enter in an x and y coordinate
// shows the grid again but this time it displays the result of your attack
// [
//     ["~", "~", "~"],
//     ["~", "~", "~"],
//     ["O", "~", "~"]
// ]

//above process repeats until all ships are dead

// [
//     ["X", "~", "X"],
//     ["~", "X", "~"],
//     ["O", "~", "~"]
// ];

//print a victory message to the console and end game


let game = new Grid();
game.genGrid();
game.grid[3][2].display = "x";
game.displayGrid();