$(document).ready(function() {
    $('.tipoAcasalamento').on('change', function (e) {
        var optionSelected = $("option:selected", this);
        var valueSelected = this.value;

        //valor 2 = Femea 2
        if (valueSelected == 2) {
            $('.grupo-femea-2').show();
            $('.grupo-femea-3').hide();
        //valor 3 = Femea 3
        } else if (valueSelected == 3) {
            $('.grupo-femea-2').show();
            $('.grupo-femea-3').show();
        //valor 1 apenas a Femea 1
        } else {
            $('.grupo-femea-2').hide();
            $('.grupo-femea-3').hide();
        }
    });

    $('.colonia').on('change', function () {
        var optionSelected = $("option:selected", this);
        var colonia = this.value;
        if (colonia == 1) { //colonia de fundacao
            $('.geracao').attr('readonly', false);
            $('.geracao').attr('display', 'block');
            $('.geracao_label').text('');
        } else {
            $('.geracao').attr('readonly', true);
            $('.geracao').val('');
            $('.geracao').attr('display', 'none');
            $('.geracao_label').text('Somente se aplica à Colônia de Fundação');
        }
    });

    $(".detalhar-ficha").change(function() {
        if(this.checked) {
            $('#animais-tab').css('display','block');
            $('#nascidos-tab').css('display','block');
            $('#transferidos-tab').css('display','block');
            $('#transferidos-tab').css('display','block');
            $('#transferidos-outbox-tab').css('display','block');
            $('#desmame-tab').css('display','block');
        } else {
            $('#animais-tab').css('display','none');
            $('#nascidos-tab').css('display','none');
            $('#transferidos-tab').css('display','none');
            $('#transferidos-outbox-tab').css('display','none');
            $('#desmame-tab').css('display','none');
        }
    });
});
