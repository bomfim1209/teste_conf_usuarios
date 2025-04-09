/*controle das celulas ocupadas com gaiolas*/
$( document ).ready(function() {
    $('.box').each( function() {
        self = $(this);
        var urlref = self.data("url");
        var estante = self.data("estante");
        var celula = self.data("celula");
        var box = self.data("id");

        $.ajax({
           type: "GET",
           url: "//"+urlref+"/salas/verificar-box/",
           dataType: "json",
           data: {box: box, estante: estante},
           async: true,
           contentType: "application/json; charset=utf-8",
           success: function (data, textStatus, jqXHR) {
                if (data.teste == "boxocupado") {
                    $('.box-'+data.box).css("display", "none");
                    $('.boxocupado-'+data.box).css("display", "block");
                    //Verifica em que celula a ficha se encontra
                    if (celula == data.box){
                        $('.boxocupado').css("border", "none");
                        $('.boxocupado').removeClass("inner-circle");
                        $('.boxocupado-'+data.box).addClass("inner-circle");
                        $('.boxocupado-'+data.box).addClass("animated-circle");
                    }
                    //Verifica o tipo de colonia
                    if (data.colonia == 1) {
                        $('.boxocupado-'+data.box).css("background-color", "#48abf7");
                    } else if (data.colonia == 2) {
                        $('.boxocupado-'+data.box).css("background-color", "#ffad46");
                    } else if (data.colonia == 3) {
                        $('.boxocupado-'+data.box).css("background-color", "#31ce36");
                    } else {
                        $('.boxocupado-'+data.box).css("background-color", "#f25961");
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

    $('.box-estantes').each( function() {
        self = $(this);
        var urlref = self.data("url");
        var estante = self.data("estante");
        var box = self.data("id");

        $.ajax({
           type: "GET",
           url: "//"+urlref+"/salas/verificar-box/",
           dataType: "json",
           data: {box: box, estante: estante},
           async: true,
           contentType: "application/json; charset=utf-8",
           success: function (data, textStatus, jqXHR) {
                if (data.teste == "boxocupado") {
                    $('.box-estantes-'+estante+'-'+data.box).css("display", "none");
                    $('.boxocupado-estantes-'+estante+'-'+data.box).css("display", "block");
                    if (data.colonia == 1) {
                        $('.boxocupado-estantes-'+estante+'-'+data.box).css("background-color", "#48abf7");
                    } else if (data.colonia == 2) {
                        $('.boxocupado-estantes-'+estante+'-'+data.box).css("background-color", "#ffad46");
                    } else if (data.colonia == 3) {
                        $('.boxocupado-estantes-'+estante+'-'+data.box).css("background-color", "#31ce36");
                    } else {
                        $('.boxocupado-estantes-'+estante+'-'+data.box).css("background-color", "#f25961");
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
});
