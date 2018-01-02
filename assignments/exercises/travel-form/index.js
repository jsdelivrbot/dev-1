/*function show_prompt() {
    var name = document.getElementsByName("name")
    if (name != null && name != "") {
        alert(name);
    }
} */

 /*function alertNow(){
    document.getElementById('send').onclick = function(){
        alert(document.getElementById("name").value);
        return false;
    }
 } */

 function display()
 {
 var x=document.details.firstname.value;
 var a=document.details.lastname.value;
 var b=document.details.locations.value;
 var c=document.details.diet.value;
 var y=document.details.age.value;
 var z=document.details.gender.value;
 alert("first name: "+x+"\n"+ "last name: " +a+"\n" +"age: " +y+"\n" +"gender: " +z+"\n" +"destiation: " +b+"\n" +"diet: " +c);
 }