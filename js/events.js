// option-1: directly set on the HTML element
/*
<button onclick="console.log(65)">Another button</button> 
*/

// option-2: add onclick function on the HTML element [***IMPORTANT***]
/*
<button onclick="makeRed()">Make Red</button> 
*/
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// option-3:
// button id="make-blue">Make Blue</button>
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// option-3 (another):
/* <button id="make-purple">Make Purple</button> */
const buttonPurple = document.getElementById("make-purple");
buttonPurple.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};

// option-4:
/* <button id="make-pink">Make Pink</button> */
const pinkButton = document.getElementById("make-pink");
pinkButton.addEventListener("click", makePink);
function makePink() {
  document.body.style.backgroundColor = "pink";
}

// option-4 (another): 
// button id="make-green">Make Green</button>
const greenButton = document.getElementById("make-green");
greenButton.addEventListener("click", function makeGreen() {
  document.body.style.backgroundColor = "green";
});

// option-4: Final  [***IMPORTANT***]
// button id="make-goldenrod">Make GoldenRod</button>
document
  .getElementById("make-goldenrod")
  .addEventListener("click", function () {
    document.body.style.backgroundColor = "goldenrod";
  });
