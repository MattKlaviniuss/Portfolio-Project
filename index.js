// Date, time and greeting on the top of the page
window.onload = displayClock();
function displayClock(){
  let time = new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString();
  let hour = new Date().getUTCHours();
  document.getElementById("time").innerHTML = `${date}  - // -  ${time}`;
  if (hour >= 5 && hour < 8) {
      document.getElementById("text-logo").innerHTML = "Wow, you're here early!"
  } else if (hour >= 8 && hour < 12){
    document.getElementById("text-logo").innerHTML = "Good morning!"
  } else if (hour >= 12 && hour < 15) {
    document.getElementById("text-logo").innerHTML = "Welcome :)"
  } else if (hour >= 15 && hour < 18) {
    document.getElementById("text-logo").innerHTML = "Good afternoon!"
  } else if (hour >= 18 && hour < 22) {
    document.getElementById("text-logo").innerHTML = "Good evening!"
  } else {
    document.getElementById("text-logo").innerHTML = "Kind of late, isn't it?"
  }
  setTimeout(displayClock, 1000); 
};
