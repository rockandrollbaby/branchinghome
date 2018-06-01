$(document).ready(function() {
  var height = parseInt(prompt("How tall are you?"));

  if (height >= 5) {
    $('#ride').show();
  } else {
    $('#under-5').show();
  }
});

$(document).ready(function() {
  var height = parseInt(prompt("How tall are you?"));

  if (height >= 1) {
    $('#all').show();
  }
});
