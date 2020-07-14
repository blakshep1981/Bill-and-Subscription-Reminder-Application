// Code here handles what happens when a user submits a new subscription on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#sub-submit").on("click", function(event) {
  event.preventDefault();

  // Make a newSub object
  const newSub = {
    name: $(".newName").val().trim(),
    amount: $(".newAmount").val().trim(),
    dueDate: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  // send an AJAX POST-request with jQuery
  $.post("/api/bills", newSub)
    // on success, run this callback
    .then(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a subscription with an alert window
      alert("Adding subscription...");
    });

  // empty each input box by replacing the value with an empty string
  $(".newName").val("");
  $(".newAmount").val("");
  $(".dueDate").val("");
});