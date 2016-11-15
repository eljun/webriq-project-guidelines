var data = {
	"ongoing": [
		"https://trello.com/c/CbzlaxXt/1649-netlify-ember-cms-enhancement&sa=D&ust=1478593875680000&usg=AFQjCNGouKHJoJaj946FDRl-zsN07gNMRQ",
		"https://trello.com/c/gApQR7hI/156-seasons-greetings-newsletter-2017",
	],
	"pending": [
		"https://trello.com/c/xsrbVqLc/1-account-information"
	],
	"notes": [
		{
			"site": "WebriQ",
			"info": "Revision Documentation Ok, since /accounts/create becomes our main landing page, I am wondering if we could not make the design a bit more attractive. Replace world icon with WebriQ logo. Replace follow instructions with icons of the new header image of WebriQ. Make it more attractive visually!!!" 
		}
	]
}

var b = $('body'),
	notes = b.find('ol.notes'),
	ongoing = b.find('ol.ongoing'),
	pending = b.find('ol.pending');

$(data.notes).each(function(e, link){
	notes.append('<li><h3>'+ link.site +'</h3><p>'+ link.info +'</p></li>')
})

$(data.ongoing).each(function(e, link){
	ongoing.append('<li><a href="'+ link + '" target="_blank">'+ link + ' </a></li>')
})

$(data.pending).each(function(e, link){
	pending.append('<li><a href="'+ link + '" target="_blank">'+ link + ' </a></li>')
})


