const rs = require('readline-sync');

console.log("You are a customer in the middle of a bank robbery with only a knife");


let inv = [];
let isAlive = true;

while (isAlive) {
    let userinput = rs.question("What would you like to do?");
    userinput = userinput.toLowerCase();

    if (userinput.includes("throw") && userinput.includes("knife")) {
        console.log("Sorry the robber blocked your attack and killed you.");
        isAlive = false;
        console.log("GAME OVER");
    } else if (userinput.includes("stab") && userinput.includes("sneak")) {
        console.log("Congrats you have escaped the bank.");
        break;

    } else if (userinput.includes("call") && userinput.includes("help")) {
        console.log("One of the robbers sees you on your phone");

    } else if (userinput.includes("drop") || userinput.includes("stop")) {
        console.log("good choice")
    } else if (userinput.includes("run") || userinput.includes("hide")) {
        console.log("dont even think about it")
    } else if (userinput.includes("creep") && userinput.includes("behind")) {
        console.log("now make your move quick");
        inv.push("attack");
    } else if (userinput.includes("slit") || userinput.includes("stab")) {
        if (inv.includes("attack")) { console.log("You killed him") }
        break;
    }

    else {
        console.log("Use your stealth");
    }
}
//     if (inv.includes("sneak") || inv.includes("knife")) {
//         console.log("Use your only weapon");

//     } else {
//         console.log("dont throw it");
//     } if (userinput.includes("drop") && userinput.includes("phone")) {
//         console.log("Good choice");
//         inv.push("drop");
//     } else if (userinput.includes("continue")) {
//         console.log("one of the robbers is approaching you. \nHe is angry ")
//     } else {
//         console.log("Run!!!");
//     }
// }


//look -> will print description of the room
//open door -> try to open door (if you have key go out if not you FAIL!!!!) //DONE
//put hand in hole in wall -> They die (GAME OVER) //DONE
//take key -> put key in inv //done