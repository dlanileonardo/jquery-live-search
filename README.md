jquery-live-search [![Build Status](https://travis-ci.org/dlanileonardo/jquery-live-search.png?branch=master)](https://travis-ci.org/dlanileonardo/jquery-live-search) 
==================

Description:
------------
A simple, lightweight jQuery plugin for implement live-search.

Requirements:
------------


### Simple Usage

```js
$.liveSearch({
    selectorContainer: "ul",
    selectorElementsToSearch: "li",
    attributeToSearch: false,
    selectorInputSearch: "#search-query",
    selectorToHide: false,
    selectorFixed: "li:first",
});
```
    
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

```js
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
```

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

## Options

<table>
    <tr>
        <th>Option Name</th>
        <th>Description</th>
        <th>Values</th>
        <th>Default Value</th>
    </tr>
    <tr>
        <td><strong>attributeToSearch</strong></td>
        <td></td>
        <td>string</td>
        <td>data-search</td>
    </tr>
    <tr>
        <td><strong>selectorContainer</strong></td>
        <td></td>
        <td>string</td>
        <td>table</td>
    </tr>
    <tr>
        <td><strong>selectorElementsToSearch</strong></td>
        <td></td>
        <td>string</td>
        <td>td</td>
    </tr>
    <tr>
        <td><strong>selectorInputSearch</strong></td>
        <td></td>
        <td>string</td>
        <td>input#search_query</td>
    </tr>
    <tr>
        <td><strong>selectorHead</strong></td>
        <td></td>
        <td>string</td>
        <td>false</td>
    </tr>
    <tr>
        <td><strong>selectorToHide</strong></td>
        <td></td>
        <td>string</td>
        <td>false</td>
    </tr>
    <tr>
        <td><strong>minCharacters</strong></td>
        <td></td>
        <td>integer</td>
        <td>3</td>
    </tr>
    <tr>
        <td><strong>typeDelay</strong></td>
        <td></td>
        <td>integer</td>
        <td>500</td>
    </tr>
    <tr>
        <td><strong>ajaxCallback</strong></td>
        <td></td>
        <td>callback</td>
        <td>false</td>
    </tr>
</table>
