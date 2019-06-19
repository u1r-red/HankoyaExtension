var jump = new JuchuJumpMenu();

chrome.runtime.onMessage.addListener((msg, sender, sendResponse)=> {
  if (msg.request === 'updateContextMenu') {
	  jump.setSelection(msg.selection);
  }
});
