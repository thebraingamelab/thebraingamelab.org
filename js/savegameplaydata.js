function saveGameplayData(user, game, session, trial){
  
  var payload = {
    UserID: user,
    GameID: game,
    SessionID: session,
    TrialData: trial
  }

  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://api.thebraingamelab.org/savegameplaydata');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if(xhr.status == 200){
    }
  };
  xhr.send(JSON.stringify(payload));     
}