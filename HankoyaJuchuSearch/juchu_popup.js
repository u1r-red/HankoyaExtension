/*
window.alert('action in context');

var requestData = {greeting: "hello"};
chrome.runtime.sendMessage({greeting: "hello"});
*/
document.addEventListener('selectionchange', function() {
    var selection = window.getSelection().toString().trim();
    chrome.runtime.sendMessage({
        request: 'updateContextMenu',
        selection: selection
    });
});
