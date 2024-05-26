// Existing login form submission event listener
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Simple validation (you may need to improve this)
    if (email === "" || password === "") {
      document.getElementById('login-error-msg').innerText = "Please enter both email and password";
    } else {
      if (email === "example@gmail.com" && password === "password") {
        alert("Login successful!");
      } else {
        document.getElementById('login-error-msg').innerText = "Invalid email or password";
      }
    }
  });

  // Adding event listener to "Log in with Facebook" button
document.getElementById('login-fb-btn').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Adding this feature soon!');
  });
  
  
// Store user credentials after signup

var users = [];

document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var name = document.getElementById('new-name').value;
  var email = document.getElementById('new-email').value;
  var password = document.getElementById('new-password').value;

  // Simple validation (you may need to improve this)
  if (name === "" || email === "" || password === "") {
    document.getElementById('signup-error-msg').innerText = "Please fill in all fields";
  } else {
    // Simulate account creation (you would replace this with actual account creation logic)
    alert("Account created successfully!");
    // Store the user's information in the users array
    users.push({name: name, email: email, password: password});

    // Redirect user back to login page
    document.querySelector('.login-container').style.display = 'block';
    document.querySelector('.signup-container').style.display = 'none';
  }
});

// Login form submission event listener
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();

  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  // Simple validation (you may need to improve this)
  if (email === "" || password === "") {
    document.getElementById('login-error-msg').innerText = "Please enter both email and password";
  } else {
    // Check if the provided credentials match any stored user
    var user = users.find(function(u) {
      return u.email === email && u.password === password;
    });

    if (user) {
      alert("Login successful!");
      // Simulate redirecting to a dummy Facebook page
      window.open("facebook.html", "_blank");

    } else {
      document.getElementById('login-error-msg').innerText = "Invalid email or password";
    }
  }
});

// Toggle between login and signup forms
document.getElementById('signup-link').addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector('.login-container').style.display = 'none';
  document.querySelector('.signup-container').style.display = 'block';
});

  