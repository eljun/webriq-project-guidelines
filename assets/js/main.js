
TweenMax.staggerFrom( '#git, #git2, #git3, #git4, #git5, #git6', 2, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);

var pb  = {"title": "Philippe Bodart", "content": "Philippe Bodart contacts"}
var usa = {"title": "United States", "content": "<h3>Usa</h3> contents here"}
var ph  = {"title": "Philippines", "content": "Philippines contents here"}
var uk  = {"title": "United Kingdom", "content": "United Kingdom contents here"}
var af  = {"title": "Africa", "content": "Africa contents here"}
var au  = {"title": "Australia", "content": "Australia contents here"}

console.log( usa.title );
$(document).ready(function(){
	$(".map-group").click(function(){
		var m = $(this).attr('id');
		if( m === "usa" ) {
			info( usa );
		} else if( m === "af" ){
			info( af );
		} else if( m === "uk" ){
			info( uk );
		} else if( m === "ph" ){
			info( ph );
		} else if( m === "au" ){
			info( au );
		} else {
			info( pb );
		}
	})

	// Vacant modal contents
	$('.modal').on('hide.bs.modal', function(e) {
		$(".modal").find('.modal-title').text( "" );
		$(".modal").find('.modal-body').html( "" );
	})
	$('[data-toggle="tooltip"]').tooltip()
	$('[data-toggle="popover"]').popover()
});

function info( el )  {
	var m = $('.modal');
	m.find('.modal-title').text( el.title );
	m.find('.modal-body').html( el.content );
	m.modal();
}


var tl 		= new TimelineMax(),
	poly 	= $('#hexagon polygon'),
	hex1 	= $(poly).find('#hex1'),
	hex2 	= $(poly).find('#hex2'),
	hex3 	= $(poly).find('#hex3'),
	hex4 	= $(poly).find('#hex4');


tl.staggerTo([hex1,hex2, hex3, hex4], 3, {opacity: ".15", repeat: -1, ease: Elastic.easeIn }, 0.25)


// (poly, 3, { opacity: ".25", repeat: -1, ease: Elastic.easeInOut, force3D:true}, 1);