let copyObj = obj => {
    let output = {};
    for(let key in obj){
        ouput[key] = obj[key]
    }
    return output;
}

let inputObj = {
    propertyName: "someValue",
    anotherProperty: "anotherValue"
}

let copyObj = makeCopy(inputObj);

console.log(copyObj);