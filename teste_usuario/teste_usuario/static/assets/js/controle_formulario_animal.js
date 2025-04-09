$(document).ready(function() {
    // Controle do checkbox Lactencia e Gravidez conforme Sexo
    $('.sexo').on('change', function(){
        var sexo = $(".sexo option:selected").val();
        if (sexo == 1) { // se macho
            $('.gravida').css('display','none');
        } else { // se femea
            $('.gravida').css('display','block');
        }
    });

    $('.canibalismo').click(function() {
        if($('.canibalismo').is(':checked')){
            $('.morto').attr('checked',true);
            $('.obs-morte').css('display','block');
            $('.canibalismo').attr('checked',false);
        } else {
            $('.morto').attr('checked',false);
            $('.obs-morte').css('display','none');
        }
    });

    $('.natimorto').click(function() {
        if($('.natimorto').is(':checked')){
            $('.morto').attr('checked',true);
            $('.obs-morte').css('display','block');
            $('.natimorto').attr('checked',false);
        } else {
            $('.morto').attr('checked',false);
            $('.obs-morte').css('display','none');
        }
    });

    $('.morto').click(function() {
        if($('.morto').is(':checked')){
            $('.obs-morte').css('display','block');
            $('.morto').attr('checked',false);
        } else {
            $('.obs-morte').css('display','none');
        }
    });

    $('.doente').click(function() {
        if($('.doente').is(':checked')){
            $('.obs-doenca').css('display','block');
            $('.doente').attr('checked',false);
        } else {
            $('.obs-doenca').css('display','none');
        }
    });

    $('.outras-causas').click(function() {
        if($('.outras-causas').is(':checked')){
            $('.obs-outras-causas').css('display','block');
            $('.outras-causas').attr('checked',false);
        } else {
            $('.obs-outras-causas').css('display','none');
        }
    });

});
