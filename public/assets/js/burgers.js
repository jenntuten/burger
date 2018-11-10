
$(function() {
  //Handles user request on click to change 'devoured' value (boolean). This is then sent to the database and returned as the opposite value.
  $(".change-eat").on("click", function(event) {
    let id = $(this).data("id");
    let newEat = $(this).data("neweat");
    let newEatState = {
      devoured: newEat
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newEatState
    }).then(
      function() {
        console.log("changed status to", newEat);
        location.reload();
      }
    );
  });

  //Handles user request on click to add burger to database.
  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    let newBurger = {
      burger_name: $("#bu").val().trim(),
      devoured: 0
    };
    
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("added new burger");
        location.reload();
      }
    );
  });
});
