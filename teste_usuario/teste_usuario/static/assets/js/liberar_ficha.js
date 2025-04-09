// Selecionar estantes de acordo com a estante
$( document ).ready(function() {
    $(".liberar-ficha").on('click',function (){
        self = $(this);
        var urlref = self.data("url");
        var ficha = self.data("id");
        $.ajax({
           type: "GET",
           url: "//"+urlref+"/fichas/liberar-ficha/"+ficha+"/",
           dataType: 'json',
           data: {ficha: ficha},
           async: true,
           contentType: "application/json; charset=utf-8",
           success: function (data, textStatus, jqXHR) {
                if (data.teste == "ficha-liberada") {
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