const passwordInput = document.getElementById("passwordInput");
const toggleBtn = document.getElementById("toggleBtn");
const toggleIcon = document.getElementById("toggleIcon");
const statusText = document.getElementById("status");

let isHidden = true;

toggleBtn.addEventListener("click", () => {
  if (isHidden) {
    passwordInput.type = "text"; 
    toggleIcon.src = "s.png"; 
    statusText.innerHTML = "<strong>Password is Visible</strong>";
    isHidden = false;
  } else {
    passwordInput.type = "password"; 
    toggleIcon.src = "hdn.png"; 
    statusText.innerHTML = "<strong>Password is Hidden</strong>";
    isHidden = true;
  }
});