$(document).ready(function(){
var dbDelete = $(".delSubscription");

  $(dbDelete).on("click", deleteClick);

  function deleteClick(){
    //event.preventDefault();
    var id = $(this).data("id");
    console.log(id)
      $.ajax({
        method: "DELETE",
       url:  "/api/subs/" + id
      }).then(
        function() {
         // console.log("deleted id", id);
          // Reload the page to get the updated list
          location.reload();
        });
  }

  
})