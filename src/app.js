import "bootstrap";
import "./style.css";

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function getRandomElement(array) {
  let index = Math.floor(Math.random() * array.length)
  let randomElement = array[index]
  return(randomElement)
}

function getExcuse() {
  let randomWho = getRandomElement(who);
  let randomAction = getRandomElement(action);
  let randomWhat = getRandomElement(what);
  let randomWhen = getRandomElement(when);

  let excuse = randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen

  return(excuse)
}

window.onload = function() {
  //write your code here
  const excuse = document.getElementById("excuse");
  excuse.innerHTML = getExcuse();
};

