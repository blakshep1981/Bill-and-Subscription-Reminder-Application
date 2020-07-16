// Code here handles what happens when a user submits a new subscription on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.
$(document).ready(function(){
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
    dueDate: dueInput.val().trim()
  };

    submitSubscription(newSub);

  // empty each input box by replacing the value with an empty string
  // $(".newName").val("");
  // $(".newAmount").val("");
  // $(".dueDate").val("");
};
})

function submitSubscription(Sub){
  var err = false;
  // send an AJAX POST-request with jQuery
  $.post("/api/subs", Sub, function(){
    //window.location.href = "/blog";
  
  })
    // on success, run this callback
 
      // log the data we found
      console.log(Sub);
      // tell the user we're adding a subscription with an alert window
     //alert("Adding subscription...");
      if(err){
      return alert("please fill out input fields to add a subscription");
   
      }else{
        window.location.href = "/list";
      }
  };