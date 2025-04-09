$( document ).ready(function() {
    //Exibir laboratorios de acordo com a unidade
    $("#unidades").on('change',function (){
        self = $(this);
        var urlref = self.data("url");
        var unidade = $("#unidades option:selected").val();

        $.ajax({
            type: "GET",
            url: "//"+urlref+"/licencas/filtrar-laboratorios/",
            dataType: "json",
            data: {unidade: unidade},
            async: true,
            contentType: "application/json; charset=utf-8",
            success: function (data, textStatus, jqXHR) {
                if (data.teste == "laboratorios") {
                    let i;
                    //habilita o seletor de laboratorios
                    $('#laboratorios').attr("disabled", false);
                    //limpa o seletor
                    $('#laboratorios').empty();
                    //exibe nomes no seletor de laboratorios
                    for(i=0; i < data.laboratorios.length; i++){
                        $('#laboratorios').append($('<option>').val(data.ids[i]).text(data.laboratorios[i]));
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

    // Exibir pesquisadores de acordo com laboratorio
	$("#laboratorios").on('change',function (){
        self = $(this);
        var urlref = self.data("url");
        var laboratorio = $("#laboratorios option:selected").val();

        $.ajax({
           type: "GET",
           url: "//"+urlref+"/licencas/exibir-pesquisadores/",
           dataType: "json",
           data: {laboratorio: laboratorio},
           async: true,
           contentType: "application/json; charset=utf-8",
           success: function (data, textStatus, jqXHR) {
                if (data.teste == "pesquisadores") {
                    //habilita o seletor de pesquisadores
                    $('#pesquisadores').attr("disabled", false);
                    //limpa o seletor
                    $('#pesquisadores').empty();
                    //exibe nomes no seletor de pesquisadores
                    for(i=0; i < data.pesquisadores.length; i++){
                    $('#pesquisadores').append($('<option>').val(data.ids[i]).text(data.pesquisadores[i]));
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

    //Remover documento da CEUA no form de cadastro
    $(".remover-ceua").on('click',function (){
        self = $(this);
        var urlref = self.data("url");
        var licenca = self.data("id");

        $.ajax({
           type: "GET",
           url: "//"+urlref+"/licencas/remover-ceua/",
           dataType: "json",
           data: {licenca: licenca},
           async: true,
           contentType: "application/json; charset=utf-8",
           success: function (data, textStatus, jqXHR) {
                if (data.teste == "ceua-removida") {
                    location.reload();
                }else{
                    //alert("Error");
                }
           },
           error: function(rs, e) {
               //alert(rs.responseText);
           }
        });
    });

    //Alterar input file padrao
    $('#upload-ceua').click(function(){
        $('#input-ceua').click();
    });
    $('#input-ceua').change(function() {
      $('#selected-ceua').text($('#input-ceua')[0].files[0].name);
    });

    //Enviar CEUA para o ICTB
    $(".enviar-ictb").on('click',function (){
        self = $(this);
        var urlref = self.data("url");
        var licenca = self.data("id");
        var dt_envio_ictb = $("#dt_envio_ictb").val();

        $.ajax({
           type: "GET",
           url: "//"+urlref+"/licencas/enviar-ictb/",
           dataType: "json",
           data: {licenca: licenca, dt_envio_ictb: dt_envio_ictb},
           async: true,
           contentType: "application/json; charset=utf-8",
           success: function (data, textStatus, jqXHR) {
                if (data.teste == "ceua-enviada-ictb") {
                    location.reload();
                }else{
                    //alert("Error");
                }
           },
           error: function(rs, e) {
               //alert(rs.responseText);
           }
        });
    });

    //Liberar CEUA para solicitacoes
    $(".liberar-ceua").on('click',function (){
        self = $(this);
        var urlref = self.data("url");
        var licenca = self.data("id");
        var dt_liberacao_ceua = $("#dt_liberacao_ceua").val();

        $.ajax({
           type: "GET",
           url: "//"+urlref+"/licencas/liberar-ceua/",
           dataType: "json",
           data: {licenca: licenca, dt_liberacao_ceua: dt_liberacao_ceua},
           async: true,
           contentType: "application/json; charset=utf-8",
           success: function (data, textStatus, jqXHR) {
                if (data.teste == "ceua-liberada") {
                    location.reload();
                }else{
                    //alert("Error");
                }
           },
           error: function(rs, e) {
               //alert(rs.responseText);
           }
        });
    });

    //Devolver CEUA para o RT para revisao de nao conformidades
    $(".devolver-ceua").on('click',function (){
        self = $(this);
        var urlref = self.data("url");
        var licenca = self.data("id");
        var justificativa = $("#justificativa").val();
        var dt_devolucao_ceua = $("#dt_devolucao_ceua").val();

        $.ajax({
           type: "GET",
           url: "//"+urlref+"/licencas/devolver-ceua/",
           dataType: "json",
           data: {licenca: licenca, dt_devolucao_ceua: dt_devolucao_ceua, justificativa: justificativa},
           async: true,
           contentType: "application/json; charset=utf-8",
           success: function (data, textStatus, jqXHR) {
                if (data.teste == "ceua-devolvida") {
                    location.reload();
                }else{
                    //alert("Error");
                }
           },
           error: function(rs, e) {
               //alert(rs.responseText);
           }
        });
    });

    // Confirmar Pedido de Animais
    $(".confirmar-pedido").on('click',function (){
        self = $(this);
        var urlref = self.data("url");
        var modelo = self.data("modelo");

        $.ajax({
           type: "GET",
           url: "//"+urlref+"/modelos/confirmar-pedido/",
           dataType: "json",
           data: {modelo: modelo},
           async: true,
           contentType: "application/json; charset=utf-8",
           success: function (data, textStatus, jqXHR) {
                if (data.teste == "pedido-confirmado") {
                    location.reload();
                }else{
                    //alert("Error");
                }
           },
           error: function(rs, e) {
               //alert(rs.responseText);
           }
        });
    });

    // ADITIVOS na CEUA
    //Enviar Aditivo para o ICTB
    $(".enviar-aditivo").on('click',function (){
        self = $(this);
        var urlref = self.data("url");
        var aditivo = self.data("aditivo");
        var licenca = self.data("licenca");
        var dt_envio_aditivo = $("#dt_envio_aditivo").val();

        $.ajax({
           type: "GET",
           url: "//"+urlref+"/licencas/enviar-aditivo/",
           dataType: "json",
           data: {aditivo: aditivo, licenca: licenca, dt_envio_aditivo:dt_envio_aditivo},
           async: true,
           contentType: "application/json; charset=utf-8",
           success: function (data, textStatus, jqXHR) {
                if (data.teste == "aditivo-enviado") {
                    location.reload();
                }else{
                    //alert("Error");
                }
           },
           error: function(rs, e) {
               //alert(rs.responseText);
           }
        });
    });

    //Liberar Aditivo para solicitacoes
    $(".liberar-aditivo").on('click',function (){
        self = $(this);
        var urlref = self.data("url");
        var aditivo = self.data("aditivo");
        var licenca = self.data("licenca");
        var dt_liberacao_aditivo = $("#dt_liberacao_aditivo").val();

        $.ajax({
           type: "GET",
           url: "//"+urlref+"/licencas/liberar-aditivo/",
           dataType: "json",
           data: {aditivo: aditivo, licenca:licenca, dt_liberacao_aditivo:dt_liberacao_aditivo},
           async: true,
           contentType: "application/json; charset=utf-8",
           success: function (data, textStatus, jqXHR) {
                if (data.teste == "aditivo-liberado") {
                    location.reload();
                }else{
                    //alert("Error");
                }
           },
           error: function(rs, e) {
               //alert(rs.responseText);
           }
        });
    });

    //Devolver Aditivo para o RT para revisao de nao conformidades
    $(".devolver-aditivo").on('click',function (){
        self = $(this);
        var urlref = self.data("url");
        var aditivo = self.data("aditivo");
        var licenca = self.data("licenca");
        var dt_devolucao_aditivo = $("#dt_devolucao_aditivo").val();
        var justificativa = $("#justificativa").val();

        $.ajax({
           type: "GET",
           url: "//"+urlref+"/licencas/devolver-aditivo/",
           dataType: "json",
           data: {aditivo: aditivo, licenca: licenca, dt_devolucao_aditivo: dt_devolucao_aditivo, justificativa: justificativa},
           async: true,
           contentType: "application/json; charset=utf-8",
           success: function (data, textStatus, jqXHR) {
                if (data.teste == "aditivo-devolvido") {
                    location.reload();
                }else{
                    //alert("Error");
                }
           },
           error: function(rs, e) {
               //alert(rs.responseText);
           }
        });
    });

    //Remover documento Aditivo no formulario da CEUA
    $(".remover-aditivo-ceua").on('click',function (){
        self = $(this);
        var urlref = self.data("url");
        var aditivo = self.data("id");

        $.ajax({
           type: "GET",
           url: "//"+urlref+"/licencas/remover-aditivo-ceua/",
           dataType: "json",
           data: {aditivo: aditivo},
           async: true,
           contentType: "application/json; charset=utf-8",
           success: function (data, textStatus, jqXHR) {
                if (data.teste == "aditivo-removido") {
                    location.reload();
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