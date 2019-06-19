/**
 * 
 */
var JuchuJumpMenu = (function() {
	
	var JuchuJumpMenu = function() {
		this._urlResolver = new JuchuUrl();
		
		var url = this._urlResolver.urlToList();		
		this._contextMenuID = chrome.contextMenus.create({
			  title: 'kintone受注検索画面へ',
			  contexts: ['selection'],
			  type: 'normal',
			  onclick: (info, tab) => {
				window.open(url);
			  }
			});

	}
	
	var p = JuchuJumpMenu.prototype;

	p.setSelection = function(selected) {
		if( selected ) {
			var url = this._urlResolver.urlToQuery(selected);
		    chrome.contextMenus.update(this._contextMenuID, {
		    	title: 'kintoneで受注ID['+selected+']を検索',
				  onclick: (info, tab) => {
					  window.open(url);
				  }
		    });

		} else {
			var url = this._urlResolver.urlToList();
		    chrome.contextMenus.update(this._contextMenuID, {
		    	title : 'kintone受注検索画面へ',
				onclick: (info, tab) => {
					window.open(url);
				}
		    });
		}
	};
	
	return JuchuJumpMenu;
})();
