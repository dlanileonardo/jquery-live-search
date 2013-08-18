(function ($) {

    'use strict';

    $.liveSearch = function (options)
    {
        // setup
        var opts             = $.extend({}, $.liveSearch.defaults, options);
        var _self            = this;
        var selectorToSearch;
        var textElement;

        function init() {
            if (  opts.remote){
                selectorToSearch = opts.selectorContainer + " " + opts.selectorElementsToSearch;
            }else{
                selectorToSearch = opts.selectorContainer + " " + opts.selectorElementsToSearch;
            }

            bindInputSearch();
            preventSubmit();
            return _self;
        }

        var bindInputSearch = function() {
            $(opts.selectorInputSearch).bind("keyup", function(){
                textElement = $(this).val();
                if ( textElement.length >= opts.minCharacters ){
                    if ( opts.ajaxCallback ){
                        opts.ajaxCallback.call(this);
                    } else {
                        filterElements(textElement);
                    }
                }else if ( textElement.length === 0 ){
                    resetFilter();
                }
            });
        };

        var preventSubmit = function() {
            $(opts.selectorInputSearch).keydown(function(e){
                if(e.keyCode === 13){
                    return false;
                }
            });
        };

        var filterElements = function(textElement) {
            var pattern = new RegExp(textElement, "igm");
            if (opts.selectorToHide && opts.selectorElementsToSearch !== opts.selectorToHide) {
                $(selectorToSearch).parents(opts.selectorToHide).not(opts.selectorFixed).hide();
                $(selectorToSearch).filter(function(){
                    var content = $(this).html();
                    return content.match(pattern);
                }).parents(opts.selectorToHide).show();
            } else {
                $(selectorToSearch).not(opts.selectorFixed).hide();
                $(selectorToSearch).filter(function(){
                    var content = $(this).html();
                    return content.match(pattern);
                }).show();
            }
        };

        var filterAjax = function(page){
            $(opts.selectorContainer).find(opts.selectorToHide).remove();
            var items = [],
                container;

            // walk through the items on the next page
            // and add them to the items array
            container = $(opts.selectorContainer, page).eq(0);
            if (0 === container.length) {
                // incase the element is a root element (body > element),
                // try to filter it
                container = $(page).filter(opts.selectorContainer).eq(0);
            }

            if (container) {
                container.find(opts.selectorToHide).each(function () {
                    items.push(this);
                });
            }

            $(opts.selectorContainer).append(items);

            filterElements(textElement);
        };

        var resetFilter = function() {
            if (opts.selectorToHide) {
                $(selectorToSearch).parents(opts.selectorToHide).show();
            } else {
                $(selectorToSearch).show();
            }
        };

        //Public function
        this.reFilter = function() {
            filterElements(this.textElement);
        };

        this.ajaxDone = function(data) {
            filterAjax(data);
        };

        // initialize
        return init();
    };

    // Options Defaults
    $.liveSearch.defaults = {
        attributeToSearch: "data-search",
        selectorContainer: "table",
        selectorElementsToSearch: "td",
        selectorInputSearch: "input#search_query",
        selectorToHide: null,
        minCharacters: 3,
        ajaxCallback: false
    };

})(jQuery);