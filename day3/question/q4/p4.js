const bulb = document.getElementById("bulb");
const toggleBtn = document.getElementById("toggleBtn");
const statusText = document.getElementById("status");

let isOn = false;

toggleBtn.addEventListener("click", () => {
  if (isOn) {
    bulb.src = "light1.jpg";       
    toggleBtn.textContent = "Turn ON";
    statusText.innerHTML = "<strong>The bulb is OFF</strong>";
    isOn = false;
  } else {
    bulb.src = "light2.gif";        
    toggleBtn.textContent = "Turn OFF";
    statusText.innerHTML = "<strong>The bulb is ON</strong>";
    isOn = true;
  }
});