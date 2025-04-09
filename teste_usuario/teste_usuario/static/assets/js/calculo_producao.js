$( document ).ready(function() {
    $('#btn-calculo').on('click', function() {
        self = $(this);
        var nas = parseInt($("#nas").val()); // Numero de Animais Solicitados: 600
        var ms = parseInt($("#ms").val()); // Margem de Seguranca: 20
        var fs = parseInt($("#fs").val()); // Frequencia do sexo na ninhada: 55
        var np = parseInt($("#np").val()); // Numero partos / femea: 4
        var tc = parseInt($("#tc").val()); // Tamanho da ninhada / femeas: 8
        var fd = parseInt($("#fd").val()); // Frequencia em dias da necessidade de animais: 7, 15, 30, 45, 60, 90, 120, 182
        var t = parseInt('365'); // periodo anual

        var num = parseFloat(((nas + ms)/fs)); 
        var den = parseFloat(((np + tc)/t)*fd);

        var r = parseFloat((num/den).toFixed(2)).toFixed(0);

        if (r > 0) {
            $('#resp').text(r + ' matrizes');
        } else {
            $('#resp').text('Algo está errado. Verifique todos os campos.');
        }
    });


    $("#calculo-linhagem").on('change',function (){
        self = $(this);
        var urlref = self.data("url");
        var linhagem = this.value;
        $.ajax({
           type: "GET",
           url: "//"+urlref+"/animais/calculo-linhagem/",
           dataType: 'json',
           data: {linhagem: linhagem},
           async: true,
           contentType: "application/json; charset=utf-8",
           success: function (data, textStatus, jqXHR) {
                if (data.teste == "calculo") {
                    if (data.ms >= 0) {
                        $('#resp-ms').text('MS: ' + data.ms + ' %'); // margem de seguranca
                    } else {
                        $('#resp-ms').text('MS: sem dados'); // margem de seguranca
                    }

                    if (data.machos >= 0) {
                        $('#resp-fsm').text('F%s Machos: ' + data.machos + ' %'); // freq machos ninhada
                    } else {
                        $('#resp-fsm').text('F%s Machos: sem dados'); // freq machos ninhada
                    }

                    if (data.femeas >= 0) {
                        $('#resp-fsf').text('F%s Fêmeas: ' + data.femeas + ' %'); // freq femeas ninhada
                    } else {
                        $('#resp-fsf').text('F%s Fêmeas: sem dados'); // freq femeas ninhada
                    }

                    if (data.np >= 0) {
                        $('#resp-np').text('NP: ' + data.np); // numero partos por femea
                    } else {
                        $('#resp-np').text('NP: sem dados'); // numero partos por femea
                    }

                    if (data.tc >= 0) {
                        $('#resp-tc').text('TC: ' + data.tc); // tamanho ninhada por femea
                    } else {
                        $('#resp-tc').text('TC: sem dados'); // tamanho ninhada por femea
                    }

                    $('#resp-fd').text('Fd: 30 dias'); // freq em dias
                }else{
                    //alert("Error");
                }

               },
                error: function(rs, e) {
                    //alert(rs.responseText);
                }
           });
    });
});