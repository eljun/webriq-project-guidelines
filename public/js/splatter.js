var s = $('body'),
	splatter = s.find('#splatter'),
	ring = splatter.find('#ring'),
	round = splatter.find('#round'),
	lines = splatter.find('#lines line');



TweenMax.set(lines, {
	drawSVG: "40% 40%"
})

var tl = new TimelineMax({repeat:1});

tl.from(lines, 2, { drawSVG: 0})