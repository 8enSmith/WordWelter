var toggle = false;
chrome.browserAction.onClicked.addListener(function(tab) {
  toggle = !toggle;
  if(toggle){
    chrome.browserAction.setIcon({path: "WordWelterIcon19x19_On.png", tabId:tab.id});
    chrome.tabs.executeScript(tab.id, {file:"content_script.js"});
  }
  else{
    chrome.browserAction.setIcon({path: "WordWelterIcon19x19_Off.png", tabId:tab.id});
    chrome.tabs.executeScript(tab.id, {code:"window.location.reload();"});
  }
});