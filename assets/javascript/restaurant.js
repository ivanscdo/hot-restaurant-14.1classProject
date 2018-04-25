
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
$('#myModal').modal(options)





// Question: What does this code do?
$("#add-btn").on("click", function(event) {
  event.preventDefault();
  var newCharacter = {
    name: $("#name").val().trim(),
    role: $("#role").val().trim(),
    age: $("#age").val().trim(),
    forcePoints: $("#force-points").val().trim()
  };

  // Question: What does this code do??
  $.post("/api/characters", newCharacter)
    .then(function(data) {
      console.log("add.html", data);
      alert("...");
    });
});