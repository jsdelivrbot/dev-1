
  function myFunction1() {
    var y = document.getElementById("mult1").value;
    var z = document.getElementById("mult2").value;
    var x = parseInt(y) *   parseInt(z);
    document.getElementById("demo1").innerHTML = "your total is " + x + " coins";
  }


  function myFunction2() {
    var y = document.getElementById("mult3").value;
    var z = document.getElementById("mult4").value;
    var x = parseInt(y) *   parseInt(z);
    document.getElementById("demo2").innerHTML = "your total is " + x + " coins";
  }

  function myFunction3() {
    var y = document.getElementById("mult5").value;
    var z = document.getElementById("mult6").value;
    var x = parseInt(y) *   parseInt(z);
    document.getElementById("demo3").innerHTML = "your total is " + x + " coins";
  }

  function myFunction4() {
    var a = document.getElementById("mult1").value;
    var b = document.getElementById("mult2").value;
    var c = document.getElementById("mult3").value;
    var d = document.getElementById("mult4").value;
    var e = document.getElementById("mult5").value;
    var f = document.getElementById("mult6").value;
    var g = parseInt(a * b) +   parseInt(c * d) + parseInt(e * f);
    document.getElementById("demo4").innerHTML = "Your final total is " + g + " coins";
  }