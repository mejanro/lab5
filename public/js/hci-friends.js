'use strict';

$(document).ready(function() {
	
	initializePage();
})


function initializePage() {
	console.log("Javascript connected!");
	


	$(".block a").click(function(e) {
		e.preventDefault();
		var anagramName = anagrammedName($(this).text());
		$(this).text(anagramName);
	});
}

function anagrammedName(name) {
if (name == "Doug Engelbart") {
		return "Notable Grudge";
	} 
else if (name == "Ivan Sutherland") {
		return "Vandal Heist Run";
	}
else if (name == "JCR Licklider") {
		return "Crick Rid Jell";
	}
else if (name == "Vannevar Bush") {
		return "Ravens Van Hub";
	}
else if (name == "Alan C. Kay") {
		return "Canal Yak";
	}
else if (name == "Allen Newell") {
		return "Ellen All New";
	}
else if (name == "Lucy Suchman") {
		return "Lunacy Chums";
	}
else if (name == "Grace Hopper") {
		return "Gear Chopper";
	}
else {
		console.log(name + " not known for anagramming.");
		return name;
	}
}