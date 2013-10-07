;(function(){
	"use strict";

	var $blas = [
		new Audio("mp3/bla1.mp3"),
		new Audio("mp3/bla2.mp3"),
		new Audio("mp3/bla3.mp3")
	];
	var status = [false,false,false];

	$blas.map(function(e,i){
		e.addEventListener("play",function(){
			status[i] = true;
		});
		e.addEventListener("ended",function(){
			status[i] = false;
		});
	});

	function bla() {
		//status.
	}

	window.addEventListener("load",function(){
		var $buttons = document.querySelectorAll("button");
		for (var i=0; i<$buttons.length; i++) {
			$buttons[i].addEventListener("click",function(){
				var track = this.getAttribute("data-track");
				$blas[track].play();
			});
		}

		window.setInterval(bla,250);
	})

})();
