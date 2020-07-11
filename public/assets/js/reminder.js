$(document).ready(function() {
    // Getting references to our form and inputs
    // gets our data from our modal entry 
    var loginForm = $("form.login");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");
  
    // When the form is submitted, we validate there's a subscription and bill amount
    loginForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
          //subscription/ reminder
        email: emailInput.val().trim(),
        // bill aount
        password: passwordInput.val().trim()
      };
  
      if (!userData.email || !userData.password) {
        return;
      }
  
      // If we have an email and password we run the loginUser function and clear the form
      addReminder(userData.email, userData.password);
      emailInput.val("");
      passwordInput.val("");
    });
  
    // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
    function addReminder(email, password) {
      $.post("/api/login", {
        email: email,
        password: password
      })
        .then(function() {
          window.location.replace("/members");
          // If there's an error, log the error
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  });
  