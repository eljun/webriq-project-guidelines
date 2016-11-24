var data = {
	"notes": [
		{
			"site": "WebriQ",
			"info": "<p>Revision Documentation Ok, since /accounts/create becomes our main landing page, I am wondering if we could not make the design a bit more attractive. Replace world icon with WebriQ logo. Replace follow instructions with icons of the new header image of WebriQ. Make it more attractive visually!!!</p><p>After live, it would be useful to document this in our documentation.</p><p>NEXT WEEK: Make the landing page more impressive</p>"
		},{
			"site": "Webriq CMS & App",
			"info": "<p>Please refer to your notebook</p>"
		}
	],
	"ongoing": [
		"https://trello.com/c/CbzlaxXt/1649-netlify-ember-cms-enhancement&sa=D&ust=1478593875680000&usg=AFQjCNGouKHJoJaj946FDRl-zsN07gNMRQ",
	],
	"pending": [
		"https://trello.com/c/KRUIlwJq/316-blog-on-interactive-video-training",
		"https://trello.com/c/zT9TTYYu/158-webriq-editor-features-documentation",
		"https://trello.com/c/mi7jv9sT/39-web-service"
	]
}

var b = $('body'),
	notes = b.find('ol.notes'),
	ongoing = b.find('ol.ongoing'),
	pending = b.find('ol.pending');

$(data.notes).each(function(e, link){
	notes.append('<li><h3>'+ link.site +'</h3>'+ link.info +'</li>')
})

$(data.ongoing).each(function(e, link){
	ongoing.append('<li><a href="'+ link + '" target="_blank">'+ link + ' </a></li>')
})

$(data.pending).each(function(e, link){
	pending.append('<li><a href="'+ link + '" target="_blank">'+ link + ' </a></li>')
})


