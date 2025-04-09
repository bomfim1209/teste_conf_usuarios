$( document ).ready(function() {
    $('.check-notif').on('click', function() {
        self = $(this);
        var urlref = self.data("url");
        var notificacao = self.data("notificacao");
        var link = self.data("link");

        $.ajax({
           type: "GET",
           url: "//"+urlref+"/notificacoes/checar-notificacao/",
           dataType: "json",
           data: {notificacao: notificacao},
           async: true,
           contentType: "application/json; charset=utf-8",
           success: function (data, textStatus, jqXHR) {
                if (data.teste == "notificacao-visualizada") {
                    window.location.href = link;
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