var sitDuration, standDuration;

/* Get Chrome Options for sitting and standing durations */
chrome.storage.sync.get('sitDuration', function(response) {
  //console.log(response.sitDuration);
  sitDuration = response.sitDuration;
});

chrome.storage.sync.get('standDuration', function(response) {
  standDuration = response.standDuration;
});

// Set the timer at zero and force a stand
var timer = 0;
var sitStand = 'stand';
$.ajax("http://10.0.1.47:3000/up");

setInterval(function(){
  // Only run this on certain days and certain times
  var today = new Date();
  // Don't run on the weekends (6 and 0) or before/after certain hours (8 and 5)
  if(today.getDay() !=6 && today.getDay() != 0 && today.getHours() >= 8 && today.getHours() <= 17) {
    timer++;
    console.log("time: " + timer);
    if(sitStand == 'stand' && timer >= standDuration) {
      // AJAX CALL TO SIT
      $.ajax("http://10.0.1.47:3000/down");
      timer = 0;
      sitStand = 'sit';
    } else if(sitStand == 'sit' && timer >= sitDuration) {
      // AJAX CALL TO STAND
      $.ajax("http://10.0.1.47:3000/up");
      timer = 0;
      sitStand = 'stand';
    }
  }
}, 
// 1 minute
60000
);

