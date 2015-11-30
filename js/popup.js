$( document ).ready(function() {
  
  var bg = chrome.extension.getBackgroundPage();
  var timer = bg.timer;
  var sitStand = bg.sitStand;
  var sitDuration = bg.sitDuration;
  var standDuration = bg.standDuration;
  
  var timeRemains = function() {
    if (sitStand == 'sit') {
      return sitDuration - timer;
    } else if (sitStand == 'stand') {
      return standDuration - timer;
    }
  }
  
  $("p#timer").text(timeRemains() + " remaining");
  $("#sitDur").text(sitDuration);
  $("#standDur").text(standDuration);
  $("#sitStand").text(sitStand);
});