// Get the button element
const button = document.getElementById('mybutton');

// Add an event listener to the button
button.addEventListener('click', function() {
  // Open the second HTML file in the same window
  window.location.href = 'about.html';
});

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('click', function() {
    window.location.href = 'login.html';
});

const signupForm = document.getElementById('signup-form');
signupForm.addEventListener('click',function () {
    window.location.href = 'signup.html';
});


const button1 = document.getElementById('crew');
button1.addEventListener('click', function() {
  window.location.href = 'crew_details.html';
});

const button2 = document.getElementById('man');
button2.addEventListener('click', function() {
  window.location.href = 'mangage.html';
});

const button3 = document.getElementById('dash');
button3.addEventListener('click', function() {
  window.location.href = 'dashboard.html';
});


function password_show_hide() {
    var x = document.getElementById("password");
    var show_eye = document.getElementById("show_eye");
    var hide_eye = document.getElementById("hide_eye");
    hide_eye.classList.remove("d-none");
    if (x.type === "password") {
      x.type = "text";
      show_eye.style.display = "none";
      hide_eye.style.display = "block";
    } else {
      x.type = "password";
      show_eye.style.display = "block";
      hide_eye.style.display = "none";
    }
  }





