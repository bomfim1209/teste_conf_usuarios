/* OUTRAS ESTANTES LADO A*/
//$('.box-estantes').each(function(){
$.each($('.box-estantes'), function(){
    self = $(this);
    var boxID = $(this).data("id");
    var linhas = $(this).data("linhas");
    var colunas = $(this).data("colunas");
    var estante = $(this).data("estante");
    var j;

    /*nomes das celulas da matriz vazias*/
    for (j = 1; j <= colunas; j++){
        $('.box-estantes-'+estante+'-1'+j).text('A'+(j));
        $('.box-estantes-'+estante+'-2'+j).text('B'+(j));
        $('.box-estantes-'+estante+'-3'+j).text('C'+(j));
        $('.box-estantes-'+estante+'-4'+j).text('D'+(j));
        $('.box-estantes-'+estante+'-5'+j).text('E'+(j));
        $('.box-estantes-'+estante+'-6'+j).text('F'+(j));
        $('.box-estantes-'+estante+'-7'+j).text('G'+(j));
        $('.box-estantes-'+estante+'-8'+j).text('H'+(j));
    }

    /*nomes das celulas da matriz ocupadas*/
    for (j = 1; j <= colunas; j++){
        $('.boxocupado-estantes-'+estante+'-1'+j).text('A'+(j));
        $('.boxocupado-estantes-'+estante+'-2'+j).text('B'+(j));
        $('.boxocupado-estantes-'+estante+'-3'+j).text('C'+(j));
        $('.boxocupado-estantes-'+estante+'-4'+j).text('D'+(j));
        $('.boxocupado-estantes-'+estante+'-5'+j).text('E'+(j));
        $('.boxocupado-estantes-'+estante+'-6'+j).text('F'+(j));
        $('.boxocupado-estantes-'+estante+'-7'+j).text('G'+(j));
        $('.boxocupado-estantes-'+estante+'-8'+j).text('H'+(j));
    }

    /*cor da fonte na celula ocupada*/
    $('.boxocupado-estantes-'+estante+'-'+boxID).css("color", "white");
});

/*cor das celulas vazias no evento mouseover*/
$('.box-estantes').on('mouseover',function (){
    self = $(this);
    var boxID = $(this).data("id");
    var estante = $(this).data("estante");
    $('.box-estantes-'+estante+'-'+boxID).css("color", "#009900");
    $('.box-estantes-'+estante+'-'+boxID).css("background-color", "yellow");
});

/*cor das celulas vazias no evento mouseout*/
$('.box-estantes').on('mouseout',function (){
    self = $(this);
    var boxID = $(this).data("id");
    var estante = $(this).data("estante");
    $('.box-estantes-'+estante+'-'+boxID).css("background-color", "#fff");
});


/* OUTRAS ESTANTES LADO B*/
//$('.box2-estantes').each(function(){
$.each($('.box2-estantes'), function(){
    self = $(this);
    var boxID = $(this).data("id");
    var linhas = $(this).data("linhas");
    var colunas = $(this).data("colunas");
    var estante = $(this).data("estante");
    var j;

    /*nomes das celulas da matriz vazias*/
    for (j = 1; j <= colunas; j++){
        $('.box2-estantes-'+estante+'-1'+j).text('A'+(j));
        $('.box2-estantes-'+estante+'-2'+j).text('B'+(j));
        $('.box2-estantes-'+estante+'-3'+j).text('C'+(j));
        $('.box2-estantes-'+estante+'-4'+j).text('D'+(j));
        $('.box2-estantes-'+estante+'-5'+j).text('E'+(j));
        $('.box2-estantes-'+estante+'-6'+j).text('F'+(j));
        $('.box2-estantes-'+estante+'-7'+j).text('G'+(j));
        $('.box2-estantes-'+estante+'-8'+j).text('H'+(j));

        $('.box2-estantes-'+estante+'-9'+j).text('I'+(j));
        $('.box2-estantes-'+estante+'-10'+j).text('J'+(j));
        $('.box2-estantes-'+estante+'-11'+j).text('L'+(j));
        $('.box2-estantes-'+estante+'-12'+j).text('M'+(j));
        $('.box2-estantes-'+estante+'-13'+j).text('N'+(j));
        $('.box2-estantes-'+estante+'-14'+j).text('O'+(j));
        $('.box2-estantes-'+estante+'-15'+j).text('P'+(j));
        $('.box2-estantes-'+estante+'-16'+j).text('Q'+(j));
    }

    /*nomes das celulas da matriz ocupadas*/
    for (j = 1; j <= colunas; j++){
        $('.boxocupado2-estantes-'+estante+'-1'+j).text('A'+(j));
        $('.boxocupado2-estantes-'+estante+'-2'+j).text('B'+(j));
        $('.boxocupado2-estantes-'+estante+'-3'+j).text('C'+(j));
        $('.boxocupado2-estantes-'+estante+'-4'+j).text('D'+(j));
        $('.boxocupado2-estantes-'+estante+'-5'+j).text('E'+(j));
        $('.boxocupado2-estantes-'+estante+'-6'+j).text('F'+(j));
        $('.boxocupado2-estantes-'+estante+'-7'+j).text('G'+(j));
        $('.boxocupado2-estantes-'+estante+'-8'+j).text('H'+(j));

        $('.boxocupado2-estantes-'+estante+'-9'+j).text('I'+(j));
        $('.boxocupado2-estantes-'+estante+'-10'+j).text('J'+(j));
        $('.boxocupado2-estantes-'+estante+'-11'+j).text('L'+(j));
        $('.boxocupado2-estantes-'+estante+'-12'+j).text('M'+(j));
        $('.boxocupado2-estantes-'+estante+'-13'+j).text('N'+(j));
        $('.boxocupado2-estantes-'+estante+'-14'+j).text('O'+(j));
        $('.boxocupado2-estantes-'+estante+'-15'+j).text('P'+(j));
        $('.boxocupado2-estantes-'+estante+'-16'+j).text('Q'+(j));
    }

    /*cor da fonte na celula ocupada*/
    $('.boxocupado2-estantes-'+estante+'-'+boxID).css("color", "white");
});

/*cor das celulas vazias no evento mouseover*/
$('.box2-estantes').on('mouseover',function (){
    self = $(this);
    var boxID = $(this).data("id");
    var estante = $(this).data("estante");
    $('.box2-estantes-'+estante+'-'+boxID).css("color", "#009900");
    $('.box2-estantes-'+estante+'-'+boxID).css("background-color", "yellow");
});

/*cor das celulas vazias no evento mouseout*/
$('.box2-estantes').on('mouseout',function (){
    self = $(this);
    var boxID = $(this).data("id");
    var estante = $(this).data("estante");
    $('.box2-estantes-'+estante+'-'+boxID).css("background-color", "#fff");
    $('.box2-estantes-'+estante+'-'+boxID).css("boder", "1px solid #99ff99");
});