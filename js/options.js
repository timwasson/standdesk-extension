$( document ).ready(function() {
  // Handler for .ready() called.

  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  
  function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    chrome.storage.sync.get('sitDuration', function(response) {
      $("#sitdur").val(response.sitDuration);
    });
    chrome.storage.sync.get('standDuration', function(response) {
      $("#standdur").val(response.standDuration);
    });
  }
  restore_options();
  
  $("#save_opt").on("click", function(e) {
    e.preventDefault();
    var sitdur = $("#sitdur").val();
    var standdur = $("#standdur").val();
    console.log(sitdur);
    $("#status").text(sitdur);
    
    chrome.storage.sync.set({
      sitDuration: sitdur,
      standDuration: standdur
    }, function() {
      $("#status").text("saved");
    });
  });
});