// Date, time and greeting on the top of the page
window.onload = displayClock();
function displayClock(){
  let time = new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString();
  let hour = new Date().getHours();
  document.getElementById("time").innerHTML = `${date}  - // -  ${time}`;

  if (hour >= 5 && hour < 7) {
      document.getElementById("text-logo").innerHTML = "Wow, you're here early!"
  } else if (hour >= 7 && hour < 12){
    document.getElementById("text-logo").innerHTML = "Good morning!";
  } else if (hour >= 12 && hour < 15) {
    document.getElementById("text-logo").innerHTML = "Welcome :)";
  } else if (hour >= 15 && hour < 18) {
    document.getElementById("text-logo").innerHTML = "Good afternoon!";
  } else if (hour >= 18 && hour < 22) {
    document.getElementById("text-logo").innerHTML = "Good evening!";
  } else {
    document.getElementById("text-logo").innerHTML = "Kind of late, isn't it?";
  }
  setTimeout(displayClock, 1000);
};

// Enabling dropdown for work examples

let audioLinks = document.getElementById("audio-links");
let audio = document.getElementById("audio-work");
let audioLeft = document.getElementById("audio-left");
let workLinks = document.getElementById("work-links");
let work = document.getElementById("work-work");
let workLeft = document.getElementById("work-left");
let frontLinks = document.getElementById("front-links");
let front = document.getElementById("front-work");
let frontLeft = document.getElementById("front-left");

window.onload = hideLinks();
function hideLinks(){
    audioLinks.style.display === "none";
    workLinks.style.display === "none";
    frontLinks.style.display === "none";
};

let audioChange = () => {
    if (audioLinks.style.display === "none") {
        audioLinks.style.display = "block";
        audioLinks.style.animation = "flyIn 1s";
        audioLeft.style.animation = "rotateDown 1s";
        audioLeft.style.transform = "rotate(270deg)";
    } else {
        audioLinks.style.animation = "flyOut 1s";
        audioLeft.style.animation = "rotateUp 1s";
        audioLeft.style.transform = "rotate(0deg)";
        setTimeout(() => {
            audioLinks.style.display = "none";
        }, 900);
        
    };
};
audio.addEventListener('click', audioChange);

let workChange = () => {
    if (workLinks.style.display === "none") {
        workLinks.style.display = "block";
        workLinks.style.animation = "flyIn 1s";
        workLeft.style.animation = "rotateDown 1s";
        workLeft.style.transform = "rotate(270deg)";
    } else {
        workLinks.style.animation = "flyOut 1s";
        workLeft.style.animation = "rotateUp 1s";
        workLeft.style.transform = "rotate(0deg)";
        setTimeout(() => {
            workLinks.style.display = "none";
        }, 900);
    };
};
work.addEventListener('click', workChange);

let frontChange = () => {
    if (frontLinks.style.display === "none") {
        frontLinks.style.display = "block";
        frontLinks.style.animation = "flyIn 1s";
        frontLeft.style.animation = "rotateDown 1s";
        frontLeft.style.transform = "rotate(270deg)";
    } else {
        frontLinks.style.animation = "flyOut 1s";
        frontLeft.style.animation = "rotateUp 1s";
        frontLeft.style.transform = "rotate(0deg)";
        setTimeout(() => {
            frontLinks.style.display = "none";
        }, 900);
    };
};
front.addEventListener('click', frontChange);