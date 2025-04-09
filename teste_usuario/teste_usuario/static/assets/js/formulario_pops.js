$( document ).ready(function() {
    //Alterar input file padrao
    $('#upload-pop').click(function(){
        $('#input-pop').click();
    });
    $('#input-pop').change(function() {
      $('#selected-pop').text($('#input-pop')[0].files[0].name);
    });
});
