// Code here handles what happens when a user submits a new subscription on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

$(document).ready(function(){
  // var moment = require("moment");
  var subInput = $("#subName");
  var amountInput = $("#amount");
  var dueInput = $("#dueDate");
  var formSubmit = $("#subsForm"); 
// when user clicks add-btn
$(formSubmit).on("submit", submitingForm)
  
function submitingForm(event){
event.preventDefault();
console.log("your on the click")
  // Make a newSub object
  const newSub = {
    name: subInput.val().trim(),
    amount: amountInput.val().trim(),
    dueDate: moment(dueInput.val().trim()).format("MM/DD/YYYY")
  };
console.log(dueDate)
    submitSubscription(newSub);
};
})

function submitSubscription(Sub){
  var err = false;
  // send an AJAX POST-request with jQuery
  $.post("/api/subs", Sub, function(){

      console.log(Sub);
      // tell the user we're adding a subscription with an alert window
     //alert("Adding subscription...");
      if(err){
       alert("please fill out input fields to add a subscription");
   
      }else{
        window.location.href = "/list";
      }
    });
  };