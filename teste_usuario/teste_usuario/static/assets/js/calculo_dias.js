$( document ).ready(function() {
    $('.dt_nasc_macho').each(function(){
        var dia = (new Date()).getDate();
        var mes = (new Date()).getMonth()+1;
        var ano = (new Date()).getFullYear();
        var dtAtual = new Date(mes+"/"+dia+"/"+ ano);
        var dtnascmacho = new Date($(this).data("dtnascmacho"));

        // To calculate the time difference of two dates
        var Diferenca_Datas_Macho = dtAtual.getTime() - dtnascmacho.getTime();

        // To calculate the no. of days between two dates
        var Diferenca_Dias_Macho = Diferenca_Datas_Macho / (1000 * 3600 * 24);

        $('#idade_macho').text('Idade: ' + Diferenca_Dias_Macho + ' dias');
    });

    $('.dt_nasc_femea').each(function(){
        var dia = (new Date()).getDate();
        var mes = (new Date()).getMonth()+1;
        var ano = (new Date()).getFullYear();
        var dtAtual = new Date(mes+"/"+dia+"/"+ ano);
        var dtnascfemea = new Date($(this).data("dtnascfemea"));

        // To calculate the time difference of two dates
        var Diferenca_Datas_Femea = dtAtual.getTime() - dtnascfemea.getTime();

        // To calculate the no. of days between two dates
        var Diferenca_Dias_Femea = Diferenca_Datas_Femea / (1000 * 3600 * 24);

        $('#idade_femea').text('Idade: ' + Diferenca_Dias_Femea + ' dias');
    });

    $('.dt_nasc_femea_2').each(function(){
        var dia = (new Date()).getDate();
        var mes = (new Date()).getMonth()+1;
        var ano = (new Date()).getFullYear();
        var dtAtual = new Date(mes+"/"+dia+"/"+ ano);
        var dtnascfemea2 = new Date($(this).data("dtnascfemea2"));

        // To calculate the time difference of two dates
        var Diferenca_Datas_Femea_2 = dtAtual.getTime() - dtnascfemea2.getTime();

        // To calculate the no. of days between two dates
        var Diferenca_Dias_Femea_2 = Diferenca_Datas_Femea_2 / (1000 * 3600 * 24);

        $('#idade_femea_2').text('Idade: ' + Diferenca_Dias_Femea_2 + ' dias');
    });

    $('.dt_nasc_femea_3').each(function(){
        var dia = (new Date()).getDate();
        var mes = (new Date()).getMonth()+1;
        var ano = (new Date()).getFullYear();
        var dtAtual = new Date(mes+"/"+dia+"/"+ ano);
        var dtnascfemea3 = new Date($(this).data("dtnascfemea3"));

        // To calculate the time difference of two dates
        var Diferenca_Datas_Femea_3 = dtAtual.getTime() - dtnascfemea3.getTime();

        // To calculate the no. of days between two dates
        var Diferenca_Dias_Femea_3 = Diferenca_Datas_Femea_3 / (1000 * 3600 * 24);

        $('#idade_femea_3').text('Idade: ' + Diferenca_Dias_Femea_3 + ' dias');
    });

    //Calendario do form para incluir novo animal
    /*$('.dt-nasc-animal').on('change', function(){
        var dia = (new Date()).getDate();
        var mes = (new Date()).getMonth()+1;
        var ano = (new Date()).getFullYear();
        var dtAtual = new Date(mes+"/"+dia+"/"+ ano);
        var dtnasc = new Date($(this).datepicker('getDate'));

        // Calcula diferenca entre as datas atual e de nascimento
        var Diferenca_Datas = dtAtual.getTime() - dtnasc.getTime();

        // Calcula o numero de dias entre as datas
        var Diferenca_Dias = Diferenca_Datas / (1000 * 3600 * 24);

        $('.idade-animal').val(Diferenca_Dias);
        $('.idade-animal').text(Diferenca_Dias);
    }); */

    //Calendario do form para edicao de animal
    /*$('.dt-nasc-animal-2').on('change', function(){
        var dia = (new Date()).getDate();
        var mes = (new Date()).getMonth()+1;
        var ano = (new Date()).getFullYear();
        var dtAtual = new Date(mes+"/"+dia+"/"+ ano);
        var dtnasc = new Date($(this).datepicker('getDate'));

        // Calcula diferenca entre as datas atual e de nascimento
        var Diferenca_Datas = dtAtual.getTime() - dtnasc.getTime();

        // Calcula o numero de dias entre as datas
        var Diferenca_Dias = Diferenca_Datas / (1000 * 3600 * 24);

        $('.idade-animal-2').val(Diferenca_Dias);
        $('.idade-animal-2').text(Diferenca_Dias);
    }); */
});