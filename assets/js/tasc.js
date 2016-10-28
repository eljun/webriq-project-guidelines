$(document).ready(function(){

	$('.nav-tabs a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})

	var $root = $('html, body');
	$('.sidebar a').click(function() {
	    var href = $.attr(this, 'href');
	    $root.animate({
	        scrollTop: $(href).offset().top -71
	    }, 500, function () {
	    	console.log(window.location.hash)
	        window.location.hash;
	    });
	    return false;
	});

	// Sticky Menu
	$("#fixed-sidebar").sticky({topSpacing:0});
})
