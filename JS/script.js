function function1() {
    document.getElementById("card-1").innerHTML = document.domain;
  }

  function function2() {
    document.getElementById("card-2").innerHTML =
"The title of this document is: " + document.title;
  }

function function3 () {
    document.getElementById("card-3").innerHTML = document.lastModified;
}

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

function myFunction4() {
  let text;
  if (document.getElementById("id1").validity.rangeUnderflow) {
    text = "Value too small";
  } else {
    text = "Input OK";
  } 
  document.getElementById("demo").innerHTML = text;
}

function myFunction5 () {
  document.getElementById('foo').style.cssText = 'background-color: red';
}

function myFunction6 () {
  document.getElementById('foo').style.cssText = 'background-color: white';
}

function myFunction7 () {
  document.getElementById('foo2').style.cssText = 'color: red';
}

function myFunction8 () {
  document.getElementById('foo2').style.cssText = 'color: black';
}

function upperCase() {
  const x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}

function mOver(obj) {
  obj.innerHTML = "Thank You"
}

function mOut(obj) {
  obj.innerHTML = "Mouse Over Me"
}

document.getElementById("myBtn").addEventListener("click", myFunction9);

function myFunction9() {
  alert ("Hello World!");
}