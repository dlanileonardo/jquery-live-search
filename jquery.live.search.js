jQuery.fn.reverse = [].reverse;

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
            $(opts.selectorInputSearch).bind("keyup blur", function(){
                textElement = $(this).val();
                // Stop previous ajax-request
                if (this.timer) {
                    clearTimeout(this.timer);
                }

                // Start a new ajax-request in X ms
                this.timer = setTimeout(function () {
                    initFilter();
                }, opts.typeDelay);
            });
        };

        var initFilter = function(){
            if ( textElement.length >= opts.minCharacters ){
                if ( opts.ajaxCallback ){
                    opts.ajaxCallback.call(this);
                } else {
                    filterElements(textElement);
                }
            }else if ( textElement.length === 0 ){
                if ( opts.ajaxCallback ){
                    opts.ajaxCallback.call(this);
                } else {
                    resetFilter();
                }
            }
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

                // Oculta os cabeçalhos
                if ( opts.selectorHead ){
                    var nextHide = true;
                    $(opts.selectorContainer)
                        .find(opts.selectorHead + "," + opts.selectorToHide)
                        .reverse().each(function(){
                        if ($(this).is(opts.selectorToHide)){
                            if ($(this).is(':visible')){
                                nextHide = false;
                            }
                        }
                        if ($(this).is(opts.selectorHead)) {
                            if ( nextHide ){
                                $(this).hide();
                            }else{
                                $(this).show();
                                nextHide = true;
                            }
                        }
                   });
                }
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
            var newContent = $(page).filter(opts.selectorContainer).html();
            var container = $(opts.selectorContainer);
            container.html(newContent);
            if ( opts.ajaxFilter ) {
              filterElements(textElement);
            }
        };

        var resetFilter = function() {
            if (opts.selectorToHide) {
                $(opts.selectorContainer).find(opts.selectorToHide).show();
            } else {
                $(selectorToSearch).show();
            }
            if (opts.selectorHead){
                $(opts.selectorContainer).find(opts.selectorHead).show();
            }
        };

        //Public function
        this.reFilter = function() {
            filterElements(textElement);
        };

        this.ajaxDone = function(data, search_query) {
            if ( search_query === textElement ){
                filterAjax(data, search_query);
            }
        };

        this.getInputSearchVal = function(){
            return textElement;
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
        selectorHead: false,
        selectorToHide: false,
        minCharacters: 3,
        typeDelay: 500,
        ajaxFilter: true,
        ajaxCallback: false
    };

})(jQuery);