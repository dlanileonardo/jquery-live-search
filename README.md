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
        <th>Type</th>
        <th>Default Value</th>
    </tr>
    <tr>
        <td><strong>attributeToSearch</strong></td>
        <td>Name of the attribute that contains the content to be searched</td>
        <td>string</td>
        <td>data-search</td>
    </tr>
    <tr>
        <td><strong>selectorContainer</strong></td>
        <td>Main container of elements</td>
        <td>string</td>
        <td>table</td>
    </tr>
    <tr>
        <td><strong>selectorElementsToSearch</strong></td>
        <td>Selector of elements to be searched</td>
        <td>string</td>
        <td>td</td>
    </tr>
    <tr>
        <td><strong>selectorInputSearch</strong></td>
        <td>Selector of input field search</td>
        <td>string</td>
        <td>input#search_query</td>
    </tr>
    <tr>
        <td><strong>selectorHead</strong></td>
        <td>Selector of the Heads</td>
        <td>string</td>
        <td>false</td>
    </tr>
    <tr>
        <td><strong>selectorToHide</strong></td>
        <td>Selector element to be hidden</td>
        <td>string</td>
        <td>false</td>
    </tr>
    <tr>
        <td><strong>minCharacters</strong></td>
        <td>Minimum number of characters to trigger the search.</td>
        <td>integer</td>
        <td>3</td>
    </tr>
    <tr>
        <td><strong>typeDelay</strong></td>
        <td>Delay time at the end of typing.</td>
        <td>integer</td>
        <td>500</td>
    </tr>
    <tr>
        <td><strong>ajaxFilter</strong></td>
        <td>Pass false if Ajax return already filtred.</td>
        <td>boolean</td>
        <td>true</td>
    </tr>
    <tr>
        <td><strong>ajaxCallback</strong></td>
        <td>Callback function to custom ajax.</td>
        <td>callback</td>
        <td>false</td>
    </tr>
</table>


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/dlanileonardo/jquery-live-search/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

