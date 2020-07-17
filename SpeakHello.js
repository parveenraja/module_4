(function(window){
	var SpeakWord="Hello";
	var helloSpeaker=function (name){
		console.log(SpeakWord+" "+name);
	}
	window.helloSpeaker=helloSpeaker;
})(window);