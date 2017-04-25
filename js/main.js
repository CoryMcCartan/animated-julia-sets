VIEW = {
	MIN_X: -1.5,
	MIN_Y: -1,
	MAX_X: 0.5,
	MAX_Y: 1,
};
ITERATIONS = 1;

document.onreadystatechange = function() {
	if (document.readyState !== "complete") return;
		
	go();
}

$ = function(s) { return document.querySelector(s);	};