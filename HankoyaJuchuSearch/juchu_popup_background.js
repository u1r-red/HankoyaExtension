function junpToJuchuQuery(juchu_id) {
  var url = "https://amida.cybozu.com/k/783/?view=5128380&q=f5120991%20%3D%20%22"+juchu_id+"%22%20";
  window.open(url);
}
function junpToJuchuList() {
  var url = "https://amida.cybozu.com/k/783/?view=5128380";
  window.open(url);
}

var contextMenuID = chrome.contextMenus.create({
  title: 'kintone受注検索画面へ',
  contexts: ['selection'],
  type: 'normal',
  onclick: (info, tab)=>{
    junpToJuchuList();
  }
});

function contextMenuUpdate(selected) {
  if(selected) {
    chrome.contextMenus.update(contextMenuID, {
        title: 'kintoneで受注ID['+selected+']を検索',
        onclick: (info, tab)=>{
          junpToJuchuQuery(selected);
        }
    });
  }else {
    chrome.contextMenus.update(contextMenuID, {
        title: 'kintone受注検索画面へ',
        onclick: (info, tab)=>{
          junpToJuchuList();
        }
    });
  }
};

chrome.runtime.onMessage.addListener((msg, sender, sendResponse)=> {
  if (msg.request === 'updateContextMenu') {
    contextMenuUpdate(msg.selection);
  }
});
