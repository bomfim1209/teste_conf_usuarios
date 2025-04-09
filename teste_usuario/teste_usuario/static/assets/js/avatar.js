$( document ).ready(function() {
    var myname = $('#nome-usuario').val();

    $('.letterAvatar').html(myname.charAt(0));

    var stringToColour = function(str) {

      // str to hash
      for (var i = 0, hash = 0; i < str.length; hash = str.charCodeAt(i++) + ((hash << 5) - hash));

      // int/hash to hex
      for (var i = 0, colour = "#"; i < 3; colour += ("00" + ((hash >> i++ * 8) & 0xFF).toString(16)).slice(-2));

      return colour;
    }

    $('.letterAvatar').css('background-color', stringToColour(myname));
});