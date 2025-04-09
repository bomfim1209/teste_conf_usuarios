$( document ).ready(function() {
	$(".boxocupado").on('click',function (){
        event.preventDefault();

        self = $(this);
        var urlref = self.data("url");
        var estante = self.data("estante");
        var box = self.data("id");

        $.ajax({
           type: "GET",
           url: "//"+urlref+"/salas/exibir-ficha/",
           dataType: "json",
           data: {box: box, estante: estante},
           async: true,
           contentType: "application/json; charset=utf-8",
           success: function (data, textStatus, jqXHR) {
                if (data.teste == "ficha") {
                    //esconde todas as fichas
                    $('.ficha').css('display','none');
                    //exibe apenas a ficha do box selecionado
                    $('.ficha-'+box).css('display','block');
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
