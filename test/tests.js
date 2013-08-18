$(document).ready(function(){
    $.liveSearch({
        selectorContainer: "ul",
        selectorElementsToSearch: "li",
        attributeToSearch: false,
        selectorInputSearch: "#search-query",
        selectorToHide: false,
        selectorFixed: "li:first",
    });

    test('teste simple search, 1 ocorrencia', function () {
        expect(1);
        $("#search-query").val("olino").keyup();
        equal($("ul li:visible").length, 2);
    });

    test('teste simple search, nao encontrando nada', function () {
        expect(1);
        $("#search-query").val("pica-pau").keyup();
        equal($("ul li:visible").length, 1);
    });
});