$(document).ready(function(){
    var initSimpleSearch = function(){
        $.liveSearch({
            selectorContainer: "ul",
            selectorElementsToSearch: "li",
            attributeToSearch: false,
            selectorInputSearch: "#search-query",
            selectorToHide: false,
            selectorFixed: "li:first",
            typeDelay: 100
        });
    }

    var initAjaxSearch = function(){
        var objLiveSearch = $.liveSearch({
            selectorContainer: "ul",
            selectorElementsToSearch: "li",
            attributeToSearch: false,
            selectorInputSearch: "#search-query",
            selectorToHide: "li",
            selectorFixed: "li:first",
            ajaxCallback: function(){
                $.get("server.html", function(data){
                    var search_query = objLiveSearch.getInputSearchVal();
                    objLiveSearch.ajaxDone(data, search_query);
                }, 'html');
            },
            typeDelay: 0
        });
    }

    asyncTest('teste simples, 1 ocorrencia', function () {
        expect(1);
        initSimpleSearch();
        $("#search-query").val("olino").keyup();
        setTimeout(function(){
            equal($("ul li:visible").length, 2);
            start();
        }, 500);
    });

    asyncTest('teste simples, nao encontrando nada', function () {
        expect(1);
        initSimpleSearch();
        $("#search-query").val("nothing").keyup();
        setTimeout(function(){
            equal($("ul li:visible").length, 1);
            start();
        }, 500);
    });

    asyncTest('teste ajax simples, 1 ocrrencia', function () {
        expect(1);
        initAjaxSearch();
        $("#search-query").val("olino").keyup();
        setTimeout(function(){
            equal($("ul li:visible").length, 2);
            start();
        }, 2000);
    });

    asyncTest('teste ajax simples, nao encontrando nada', function () {
        expect(1);
        initAjaxSearch();
        $("#search-query").val("nothing").keyup();
        setTimeout(function(){
            equal($("ul li:visible").length, 1);
            start();
        }, 2000);
        
    });

});