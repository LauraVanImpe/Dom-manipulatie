
const Name = "Laura";

function greetingFunction() {
  document.getElementById("name").innerHTML = "Hi " + Name + "!";

  let colours = ["blue", "green", "yellow", "orange", "purple"];

  let random = Math.floor(Math.random() * colours.length);

  document.getElementById("name").style.color = colours[random];
  };


