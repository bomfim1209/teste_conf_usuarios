/*controle dos nomes e cores das celulas na matriz*/
$(document).ready(function () {
    $('.box').each(function(){
        self = $(this);
        var boxID = $(this).data("id");
        var linhas = $(this).data("linhas");
        var colunas = $(this).data("colunas");
        var j;

        /*nomes das celulas da matriz vazias*/
        for (j = 1; j <= colunas; j++){
            $('.box-1'+j).text('A'+(j));
            $('.box-2'+j).text('B'+(j));
            $('.box-3'+j).text('C'+(j));
            $('.box-4'+j).text('D'+(j));
            $('.box-5'+j).text('E'+(j));
            $('.box-6'+j).text('F'+(j));
            $('.box-7'+j).text('G'+(j));
            $('.box-8'+j).text('H'+(j));
        }

        /*nomes das celulas da matriz ocupadas*/
        for (j = 1; j <= colunas; j++){
            $('.boxocupado-1'+j).text('A'+(j));
            $('.boxocupado-2'+j).text('B'+(j));
            $('.boxocupado-3'+j).text('C'+(j));
            $('.boxocupado-4'+j).text('D'+(j));
            $('.boxocupado-5'+j).text('E'+(j));
            $('.boxocupado-6'+j).text('F'+(j));
            $('.boxocupado-7'+j).text('G'+(j));
            $('.boxocupado-8'+j).text('H'+(j));
        }

        /*cor da fonte na celula ocupada*/
        $('.boxocupado-'+boxID).css("color", "white");

    });

    /*cor das celulas vazias no evento mouseover*/
    $('.box').on('mouseover',function (){
        self = $(this);
        var boxID = $(this).data("id");
        $('.box-'+boxID).css("color", "#009900");
        $('.box-'+boxID).css("background-color", "yellow");
    });

    /*cor das celulas vazias no evento mouseout*/
    $('.box').on('mouseout',function (){
        self = $(this);
        var boxID = $(this).data("id");
        $('.box-'+boxID).css("background-color", "#fff");
        $('.box-'+boxID).css("boder", "1px solid #99ff99");
    });

    /*cor das celulas ocupadas no evento click*/
    $('.boxocupado').on('click',function (){
        self = $(this);
        var boxID = $(this).data("id");
        $('.boxocupado').css("border", "none");
        $('.boxocupado').removeClass("inner-circle");
        $('.boxocupado-'+boxID).addClass("inner-circle");
    });

});
