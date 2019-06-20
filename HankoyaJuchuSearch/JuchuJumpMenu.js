/**
 * 
 */
var JuchuJumpMenu = (function() {
	
	
	var JuchuJumpMenu = function() {
		this._urlResolver = new JuchuUrl();
		
		var url = this._urlResolver.urlToList();
		
		this._contextMenuID = "HankoyaJumpJuchu";
		chrome.contextMenus.create({
			  id : this._contextMenuID,
			  title: 'kintone受注検索画面へ',
			  contexts: ['selection'],
			  type: 'normal'
			});

		chrome.contextMenus.onClicked.addListener(
			(info,tab) => {
				console.debug('menu action:',info.menuItemId);
				switch(info.menuItemId) {
				case this._contextMenuID:
					console.log("selected:",info.selectionText);
					var url = this._urlResolver.urlToQuery(info.selectionText);
					chrome.tabs.create({
						active: true,
						url:url
					});
					break;
				}
			}
		);
	}
	
	var p = JuchuJumpMenu.prototype;

	p.setSelection = function(selected) {
		if( selected ) {
			var url = this._urlResolver.urlToQuery(selected);
		    chrome.contextMenus.update(this._contextMenuID, {
		    	title: 'kintoneで受注ID['+selected+']を検索'
		    });

		} else {
			var url = this._urlResolver.urlToList();
		    chrome.contextMenus.update(this._contextMenuID, {
		    	title : 'kintone受注検索画面へ'
			});
		}
	};
	
	return JuchuJumpMenu;
})();
