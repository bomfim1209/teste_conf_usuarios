//Retirar a caixa com casal para desocupar o Box
$( document ).ready(function() {
    $(".reordenar-estante").on('click',function (){
        self = $(this);
        var urlref = self.data("url");
        var estante = self.data("estante");
        $.ajax({
           type: "GET",
           url: "//"+urlref+"/salas/reordenar-estante/",
           dataType: 'json',
           data: {estante: estante},
           async: true,
           contentType: "application/json; charset=utf-8",
           success: function (data, textStatus, jqXHR) {
                if (data.teste == "estante-reordenada") {
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