'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	$("#friends").click(anagrammedName);
}
$("#friends").click(anagrammedName);
function anagrammedName(name) {
	e.preventDefault();
	// Thanks, Internet Anagram Server!
	if (name == "Doug Engelbart") {
		$(this).text("Notable Grudge");
	} 
	else if (name == "Ivan Sutherland") {
		$(this).text("Vandal Heist Run");
	}
	else if (name == "JCR Licklider") {
		$(this).text("Crick Rid Jell");
	}
	else if (name == "Vannevar Bush") {
		$(this).text("Ravens Van Hub");
	}
	else if (name == "Alan C. Kay") {
		$(this).text("Canal Yak");
	}
	else if (name == "Allen Newell") {
		$(this).text("Ellen All New");
	}
	else if (name == "Lucy Suchman") {
		$(this).text("Lunacy Chums");
	}
	else if (name == "Grace Hopper") {
		$(this).text("Gear Chopper");
	}
	else {
		console.log(name + " not known for anagramming.");
		$(this).text(name);
	}
}