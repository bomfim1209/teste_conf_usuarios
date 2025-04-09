/*controle das celulas ocupadas com gaiolas*/
$( document ).ready(function() {
    $('.box2').each( function() {
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
                    $('.box2-'+data.box).css("display", "none");
                    $('.boxocupado2-'+data.box).css("display", "block");
                    if (celula == data.box){
                        $('.boxocupado2').css("border", "none");
                        $('.boxocupado2').removeClass("inner-circle");
                        $('.boxocupado2-'+data.box).addClass("inner-circle");
                        $('.boxocupado2-'+data.box).addClass("animated-circle");
                    }
                    if (data.colonia == 1) {
                        $('.boxocupado2-'+data.box).css("background-color", "#48abf7");
                    } else if (data.colonia == 2) {
                        $('.boxocupado2-'+data.box).css("background-color", "#ffad46");
                    } else if (data.colonia == 3) {
                        $('.boxocupado2-'+data.box).css("background-color", "#31ce36");
                    } else {
                        $('.boxocupado2-'+data.box).css("background-color", "#f25961");
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

    $('.box2-estantes').each( function() {
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
                    $('.box2-estantes-'+estante+'-'+data.box).css("display", "none");
                    $('.boxocupado2-estantes-'+estante+'-'+data.box).css("display", "block");
                    $('.boxocupado2-estantes-'+estante+'-'+data.box).css("background-color", "red");
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
