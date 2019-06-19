console.debug('action in juchu_popup context');
$(function(){
	$(document).on('selectionchange', function() {
	    var selection = window.getSelection().toString().trim();
		console.log('selection chaned: ', selection);		
	    chrome.runtime.sendMessage({
	        request: 'updateContextMenu',
	        selection: selection
	    });
	});
});
