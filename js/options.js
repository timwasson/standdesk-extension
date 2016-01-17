$( document ).ready(function() {
  // Handler for .ready() called.

  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  
  function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get('displayNotifications', function(response) {
      $("#displayNotifications").prop("checked", response.displayNotifications);
    });
    chrome.storage.sync.get('playAudio', function(response) {
      $("#playAudio").prop("checked", response.playAudio);
    });
  }
  restore_options();
  
  $("#save_opt").on("click", function(e) {
    e.preventDefault();
    var displayNotifications = $("#displayNotifications").is(':checked');
    var playAudio = $("#playAudio").is(':checked');
    console.log("Audio: " + playAudio);
    console.log("Notifications: " + displayNotifications);
    
    chrome.storage.sync.set({
      playAudio: playAudio,
      displayNotifications: displayNotifications
    }, function() {
      $("#status").text("saved");
    });
  });
});