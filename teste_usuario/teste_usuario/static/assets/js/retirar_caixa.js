//Retirar a caixa com casal para desocupar o Box
$( document ).ready(function() {
    $(".retirar-caixa").on('click',function (){
        self = $(this);
        var urlref = self.data("url");
        var ficha = self.data("ficha");
        var celula = self.data("celula");
        $.ajax({
           type: "GET",
           url: "//"+urlref+"/salas/retirar-caixa/",
           dataType: 'json',
           data: {ficha: ficha},
           async: true,
           contentType: "application/json; charset=utf-8",
           success: function (data, textStatus, jqXHR) {
                if (data.teste == "caixa-retirada") {
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