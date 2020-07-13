// When user clicks add-btn
$("#sub-submit").on("click", function(event) {
    event.preventDefault();
  
    // Make a newSub object
    const newSub = {
      name: $(".newName").val().trim(),
      amount: $(".newAmount").val().trim(),
      dueDate: date().format("YYYY-MM-DD")
    };
  
    console.log(newSub);
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newSub)
      // On success, run the following code
      .then(function() {
  
        const row = $("<div>");
        row.addClass("addedSub");
  
        row.append("<p>" + newSub.name + " Subscription: </p>");
        row.append("<p>" + newSub.body + "</p>");
        row.append("<p>At " + date(newSub).format("YYYY-MM-DD") + "</p>");
  
        $("#chirp-area").prepend(row);
  
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#author").val("");
    $("#chirp-box").val("");
  });
  
  // When the page loads, grab all of our user's subscriptions
  $.get("/api/all", function(data) {
  
    if (data.length !== 0) {
  
      for (const i = 0; i < data.length; i++) {
  
        const row = $("<div>");
        row.addClass("chirp");
  
        row.append("<p>" + data[i].author + " chirped.. </p>");
        row.append("<p>" + data[i].body + "</p>");
        row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
  
        $("#chirp-area").prepend(row);
  
      }
  
    }
  
  });
  