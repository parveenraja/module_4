(function(window){
	var SpeakWord="Good Bye";
	var byeSpeaker=function (name){
		console.log(SpeakWord+" "+name);
	}
	window.byeSpeaker=byeSpeaker;
})(window);