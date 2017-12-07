var tv = {
    color: "black",
    isSamsung: true,
    inchSize: 32,
    write: function() {
        console.log("I want a " + this.color + " samsung tv that is " + this.inchSize + " inches.");
    }
}
tv.write();

var phone = {
    style: "iPhone",
    version: 6,
    isPhoneProtected: true,
    write: function() {
        console.log(this.style + this.version + " is getting old.");
    }
}
phone.write();

var guitar = {
    type: "PRS Torero",
    color: "blue",
    whammyBarEquipped: true,
    write: function() {
        console.log("my " + this.type + " is bad ass");
    }
}
guitar.write();

var hat = {
    color: "black",
    design: "skulls",
    isCool: true,
    write: function() {
        console.log("my " + this.color + " hat has " + this.design);
    }
}
hat.write();

var cup = {
    material: "glass",
    liquid: "water",
    isEmpty: "false",
    write: function() {
        console.log("my " + this.material + " cup has " + this.liquid);
    }
}
cup.write();

var laptop = {
    type: "apple",
    year: 2017,
    isFast: true,
    write: function() {
        console.log("my " + this.type + " computer is a " + this.year + " version");
    }
}
laptop.write();

var shoes = {
    type: "converse",
    usedFor: "workouts",
    pairs: 1,
    write: function() {
        console.log("i like to use " + this.type + " for " + this.usedFor)
    }
}
shoes.write();

var picture = {
    isFramed: true,
    style: "new school",
    inchSize: 15,
    write: function() {
        console.log("i like my " + this.style + " picture")
    }
}
picture.write();

var hotSauce = {
    type: "tabasco",
    heatLevel: 4,
    color: "red",
    write: function() {
        console.log("my favorite hot sauce is " + this.type)
    }
}
hotSauce.write();

var pants = {
    type: "jeans",
    color: "blue",
    style: "slim",
    write: function() {
        console.log ("i like my " + pants.style + pants.type)
    }
}
pants.write()
