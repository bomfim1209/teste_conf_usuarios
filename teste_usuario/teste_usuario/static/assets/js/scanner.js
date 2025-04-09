$(document).ready(function () {
    $('#scanner').on('click', function() {
        $.ajax({
          url: "qrcodescanner/scanner.py",
         context: document.body
        }).done(function() {
         alert('Adeus!');;
        });
    });
});