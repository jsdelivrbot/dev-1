class Player {
    constructor(name, totalCoins, ) {
        this.playerName = name;
        this.namePicked = ""
        this.totalCoins = 0;
        this.status = "Small";
        this.star = false;
        this.gameActive = true;
    }
    setName(namePicked) {
        this.namePicked = namePicked;
    }
    gotHit() {
        switch (this.status) {
            case "Powered Up":
                this.status = "Big";
                this.star = false;
                break;
            case "Big":
                this.status = "Small";
                break;
            case "Small":
                this.status = "Dead";
                this.gameActive = false;
        }
    }
    gotPowerup() {
        switch (this.status) {
            case "Small":
                this.status = "Big";
                break;
            case "Big":
                this.status = "Powered Up";

        }
    }
    addCoin(){
        this.totalCoins++;
    }
    print(){
        for(let key in this){
           console.log(`${key}: ${this[key]}`)
        }
    }
}

function rand(){
    return Math.floor(Math.random() * 3)
}

let michelle = new Player("Michelle");
michelle.setName("Luigi");

for(let i = 0; i < 3; i++){ //while(michelle.gameActive){
    switch(rand()){
        case 0:
            michelle.gotHit();
            break;
        case 1:
            michelle.gotPowerup();
            break;
        case 2: 
            michelle.addCoin();
    }
    michelle.print();
}

michelle.print();