$(document).ready(function() {
  $("form#inputs").submit(function(event) {
    var listItems = ["q1", "q2", "q3", "q4", "q5"];

    var userInputs = [];
    listItems.forEach(function(listItem) {
      var answer = $("#" + listItem).val();
      if (answer) {
        userInputs.push(answer);
      }
    });

    var alphaCaps = userInputs.map(function(userInput) {
      return userInput.toUpperCase();
    });
    alphaCaps.sort();
    console.log(alphaCaps);

    $("form#inputs").slideUp();
    $("button").slideUp();
    alphaCaps.forEach(function(alphaCap) {
      $("#output").append("<li>" + alphaCap + "</li>");
    });

  event.preventDefault();
  });
});
