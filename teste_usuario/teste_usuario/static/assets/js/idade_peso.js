// Altera os campos para preenchimento entre idade ou peso
// Formulario de insercao dos modelos para a CEUA
$( document ).ready(function() {
    var idade = $('#idade').val();
    var peso = $('#peso').val();

    //$('#idade').prop('disabled', true);

    $('#parametro').on('change', function() {
        self = $(this);
        var valor = $("#parametro option:selected").val();
        if (valor == 0) { //idade
            $('.peso-container').css('display', 'none');
            $('#idade').prop('disabled', false);
            $('#peso').val("");
            $('.idade-container').css('display', 'block');
        } else { //peso
            $('.idade-container').css('display', 'none');
            $('#idade').val("");
            $('.peso-container').css('display', 'block');
        }
    });
});