// Selecionar estantes de acordo com a estante
$( document ).ready(function() {
    $(".dropbox-estante").on('change',function (){
        self = $(this);
        var urlref = self.data("url");
        var estante = this.value;
        $.ajax({
           type: "GET",
           url: "//"+urlref+"/salas/selecionar-estante/",
           dataType: 'json',
           data: {estante: estante},
           async: true,
           contentType: "application/json; charset=utf-8",
           success: function (data, textStatus, jqXHR) {
                if (data.teste == "estante_selecionada") {
                    $('.estantes').css('display','none'); // oculta todas as estantes
                    $('.estante-'+estante).css('display','block'); // exibe apenas a estante de acordo com a ID
                }else{
                    //alert("Error");
                }

               },
                error: function(rs, e) {
                    //alert(rs.responseText);
                }
           });
    });

    // droplist de salas da area de transferencia
    $(".dropbox-salas").on('change',function (){
        self = $(this);
        var urlref = self.data("url");
        var sala = this.value;
        $.ajax({
           type: "GET",
           url: "//"+urlref+"/salas/selecionar-estantes/",
           dataType: 'json',
           data: {sala: sala},
           async: true,
           contentType: "application/json; charset=utf-8",
           success: function (data, textStatus, jqXHR) {
                if (data.teste == "sala_selecionada") {
                    //limpa o seletor
                    $('.dropbox-estantes').empty();
                    $('.dropbox-estantes').append($('<option selected>').text('Escolha a estante '));
                    //exibe estantes no seletor de estantes
                    for(i=0; i < data.estantes.length; i++){
                    $('.dropbox-estantes').append($('<option>').val(data.ids[i]).text('Estante '+data.estantes[i]));
                    }
                }else{
                    //alert("Error");
                }

               },
                error: function(rs, e) {
                    //alert(rs.responseText);
                }
           });
    });


    // droplist de estantes da area de transferencia
    $(".dropbox-estantes").on('change',function (){
        self = $(this);
        var urlref = self.data("url");
        var estante = this.value;
        $.ajax({
           type: "GET",
           url: "//"+urlref+"/salas/selecionar-estante/",
           dataType: 'json',
           data: {estante: estante},
           async: true,
           contentType: "application/json; charset=utf-8",
           success: function (data, textStatus, jqXHR) {
                if (data.teste == "estante_selecionada") {
                    $('.estantes').css('display','none'); // oculta todas as estantes
                    $('.estante-'+estante).css('display','block'); // exibe apenas a estante de acordo com a ID
                    $('.label-numero-ficha').css('display','none');
                    $('.area-transferencia-direita').css('display','none');
                    $('.area-transferencia-direita-2').css('display','none');
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