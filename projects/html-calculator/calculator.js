function myFunction() {
    var y = document.getElementById("add1").value;
    var z = document.getElementById("add2").value;
    var x = parseInt(y) + parseInt(z);
    document.getElementById("demo").innerHTML = x;
  }

  function myFunction2() {
    var y = document.getElementById("sub1").value;
    var z = document.getElementById("sub2").value;
    var x = parseInt(y) - parseInt(z);
    document.getElementById("demo2").innerHTML = x;
  }

  function myFunction3() {
    var y = document.getElementById("mult1").value;
    var z = document.getElementById("mult2").value;
    var x = parseInt(y) *   parseInt(z);
    document.getElementById("demo3").innerHTML = x;
  }
  