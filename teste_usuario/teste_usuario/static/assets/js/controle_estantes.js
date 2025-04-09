$( document ).ready(function() {
    // exibir estante Principal B
    $('.ladoB').on('click', function(){
        $('.estanteB').css('display','block');
        $('.estanteA').css('display','none');
    });

    // exibir estante Principal A
    $('.ladoA').on('click', function(){
        $('.estanteB').css('display','none');
        $('.estanteA').css('display','block');
    });

    // exibir estante de Transferencia B
    $('.ladoB-estanteTransferencia').on('click', function(){
        $('.estanteTransferenciaB').css('display','block');
        $('.estanteTransferenciaA').css('display','none');
    });

    // exibir estante de Transferencia A
    $('.ladoA-estanteTransferencia').on('click', function(){
        $('.estanteTransferenciaB').css('display','none');
        $('.estanteTransferenciaA').css('display','block');
    });

    // boxes ocupados outras estantes - Lado A
    $(".boxocupado-estantes").on('click',function (){
        event.preventDefault();

        self = $(this);
        var urlref = self.data("url");
        var estante = self.data("estante");
        var box = self.data("id");

        $.ajax({
           type: "GET",
           url: "//"+urlref+"/salas/exibir-ficha/",
           dataType: "json",
           data: {box: box, estante: estante},
           async: true,
           contentType: "application/json; charset=utf-8",
           success: function (data, textStatus, jqXHR) {
                if (data.teste == "ficha") {
                    //exibe area de transferencia
                    $('.area-transferencia-direita').css('display','block');
                    //esconde todas as fichas
                    $('.ficha-estantes').css('display','none');
                    //exibe apenas a ficha do box selecionado
                    $('.ficha-estantes-'+estante+'-'+box).css('display','block');
                    //oculta a matriz
                    $('.estante-transf-'+estante).css('display','none');
                    //oculta botao de visualizar Lado B
                    $('.ladoB-estanteTransferencia').css('display','none');
                    $('.ladoA-estanteTransferencia').css('display','inline-block');
                    //exibe botao para voltar
                    $('#btn-exibir-estante-transf-'+estante).css('display','inline-block');
                    //desmarca todas as celulas
                    $('.boxocupado-estantes').removeClass("inner-circle");
                    //marca a celula
                    $('.boxocupado-estantes-'+estante+'-'+box).addClass("inner-circle");
                    $('.boxocupado-estantes-'+estante+'-'+box).css("border", "none");
                    //input ID da ficha
                    $('.label-numero-ficha').css('display','block');
                    $('.label-numero-ficha').text('Gaiola com Ficha Nº '+ data.numero_ficha + '/' + data.ano_ficha);
                    $('.numero-ficha').val(data.ficha);
                    //input Slug da ficha
                    $('.slug-ficha').val(data.slug_ficha);
                }else{
                    //alert("Error");
                }
           },
           error: function(rs, e) {
               //alert(rs.responseText);
           }
        });
    });

    // boxes ocupados outras estantes - Lado B
    $(".boxocupado2-estantes").on('click',function (){
        event.preventDefault();

        self = $(this);
        var urlref = self.data("url");
        var estante = self.data("estante");
        var box = self.data("id");

        $.ajax({
           type: "GET",
           url: "//"+urlref+"/salas/exibir-ficha/",
           dataType: "json",
           data: {box: box, estante: estante},
           async: true,
           contentType: "application/json; charset=utf-8",
           success: function (data, textStatus, jqXHR) {
                if (data.teste == "ficha") {
                    //exibe area de transferencia
                    $('.area-transferencia-direita-2').css('display','block');
                    //esconde todas as fichas
                    $('.ficha-estantes-2').css('display','none');
                    //exibe apenas a ficha do box selecionado
                    $('.ficha-estantes-2-'+estante+'-'+box).css('display','block');
                    //oculta a matriz
                    $('.estante-transf-2-'+estante).css('display','none');
                    //oculta botao de visualizar Lado A
                    $('.ladoA-estanteTransferencia').css('display','none');
                    $('.ladoB-estanteTransferencia').css('display','inline-block');
                    //exibe botao para voltar
                    $('#btn-exibir-estante-transf-2-'+estante).css('display','inline-block');
                    //desmarca todas as celulas
                    $('.boxocupado2-estantes').removeClass("inner-circle");
                    //marca a celula
                    $('.boxocupado2-estantes-'+estante+'-'+box).addClass("inner-circle");
                    $('.boxocupado2-estantes-'+estante+'-'+box).css("border", "none");
                    //input ID da ficha
                    $('.label-numero-ficha').css('display','block');
                    $('.label-numero-ficha').text('Gaiola com Ficha Nº '+ data.numero_ficha + '/' + data.ano_ficha);
                    $('.numero-ficha').val(data.ficha);
                    //input Slug da ficha
                    $('.slug-ficha').val(data.slug_ficha);
                }else{
                    //alert("Error");
                }
           },
           error: function(rs, e) {
               //alert(rs.responseText);
           }
        });
    });

    // botao para voltar a exibir matriz
    $(".btn-exibir-matriz").on('click',function (){
        event.preventDefault();

        self = $(this);
        var urlref = self.data("url");
        var estante = self.data("estante");

        $.ajax({
           type: "GET",
           url: "//"+urlref+"/salas/exibir-matriz/",
           dataType: "json",
           data: {estante: estante},
           async: true,
           contentType: "application/json; charset=utf-8",
           success: function (data, textStatus, jqXHR) {
                if (data.teste == "matriz") {
                    //esconde todas as fichas
                    $('.ficha-estantes').css('display','none');
                    //exibe a matriz
                    $('.estante-transf-'+estante).css('display','block');
                    //exibe botao lado B
                    $('.ladoB-estanteTransferencia').css('display','inline-block');
                    //exibe botao para voltar
                    $('#btn-exibir-estante-transf-'+estante).css('display','none');
                    //desmarca todas as celulas
                    $('.boxocupado-estantes').removeClass("inner-circle");
                    //oculta label com numero da gaiola
                    $('.label-numero-ficha').css('display','none');
                    //oculta area de transferencia
                    $('.area-transferencia-direita').css('display','none');
                    $('.area-transferencia-direita-2').css('display','none');
                }else{
                    //alert("Error");
                }
           },
           error: function(rs, e) {
               //alert(rs.responseText);
           }
        });
    });

    // botao para voltar a exibir matriz
    $(".btn-exibir-matriz-2").on('click',function (){
        event.preventDefault();

        self = $(this);
        var urlref = self.data("url");
        var estante = self.data("estante");

        $.ajax({
           type: "GET",
           url: "//"+urlref+"/salas/exibir-matriz/",
           dataType: "json",
           data: {estante: estante},
           async: true,
           contentType: "application/json; charset=utf-8",
           success: function (data, textStatus, jqXHR) {
                if (data.teste == "matriz") {
                    //esconde todas as fichas
                    $('.ficha-estantes-2').css('display','none');
                    //exibe a matriz
                    $('.estante-transf-2-'+estante).css('display','block');
                    //exibe botao lado B
                    $('.ladoA-estanteTransferencia').css('display','inline-block');
                    //exibe botao para voltar
                    $('#btn-exibir-estante-transf-2-'+estante).css('display','none');
                    //desmarca todas as celulas
                    $('.boxocupado2-estantes').removeClass("inner-circle");
                    //oculta label com numero da gaiola
                    $('.label-numero-ficha').css('display','none');
                    //oculta area de transferencia
                    $('.area-transferencia-direita').css('display','none');
                    $('.area-transferencia-direita-2').css('display','none');
                }else{
                    //alert("Error");
                }
           },
           error: function(rs, e) {
               //alert(rs.responseText);
           }
        });
    });

    // cada icone de animal no evento MouseDown quando solto no Box
    $('.icone-animal').on('mousedown',function () {
        self = $(this);
        var urlref = self.data("url");
        var animal = self.data("animal");
        var ficha_animal = self.data("ficha");
        $('.url-reference').val(urlref); //joga a URL no input
        $('.id-animal').val(animal); //joga o ID Animal no input
        $('.id-ficha-animal').val(ficha_animal); //joga o ID da Ficha de Origem do Animal no input
    });

});
