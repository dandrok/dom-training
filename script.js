// change color button
let firstGoing = () => {
  // random numbers generators
  let random = Math.floor(Math.random() * 999999);
  let randomT = Math.floor(Math.random() * 999999);

  // element HTML
  let changeMe = document.getElementById("time");

  //give random number to color and background
  let finishMe = (changeMe.style.color = `#${random}`);
  let another = (changeMe.style.backgroundColor = `#${randomT}`);
};

// back to default button
let secondGoing = () => {
  let changeMe = document.getElementById("time");
  let finishMe = (changeMe.style.color = "#99f567");
  let finishMee = (changeMe.style.backgroundColor = "brown");
  let toA = (changeMe.innerText = "A");
};

// random number generator button
let changetext = () => {
  // random number 0-999
  let random = Math.floor(Math.random() * 999);

  // element HTML
  let changeMe = document.getElementById("time");

  let just = (changeMe.innerText = random);
};
