"use strict";
var a = prompt("My realisation = 1 Json realisation = 2");
a == 1 ? scri("My_realisation.js") : scri("Copy_in_json.js");
(a != 2 && a != 1) ? alert("Congratulate! You choise Json realisation") : true;


function scri(a){
	var script = document.createElement('script');
	script.src = a;
	document.getElementsByTagName('body')[0].appendChild(script);
}