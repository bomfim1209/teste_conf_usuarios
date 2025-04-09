$( document ).ready(function() {
    $('.data_entrega').on('blur', function(){
        var dia = (new Date()).getDate();
        var mes = (new Date()).getMonth()+1;
        var ano = (new Date()).getFullYear();
        var dtHoje = new Date(mes+"/"+dia+"/"+ ano);
        var days = 14;
        var prazo_minimo_entrega = new Date(dtHoje.getTime() + days * 24*60*60*1000);
        var data_entrega = new Date($('.data_entrega').datepicker('getDate'));

        // calcula diferenca entre datas
        var Diferenca_Datas = data_entrega.getTime() - dtHoje.getTime();

        // calcula numero de dias entre datas
        var Diferenca_Dias = Diferenca_Datas / (1000 * 3600 * 24);

        $('#prazo_minimo_entrega').text('Prazo mínimo para entrega: ' +  prazo_minimo_entrega.getDate() + '/' + ("0" + (prazo_minimo_entrega.getMonth() + 1)).slice(-2) + '/' + prazo_minimo_entrega.getFullYear());
        $('#data_minima').val(prazo_minimo_entrega.getDate() + '/' + ("0" + (prazo_minimo_entrega.getMonth() + 1)).slice(-2) + '/' + prazo_minimo_entrega.getFullYear());
    });


    // Calcular quantidade minimo de dias para a entrega de animais
    $('#form_modelo').on('submit', function() {
        var dia = (new Date()).getDate();
        var mes = (new Date()).getMonth()+1;
        var ano = (new Date()).getFullYear();
        var dtHoje = new Date(mes+"/"+dia+"/"+ ano);
        var days = 14;
        var prazo_minimo_entrega = new Date(dtHoje.getTime() + days * 24*60*60*1000);
        var data_entrega = new Date($('.data_entrega').datepicker('getDate'));

        // calcula diferenca entre datas
        var Diferenca_Datas = data_entrega.getTime() - dtHoje.getTime();

        // calcula numero de dias entre datas
        var Diferenca_Dias = Diferenca_Datas / (1000 * 3600 * 24);

        if (data_entrega.getTime() != '') {
            if (Diferenca_Dias < parseInt(14)) {
                alert('Período para a entrega deve ser de pelo menos 14 dias.');
                return false;
            } else {
                return true;
            }
        } else {
            $('#data_minima').val(prazo_minimo_entrega.getDate() + '/' + ("0" + (prazo_minimo_entrega.getMonth() + 1)).slice(-2) + '/' + prazo_minimo_entrega.getFullYear());
            return true;
        }
    });
});