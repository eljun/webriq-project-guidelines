var b = $('body');

var sliderScene = b.find('svg.drawsvg').drawsvg({
	duration: 1800,
	stagger: 100,
	callback: function(){
		$("svg.drawsvg").css('opacity', '0');
		$(b).find('.hided').each(function(){
			$(this).removeClass('hided');
			$(this).addClass('showed');
		});
		TweenMax.to(".demo-buttons p", 0.75, {y: "0px", delay: 1.4, opacity: 1})
		TweenMax.to(".demo-buttons a", 0.75, {y: "0px", delay: 1.5, opacity: 1})
	}
});

sliderScene.drawsvg('animate')

TweenMax.staggerFrom(".lang .first_batch", 0.4,{
	scale: 2.2,
	opacity:0,
	delay: 2.2,
	ease:Power2.easeInOut,
	force3D:true},
	.5)

TweenMax.staggerFrom(".lang .second_batch", 0.4,{
	scale: 2.5,
	opacity:0,
	delay: 2.3,
	ease:Power2.easeInOut,
	force3D:true},
	.3)

TweenMax.staggerFrom(".lang .third_batch", 0.5,{
	scale: 2,
	opacity:0,
	delay: 2.4,
	ease:Power2.easeInOut,
	force3D:true},
	.5)

