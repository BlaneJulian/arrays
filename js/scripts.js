
$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var colorInput = $("#favColor").val();
    var carInput = $("#carBrand").val();
    var bandInput = $("#favBand").val();
    var questionArray = [colorInput, carInput, bandInput];
    questionArray.pop();
    alert(questionArray);

    event.preventDefault();
  });

});
