var toggle = false;

var executeContentScript = function(){
    chrome.tabs.executeScript({file:"content_script.js", allFrames : true });
};

chrome.browserAction.onClicked.addListener(function(tab) {
  toggle = !toggle;
  if(toggle){
    chrome.browserAction.setIcon({path: "WordWelterIcon19x19_On.png"});
    chrome.browserAction.setTitle({title: "Word Welter On"});
    executeContentScript();
    chrome.tabs.onUpdated.addListener(executeContentScript);
  }
  else{
    chrome.tabs.onUpdated.removeListener(executeContentScript);
    chrome.browserAction.setIcon({path: "WordWelterIcon19x19_Off.png"});
    chrome.browserAction.setTitle({title: "Word Welter Off"});
    chrome.tabs.executeScript({code:"window.location.reload();"});
  }
});