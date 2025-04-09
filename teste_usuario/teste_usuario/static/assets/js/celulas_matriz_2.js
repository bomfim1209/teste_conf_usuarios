/*controle dos nomes e cores das celulas na matriz LADO B*/
$(document).ready(function () {
    $('.box2').each(function(){
        self = $(this);
        var boxID = $(this).data("id");
        var linhas = $(this).data("linhas");
        var colunas = $(this).data("colunas");
        var j;

        /*nomes das celulas da matriz vazias*/
        for (j = 1; j <= colunas; j++){
            // menos de 8 linhas
            $('.box2-2'+j).text('B'+(j));
            $('.box2-3'+j).text('C'+(j));
            $('.box2-4'+j).text('D'+(j));
            $('.box2-5'+j).text('E'+(j));
            $('.box2-6'+j).text('F'+(j));
            $('.box2-7'+j).text('G'+(j));
            $('.box2-8'+j).text('H'+(j));

            // mais de 8 linhas
            $('.box2-9'+j).text('I'+(j));
            $('.box2-10'+j).text('J'+(j));
            $('.box2-11'+j).text('L'+(j));
            $('.box2-12'+j).text('M'+(j));
            $('.box2-13'+j).text('N'+(j));
            $('.box2-14'+j).text('O'+(j));
            $('.box2-15'+j).text('P'+(j));
            $('.box2-16'+j).text('Q'+(j));
        }

        /*nomes das celulas da matriz ocupadas*/
        for (j = 1; j <= colunas; j++){
            // menos de 8 linhas
            $('.boxocupado2-2'+j).text('B'+(j));
            $('.boxocupado2-3'+j).text('C'+(j));
            $('.boxocupado2-4'+j).text('D'+(j));
            $('.boxocupado2-5'+j).text('E'+(j));
            $('.boxocupado2-6'+j).text('F'+(j));
            $('.boxocupado2-7'+j).text('G'+(j));
            $('.boxocupado2-8'+j).text('H'+(j));

            // mais de 8 linhas
            $('.boxocupado2-9'+j).text('I'+(j));
            $('.boxocupado2-10'+j).text('J'+(j));
            $('.boxocupado2-11'+j).text('L'+(j));
            $('.boxocupado2-12'+j).text('M'+(j));
            $('.boxocupado2-13'+j).text('N'+(j));
            $('.boxocupado2-14'+j).text('O'+(j));
            $('.boxocupado2-15'+j).text('P'+(j));
            $('.boxocupado2-16'+j).text('Q'+(j));
        }

        /*cor da fonte na celula ocupada*/
        $('.boxocupado2-'+boxID).css("color", "white");

    });


    /*cor das celulas vazias no evento mouseover*/
    $('.box2').on('mouseover',function (){
        self = $(this);
        var boxID = $(this).data("id");
        $('.box2-'+boxID).css("color", "#009900");
        $('.box2-'+boxID).css("background-color", "yellow");
    });

    /*cor das celulas vazias no evento mouseout*/
    $('.box2').on('mouseout',function (){
        self = $(this);
        var boxID = $(this).data("id");
        $('.box2-'+boxID).css("background-color", "#fff");
        $('.box2-'+boxID).css("boder", "1px solid #99ff99");
    });

    /*cor das celulas ocupadas no evento click*/
    $('.boxocupado2').on('click',function (){
        self = $(this);
        var boxID = $(this).data("id");
        $('.boxocupado2').css("border", "none");
        $('.boxocupado2').removeClass("inner-circle");
        $('.boxocupado2-'+boxID).addClass("inner-circle");
    });

 });
