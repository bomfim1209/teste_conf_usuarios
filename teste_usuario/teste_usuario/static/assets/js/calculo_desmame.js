$( document ).ready(function() {
    // POST: previsao para os demais formularios com as datas de nascimento ja salvos
    $('.dt_nasc').each(function(){
        var dtnasc = new Date($(this).data("dtnasc"));
        var days = 21;
        var desmame = new Date(dtnasc.getTime() + days * 24*60*60*1000);

        if (desmame > 0) {
            $('#desmame').text('Possível data do desmame: ' + desmame.getDate() + '/' + ("0" + (desmame.getMonth() + 1)).slice(-2) + '/' + desmame.getFullYear());
        }
    });

    // PUT: previsao para os formularios de nascidos ao editar a data de nascimento
    $('.dt_nasc_novos').on('change', function(){
        var dtnasc = new Date($('.calendario').datepicker('getDate'));
        var days = 21;
        var desmame = new Date(dtnasc.getTime() + days * 24*60*60*1000);

        if (desmame > 0) {
            $('#desmame').text('Possível data do desmame: ' +  desmame.getDate() + '/' + ("0" + (desmame.getMonth() + 1)).slice(-2) + '/' + desmame.getFullYear());
        }
    });

    // previsao para os formulario de inclusao de animal ao alterar a data de nascimento
    $('.dt-nasc-animal').on('change', function(){
        var dtnasc = new Date($('.calendario-animal').datepicker('getDate'));
        var days = 21;
        var desmame = new Date(dtnasc.getTime() + days * 24*60*60*1000);

        $('#desmame-animal').text('Possível data do desmame: ' +  desmame.getDate() + '/' + ("0" + (desmame.getMonth() + 1)).slice(-2) + '/' + desmame.getFullYear());
    });

    // previsao para os formulario de edicao de animal ao alterar a data de nascimento
    $('.dt-nasc-animal-2').each(function(){
    $('.dt-nasc-animal-2').on('change', function(){
        var dtnasc = new Date($('.calendario-animal-2').datepicker('getDate'));
        var days = 21;
        var desmame = new Date(dtnasc.getTime() + days * 24*60*60*1000);

        $('.desmame-animal-2').text('Possível data do desmame: ' +  desmame.getDate() + '/' + ("0" + (desmame.getMonth() + 1)).slice(-2) + '/' + desmame.getFullYear());
    });
    });

});