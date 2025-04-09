// conversao nos forms Novos Nascidos e Editar Nascidos de data Gragoriana para numero Juliano
$('.dt_nasc_novos').on('change', function(){
    var currentDate = new Date();
    var date1 = new Date(currentDate.getFullYear(), 0, 1);
    var date2 = new Date($('.dt_nasc').datepicker('getDate'));
    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    $('.dt_nasc_juliano').text(Difference_In_Days+1);
});

$('.dt_desmame').on('change', function(){
    var currentDate = new Date();
    var date1 = new Date(currentDate.getFullYear(), 0, 1);
    var date2 = new Date($('.dt_desmame').datepicker('getDate'));
    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    $('.dt_desmame_juliano').text(Difference_In_Days+1);
});


// conversao no modal Incluir Animal para numero Juliano
$('.dt-nasc-animal').on('change', function(){
    var currentDate = new Date();
    var date1 = new Date(currentDate.getFullYear(), 0, 1);
    var date2 = new Date($('.dt-nasc-animal').datepicker('getDate'));
    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    $('.dt_nasc_juliano').text(Difference_In_Days+1);
});

$('.dt-desmame-animal').on('change', function(){
    var currentDate = new Date();
    var date1 = new Date(currentDate.getFullYear(), 0, 1);
    var date2 = new Date($('.dt-desmame-animal').datepicker('getDate'));
    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    $('.dt_desmame_juliano').text(Difference_In_Days+1);
});


// conversao no form Ficha do Animal para numero Juliano
$('.dt-nasc-animal-2').on('change', function(){
    var currentDate = new Date();
    var date1 = new Date(currentDate.getFullYear(), 0, 1);
    var date2 = new Date($('.dt-nasc-animal-2').datepicker('getDate'));
    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    $('.dt_nasc_juliano').text(Difference_In_Days+1);
});

$('.dt-desmame-animal-2').on('change', function(){
    var currentDate = new Date();
    var date1 = new Date(currentDate.getFullYear(), 0, 1);
    var date2 = new Date($('.dt-desmame-animal-2').datepicker('getDate'));
    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    $('.dt_desmame_juliano').text(Difference_In_Days+1);
});


// conversao no form de Editar Ficha
$('.dt_acasalamento_out').on('change', function() {
    let currentDate = new Date();
    let date1 = new Date(currentDate.getFullYear(), 0, 1);
    let date2 = new Date($('.dt_acasalamento_out').datepicker('getDate'));
    let Difference_In_Time = date2.getTime() - date1.getTime();
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    $('.dt_acasalamento_in').text(Difference_In_Days+1);
});

$('.dt-separacao').on('change', function(){
    let currentDate = new Date();
    let date1 = new Date(currentDate.getFullYear(), 0, 1);
    let date2 = new Date($('.dt-separacao').datepicker('getDate'));
    let Difference_In_Time = date2.getTime() - date1.getTime();
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    $('.dt_separacao_juliano').text(Difference_In_Days+1);
});