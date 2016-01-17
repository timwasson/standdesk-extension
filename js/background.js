/* Get Chrome Options for Notifications */

var displayNotifications, playAudio;

chrome.storage.sync.get('displayNotifications', function(response) {
  displayNotifications = response.displayNotifications;
});

chrome.storage.sync.get('playAudio', function(response) {
  playAudio = response.playAudio;
});

/* End Chrome Options */

var timeRem, status, distance, notification;

function SecondsTohhmmss(totalSeconds) {
    var hours   = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    var seconds = totalSeconds - (hours * 3600) - (minutes * 60);
  
    // round seconds
    seconds = Math.round(seconds * 100) / 100
  
    var result = (hours < 10 ? "0" + hours : hours);
      result += ":" + (minutes < 10 ? "0" + minutes : minutes);
      result += ":" + (seconds  < 10 ? "0" + seconds : seconds);
    return result;
  }

setInterval(function() {
  $.getJSON("http://10.0.1.47:3000/status", function(data){
    timeRem = SecondsTohhmmss(data.timeRemain);
    status = data.status;
    distance = data.distance;
    console.log(data);
    
    // Notify
    if(data.timeRemain == 30) {
      var options = {
        body: "Desk is about to move",
        icon: "../icons/logo_48.png"
      }
      if (displayNotifications == true) {
        notification = new Notification("StandDesk",options);
      }
      if (playAudio == true) {
        new Audio('../mp3/preparetoelevate.mp3').play();  
      }
      console.log("Notified");
    }
  });
}
, 1000);