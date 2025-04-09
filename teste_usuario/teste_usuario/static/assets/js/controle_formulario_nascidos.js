$("#canibalismo").change(function() {
    if (this.checked) {
        $('#qtde_canibalizados').attr("readonly", false);
        $('#qtde_canibalizados').val('1');
        //ajusta a quantidade de mortos de acordo com os canibalizados
        $('#qtde_mortos').val(1 + parseInt($('#qtde_natimortos').val()));
        //ajusta a quantidade de animais vivos
        $('#qtde_vivos').val(parseInt( $('#qtde_nascidos').val()) - parseInt( $('#qtde_mortos').val() ));
    } else {
        $('#qtde_canibalizados').attr("readonly", true);
        $('#qtde_canibalizados').val('0');
        //ajusta a quantidade de mortos de acordo com a de canibalizados
        $('#qtde_mortos').val(parseInt($('#qtde_natimortos').val()));
        //ajusta a quantidade de animais vivos
        $('#qtde_vivos').val(parseInt( $('#qtde_nascidos').val()) - parseInt( $('#qtde_mortos').val() ));
    }
});

$("#raquitismo").change(function() {
    if (this.checked) {
        $('#qtde_raquiticos').attr("readonly", false);
        $('#qtde_raquiticos').val('1');
    } else {
        $('#qtde_raquiticos').attr("readonly", true);
        $('#qtde_raquiticos').val('0');
    }
});

$("#transferencia").change(function() {
    if (this.checked) {
        $('#qtde_transferidos').attr("readonly", false);
        $('#qtde_transferidos').val('1');
    } else {
        $('#qtde_transferidos').attr("readonly", true);
        $('#qtde_transferidos').val('0');
    }
});


// Calcular quantidade de animais machos e femeas
// de acordo com o total de animais nascidos
$('#form_nascidos').on('submit', function() {
    var qtde_nascidos = $('#qtde_nascidos').val();
    var qtde_canibalizados = $('#qtde_canibalizados').val();
    var qtde_natimortos = $('#qtde_natimortos').val();
    var qtde_mortos = $('#qtde_mortos').val();
    var qtde_vivos = $('#qtde_vivos').val();
    var qtde_machos_vivos = $('#qtde_machos_vivos').val();
    var qtde_femeas_vivas = $('#qtde_femeas_vivas').val();

    if (qtde_mortos < parseInt(qtde_canibalizados) + parseInt(qtde_natimortos)) {
        alert('Quantidade de animais mortos está menor que a quantidade de canibalizados e natimortos');
        return false;
    } else if (qtde_machos_vivos > 0 || qtde_femeas_vivas > 0) {
        if (qtde_vivos != parseInt(qtde_machos_vivos) + parseInt(qtde_femeas_vivas)) {
        alert('Quantidade de animais vivos não corresponde à quantidade de machos e fêmeas vivos');
        return false;
        }
    } else if (qtde_vivos <= 0) {
        alert('Quantidade de animais vivos não pode ser negativa ou zero');
        return false;
    } else if (parseInt(qtde_machos_vivos) + parseInt(qtde_femeas_vivas) == 0) {
        alert('Não é possível registrar nascimento sem animais');
        return false;
    } else {
        return true;
    }
});

// Calcular quantidade de mortos de acordo com os canibalizados e natimortos
$('#qtde_canibalizados').on('change', function() {
    var qtde_nascidos = $('#qtde_nascidos').val();
    var qtde_canibalizados = $('#qtde_canibalizados').val();
    var qtde_natimortos = $('#qtde_natimortos').val();
    $('#qtde_mortos').val(parseInt(qtde_canibalizados) + parseInt(qtde_natimortos));
    $('#qtde_vivos').val(parseInt(qtde_nascidos) - (parseInt( $('#qtde_mortos').val() )));
});

$('#qtde_natimortos').on('change', function() {
    var qtde_nascidos = $('#qtde_nascidos').val();
    var qtde_canibalizados = $('#qtde_canibalizados').val();
    var qtde_natimortos = $('#qtde_natimortos').val();
    $('#qtde_mortos').val(parseInt(qtde_canibalizados) + parseInt(qtde_natimortos));
    $('#qtde_vivos').val(parseInt(qtde_nascidos) - (parseInt( $('#qtde_mortos').val() )));
});

$('#qtde_mortos').on('change', function() {
    var qtde_nascidos = $('#qtde_nascidos').val();
    var qtde_canibalizados = $('#qtde_canibalizados').val();
    var qtde_natimortos = $('#qtde_natimortos').val();

    $('#qtde_vivos').val(parseInt(qtde_nascidos) - (parseInt( $('#qtde_mortos').val() )));
});

$('#qtde_nascidos').on('change', function() {
    var qtde_nascidos = $('#qtde_nascidos').val();
    var qtde_canibalizados = $('#qtde_canibalizados').val();
    var qtde_natimortos = $('#qtde_natimortos').val();
    $('#qtde_mortos').val(parseInt(qtde_canibalizados) + parseInt(qtde_natimortos));
    $('#qtde_vivos').val(parseInt(qtde_nascidos) - (parseInt( $('#qtde_mortos').val() )));
});