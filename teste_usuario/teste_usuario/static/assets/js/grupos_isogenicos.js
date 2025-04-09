$(document).ready(function() {
    $('.tipo').on('change', function (e) {
        var optionSelected = $("option:selected", this);
        var valueSelected = this.value;

        //valor 2 é tipo Heterogênico
        if (valueSelected == 2) {
            $('.grupos').show();
        } else {
            $('.grupos').hide();
        }
    });
});
