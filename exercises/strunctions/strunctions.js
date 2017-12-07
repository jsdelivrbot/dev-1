function myFunction(dog1, dog2) {
    var puppies = ["nuno", "flip", "sagi"];
    var dogs = ["jack", "klondike", "boomer"];
    var children = puppies.concat(dogs);
    console.log(children);
    var str = "Hello world, welcome to the universe.";
    console.log(str.indexOf("e"));
    console.log(str.lastIndexOf('o'));
    return dog1 + dog2;
}
console.log(myFunction("nuno", "flip"))

function target() {
    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var regexp = /[A-E]/gi;
    var matches_array = str.match(regexp);
    console.log(matches_array);
    var food = "nuts and bannanahs"
    var kiwi = food.replace("nuts", "kiwi");
    console.log(kiwi);
}
(target())

function veggies () {
    var veggies = ["carrots", "brocolli", "celery"];
    console.log(veggies.slice(0,2));
    var str = "dogs are cool";
    var split = str.split("");
    var dog = "NUNO";
    var doctor = "gronka";
    console.log(split);
    console.log(str.toUpperCase());
    console.log(dog.toLowerCase());
    console.log(doctor.substr(1,4));
}
(veggies ());

var recipe = function(ingredients){
    //instructions
}

