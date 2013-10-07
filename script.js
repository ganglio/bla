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
			console.log("play");
		});
		e.addEventListener("ended",function(){
			status[i] = false;
			console.log("ended");
		});
	});



})();