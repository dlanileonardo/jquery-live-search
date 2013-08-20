jquery-live-search [![Build Status](https://travis-ci.org/dlanileonardo/jquery-live-search.png?branch=master)](https://travis-ci.org/dlanileonardo/jquery-live-search) 
==================

Description:
------------
A simple, lightweight jQuery plugin for implement live-search.

Requirements:
------------


### Simple Usage

	$.liveSearch({
		selectorContainer: "ul",
		selectorElementsToSearch: "li",
		attributeToSearch: false,
		selectorInputSearch: "#search-query",
		selectorToHide: false,
		selectorFixed: "li:first",
	});
	
#### HTML
	
```html
	<input type="text" id="search-query">
        <ul>
            <li>Header</li>
            <li>Pernalonga</li>
            <li>Patolino</li>
            <li>Eufrazino</li>
            <li>Lola Bunny</li>
            <li>Frajola</li>
            <li>Piu-Piu</li>
            <li>Taz</li>
        </ul>
```
	
### Ajax Usage

	var objLiveSearch = $.liveSearch({
		selectorContainer: "ul",
		selectorElementsToSearch: "li",
		attributeToSearch: false,
		selectorInputSearch: "#search-query",
		selectorToHide: "li",
		selectorFixed: "li:first",
		ajaxCallback: function(){
			$.get("helpers/ajax-content.html", function(data){
				var search_query = objLiveSearch.getInputSearchVal();
                objLiveSearch.ajaxDone(data, search_query);
			}, 'html');
		},
	});

#### HTML

```html
        <input type="text" id="search-query">
        <ul>
            <li>Header</li>
        </ul>
```
        
#### HTML Ajax Return:

```html
	<html>
	    <head>
	        <title>Ajax Content</title>
	    </head>
	    <body>
	        <ul>
	            <li>Header</li>
	            <li>Pernalonga</li>
	            <li>Patolino</li>
	            <li>Eufrazino</li>
	            <li>Lola Bunny</li>
	            <li>Frajola</li>
	            <li>Piu-Piu</li>
	            <li>Taz</li>
	        </ul>
	    </body>
	</html>
```