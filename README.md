jquery-live-search
==================

Description:
------------
A simple, lightweight jQuery plugin for implement live-search.

Requirements:
------------


Simple Usage:

	$.liveSearch({
		selectorContainer: "ul",
		selectorElementsToSearch: "li",
		attributeToSearch: false,
		selectorInputSearch: "#search-query",
		selectorToHide: false,
		selectorFixed: "li:first",
	});
	
Ajax Usage:

	var objLiveSearch = $.liveSearch({
		selectorContainer: "ul",
		selectorElementsToSearch: "li",
		attributeToSearch: false,
		selectorInputSearch: "#search-query",
		selectorToHide: "li",
		selectorFixed: "li:first",
		ajaxCallback: function(){
			$.get("helpers/ajax-content.html", function(data){
				objLiveSearch.ajaxDone(data);
			}, 'html');
		},
	});
