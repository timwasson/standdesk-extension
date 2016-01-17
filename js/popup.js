$( document ).ready(function() {
  var bg = chrome.extension.getBackgroundPage();
  
  function updateStatus() {
    var timer = bg.timeRem;
    var status = bg.status;
    var distance = bg.distance;
    
    $("p#timer").text(timer);
    $("#distance").text(Math.round(distance) + "cm");
    $("#status").text(status);
  }
  
  updateStatus();
  
  setInterval(function() {
    updateStatus();
  }, 1000);
  
  // Up and down buttons
  $("#up").on("click", function() {
    $.ajax("http://10.0.1.47:3000/up");
  });
  $("#down").on("click", function() {
    $.ajax("http://10.0.1.47:3000/down");
  });
});