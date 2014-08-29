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

    var initAjaxSearchNoFilter = function(){
        var objLiveSearch = $.liveSearch({
            selectorContainer: "ul",
            selectorElementsToSearch: "li",
            attributeToSearch: false,
            selectorInputSearch: "#search-query",
            selectorToHide: "li",
            selectorFixed: "li:first",
            ajaxFilter: false,
            ajaxCallback: function(){
                $.get("server.html", function(data){
                    var search_query = objLiveSearch.getInputSearchVal();
                    objLiveSearch.ajaxDone(data, search_query);
                }, 'html');
            },
            typeDelay: 0
        });
    }

    QUnit.asyncTest('teste simples, 1 ocorrencia', function (assert) {
        expect(1);
        initSimpleSearch();
        $("#search-query").val("olino").keyup();
        setTimeout(function(){
            assert.equal($("ul li:visible").length, 2);
            QUnit.start();
        }, 500);
    });

    QUnit.asyncTest('teste simples, nao encontrando nada', function (assert) {
        expect(1);
        initSimpleSearch();
        $("#search-query").val("nothing").keyup();
        setTimeout(function(){
            assert.equal($("ul li:visible").length, 1);
            QUnit.start();
        }, 500);
    });

    QUnit.asyncTest('teste ajax simples, 1 ocorrencia', function (assert) {
        expect(2);
        initAjaxSearch();
        $("#search-query").val("Batma").keyup();
        setTimeout(function(){
            assert.equal($("ul li:visible").length, 2);
            var herois = "";
            $("ul li:visible").each(function(){
              herois = herois + " " + $(this).html();
            });
            assert.equal(herois, " Heróis Batman");
            QUnit.start();
        }, 2000);
    });

    QUnit.asyncTest('teste ajax simples, nao encontrando nada', function (assert) {
        expect(2);
        initAjaxSearch();
        $("#search-query").val("Capitão América").keyup();
        setTimeout(function(){
            assert.equal($("ul li:visible").length, 1);
            var herois = "";
            $("ul li:visible").each(function(){
              herois = herois + " " + $(this).html();
            });
            assert.equal(herois, " Heróis");
            QUnit.start();
        }, 2000);

    });

    QUnit.asyncTest('teste ajax simples, encontrando vários', function (assert) {
        expect(2);
        initAjaxSearch();
        $("#search-query").val("man").keyup();
        setTimeout(function(){
            assert.equal($("ul li:visible").length, 5);
            var herois = "";
            $("ul li:visible").each(function(){
              herois = herois + " " + $(this).html();
            });
            assert.equal(herois, " Heróis Batman Superman Spiderman Ironman");
            QUnit.start();
        }, 2000);

    });

    QUnit.asyncTest('teste ajax simples, sem filtro', function (assert) {
        expect(1);
        initAjaxSearchNoFilter();
        $("#search-query").val("Magneto").keyup();
        setTimeout(function(){
            assert.equal($("ul li:visible").length, 9);
            QUnit.start();
        }, 2000);
    });

});