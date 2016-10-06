var arr = [];

$(".lang").find( "svg" ).each(function(){
	arr.push( "#" + $(this).attr('id') );
})


// Animation properties

function lang( element ) {
	TweenMax.from( element , 1.5, {scale: 1.5, opacity:1,  force3D:true}, 0.2);
}


// for( var i = 0; i < arr.length; i++) {
// 	$("body").find( arr[i] ).each(function(){
// 		// TweenMax.staggerFrom( arr[i], 2, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);
// 		console.log( $(this) )
// 		$(this).each(function(){
// 			TweenMax.staggerFrom( arr[i], 2, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);
// 		})
// 	});
// }

TweenMax.staggerFrom( '#git', 2, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);

// $('body').find('.svg').mouseover(function(){
// 	TweenMax.from( $(this).find('.git-circle'), 0.2, { fill: "#ddd"});
// })



function myCallback(){
	console.log($(this).attr())
}


// $('#map').find('#marker-au').click(function(){
//    $(this).popover('show')
// })

var pb  = {"title": "Philippe Bodart", "content": "Philippe Bodart contacts"}
var usa = {"title": "United States", "content": "Usa contents here"}
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
			info( usa );
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
		$(".modal").find('.modal-body').text( "" );
	})
	$('[data-toggle="tooltip"]').tooltip()
	$('[data-toggle="popover"]').popover()
})

function info( el )  {
	var m = $('.modal');
	m.find('.modal-title').text( el.title );
	m.find('.modal-body').text( el.content );
	m.modal();
}