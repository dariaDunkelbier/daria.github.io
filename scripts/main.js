

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cat.jpeg') {
      myImage.setAttribute ('src','images/cat-smile.jpg');
    } else {
      myImage.setAttribute ('src','images/cat.jpeg');
    }
};


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');


function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Ich liebe Kätzchen sooo dolle <3, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Ich liebe Kätzchen sooo dolle <3, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
};
