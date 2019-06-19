/**
 * 
 */
var JuchuUrl = (function() {
	
	var JuchuUrl = function() {
	}
	
	var p = JuchuUrl.prototype;

	p.urlToQuery = function(juchu_id) {
		var url = "https://amida.cybozu.com/k/783/?view=5128380&q=f5120991%3D%22"+juchu_id+"%22";
		return url;
	};
	p.urlToList = function() {
		var url = "https://amida.cybozu.com/k/783/?view=5128380";
		return url;
	};
	
	return JuchuUrl;
})();
