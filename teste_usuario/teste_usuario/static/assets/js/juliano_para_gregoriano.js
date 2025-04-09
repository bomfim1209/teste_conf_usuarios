$( document ).ready(function() {
    $(".dt_nasc_jul").change(function (e){
        document.getElementsByClassName('dt_nasc_greg')[0].value = jul_to_greg(e.target.value)
        document.getElementsByClassName('dt_desmame_jul')[0].value = parseInt(e.target.value) + 21
        document.getElementsByClassName('dt_desmame_greg')[0].value = jul_to_greg(e.target.value, 21)
    });

    $(".dt_nasc_greg").change(function (e){
        document.getElementsByClassName('dt_nasc_jul')[0].value = greg_to_jul(e.target.value)
        document.getElementsByClassName('dt_desmame_jul')[0].value = parseInt(e.target.value) + 21
        document.getElementsByClassName('dt_desmame_greg')[0].value = jul_to_greg(e.target.value, 21)

    });

    $(".dt_desmame_jul").change(function (e){
        document.getElementsByClassName('dt_desmame_greg')[0].value = jul_to_greg(e.target.value)
    });

    $(".dt_desmame_greg").change(function (e){
        document.getElementsByClassName('dt_desmame_jul')[0].value = greg_to_jul(e.target.value)
    });

    $(".dt_separacao_jul").change(function (e){
        document.getElementsByClassName('dt_separacao_greg')[0].value = jul_to_greg(e.target.value)
    });

    $(".dt_separacao_greg").change(function (e){
        document.getElementsByClassName('dt_separacao_jul')[0].value = greg_to_jul(e.target.value)
    });

    $(".dt_nasc_femea_casal_jul").change(function (e){
        document.getElementsByClassName('dt_nasc_femea_casal_greg')[0].value = jul_to_greg(e.target.value)
    });

    $(".dt_nasc_femea_casal_greg").change(function (e){
        document.getElementsByClassName('dt_nasc_femea_casal_jul')[0].value = greg_to_jul(e.target.value)
    });

    $(".dt_nasc_macho_casal_jul").change(function (e){
        document.getElementsByClassName('dt_nasc_macho_casal_greg')[0].value = jul_to_greg(e.target.value)
    });

    $(".dt_nasc_macho_casal_greg").change(function (e){
        document.getElementsByClassName('dt_nasc_macho_casal_jul')[0].value = greg_to_jul(e.target.value)
    });

    $(".dt_nasc_macho_pais_jul").change(function (e){
        document.getElementsByClassName('dt_nasc_macho_pais_greg')[0].value = jul_to_greg(e.target.value)
    });

    $(".dt_nasc_macho_pais_greg").change(function (e){
        document.getElementsByClassName('dt_nasc_macho_pais_jul')[0].value = greg_to_jul(e.target.value)
    });

    $(".dt_nasc_femea_pais_jul").change(function (e){
        document.getElementsByClassName('dt_nasc_femea_pais_greg')[0].value = jul_to_greg(e.target.value)
    });

    $(".dt_nasc_femea_pais_greg").change(function (e){
        document.getElementsByClassName('dt_nasc_femea_pais_jul')[0].value = greg_to_jul(e.target.value)
    });

    $(".dt_acasalamento_jul").change(function (e){
        document.getElementsByClassName('dt_acasalamento_greg')[0].value = jul_to_greg(e.target.value)
        document.getElementsByClassName('dt_separacao_jul')[0].value = parseInt(e.target.value) + 180
        document.getElementsByClassName('dt_separacao_greg')[0].value = jul_to_greg(e.target.value, 180)
    });

    $(".dt_acasalamento_greg").change(function (e){
        document.getElementsByClassName('dt_acasalamento_jul')[0].value = greg_to_jul(e.target.value)
        document.getElementsByClassName('dt_separacao_jul')[0].value = parseInt(e.target.value) + 180
        document.getElementsByClassName('dt_separacao_greg')[0].value = jul_to_greg(e.target.value, 180)
    });

    function jul_to_greg(jul_date, add_days = 0){
        var now = new Date();
        var start = new Date(now.getFullYear(), 0, 0);
        var day = 1000 * 60 * 60 * 24
        var greg = new Date(day * (parseInt(jul_date) + parseInt(add_days)) + start.getTime());

        var day = ("0" + greg.getDate()).slice(-2);
        var month = ("0" + (greg.getMonth() + 1)).slice(-2);
        var year = greg.getFullYear();

        var date_out = day +'/'+month+'/'+year;

        return date_out;
    }

    function greg_to_jul(greg_date){
        //DD-MM-AAAA to AAAA,MM,DD
        var split_date = greg_date.split("/");

        var now = new Date(split_date[2], split_date[1]-1, split_date[0]);
        var start = new Date(split_date[2], 0, 0);
        var diff = now - start;
        var oneDay = 1000 * 60 * 60 * 24;
        var day = Math.floor(diff / oneDay);
        return day;
    }

});


