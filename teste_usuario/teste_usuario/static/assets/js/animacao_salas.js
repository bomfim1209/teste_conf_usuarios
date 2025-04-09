$( document ).ready(function() {
	$('.icone-porta').hover(function() {
	    self = $(this);
        var porta_id = self.data('porta');
		$('.porta-'+porta_id).toggleClass('fa-door-open');
	});
});
