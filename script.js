document.addEventListener("DOMContentLoaded", function() {
    // Registration Form
    var registerForm = document.getElementById("register-form");
    if (registerForm) {
        registerForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission
            // You can perform form validation here
            // Example: Check if fields are not empty
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            var phone = document.getElementById("phone").value;
            var address = document.getElementById("address").value;
            if (name && email && password && phone && address) {
                // Here you can send the form data to the server using AJAX or fetch API
                console.log("Registration Successful");
                registerForm.reset(); // Reset form fields
            } else {
                alert("Please fill in all fields");
            }
        });
    }

    // Login Form
    var loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent form submission
            // You can perform form validation here
            // Example: Check if fields are not empty
            var loginEmail = document.getElementById("login-email").value;
            var loginPassword = document.getElementById("login-password").value;
            if (loginEmail && loginPassword) {
                // Here you can send the login data to the server using AJAX or fetch API
                console.log("Login Successful");
                loginForm.reset(); // Reset form fields
            } else {
                alert("Please fill in all fields");
            }
        });
    }
    
    let loginBtn = document.getElementById();
    


});
