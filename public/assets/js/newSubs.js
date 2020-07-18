// Code here handles what happens when a user submits a new subscription on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

$(document).ready(function () {
  var subInput = $("#subName");
  var amountInput = $("#amount");
  var dueInput = $("#dueDate");
  var formSubmit = $("#subsForm");

  // when user clicks add-btn
  $(formSubmit).on("submit", submitingForm);

  function submitingForm(event) {
    event.preventDefault();
    //console.log("your on the click")
    // Make a newSub object
    const newSub = {
      name: subInput.val().trim(),
      amount: amountInput.val().trim(),
      dueDate: dueInput.val().trim(),
    };
    //console.log("due input",newSub) // here is the console.
    submitSubscription(newSub);
  }

  function submitSubscription(Sub) {
    console.log("console log", Sub);
    if (!Sub.name || !Sub.amount || !Sub.dueDate) {
      alert("please fill out input fields to add a subscription");
    } else {
      // send an AJAX POST-request with jQuery
      $.post("/api/subs", Sub, function () {
        window.location.href = "/list";
  
      });
    }
  }
});
