 const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function(e) {
      e.preventDefault(); 
      let isValid = true;

      const username = document.getElementById("username");
      const fullname = document.getElementById("fullname");
      const email = document.getElementById("email");
      const role = document.getElementById("role");
      const password = document.getElementById("password");
      const confirmPassword = document.getElementById("confirmPassword");
      const age = document.getElementById("age");
      const gender = document.getElementById("gender");
      const course = document.getElementById("course");
      const terms = document.getElementById("terms");

      // Helper to show error
      function showError(input, errorId, show) {
        input.classList.toggle("invalid", show);
        document.getElementById(errorId).style.display = show ? "block" : "none";
      }

      showError(username, "usernameError", username.value.trim() === "");
      showError(fullname, "fullnameError", fullname.value.trim() === "");
      showError(role, "roleError", role.value === "");
      let emailValid = false;
      if (role.value === "Student") {
        emailValid = email.value.endsWith("@student.edu.np");
      } else if (role.value === "Teacher") {
        emailValid = email.value.endsWith("@tutor.edu.np");
      }
      showError(email, "emailError", !emailValid);
      showError(password, "passwordError", password.value.trim() === "");
      showError(confirmPassword, "confirmPasswordError", password.value !== confirmPassword.value || confirmPassword.value.trim() === "");
      showError(age, "ageError", age.value.trim() === "");
      showError(gender, "genderError", gender.value === "");
      showError(course, "courseError", course.value.trim() === "");
      showError(terms, "termsError", !terms.checked);

      // success msg
      const errors = document.querySelectorAll(".invalid");
      if (errors.length === 0) {
        alert("Registration Successful!");
        form.reset();
      }
    });