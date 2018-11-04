"use strict";
// var a = {
// 	name: "pronto",
// 	works:{
// 		holop: {
// 			position: "holop",
// 			experience: 10
// 		},
// 		holop_rating: {
// 			position: "HR",
// 			experience: 15
// 		}
// 	}
// }
var ur = document.querySelector(".unr");
var personOriginal = {
	"id": 1,
	"name": "Leanne Graham",
	"username": "Bret",
	"email": "Sincere@april.biz",
	"address": {
		"street": "Kulas Light",
		"suite": "Apt. 556",
		"city": "Gwenborough",
		"zipcode": "92998-3874",
		"geo": {
			"lat": "-37.3159",
			"lng": "81.1496"
		}
	},
	"phone": "1-770-736-8031 x56442",
	"website": "hildegard.org",
	"company": {
		"name": "Romaguera-Crona",
		"catchPhrase": "Multi-layered client-server neural-net",
		"bs": "harness real-time e-markets"
	}
}


function copyObj(c) {
	var a = {};
	for (var key in c) {
		if (typeof(c[key]) == "object") {
			a[key] = copyObj(c[key]);
		} else {
			a[key] = c[key];
		}
	}
	return a;
}
var personCopy = copyObj(personOriginal);
personOriginal.address.geo.lat = "-47.3159";
ur.childNodes[1].textContent = "personOriginal.address.geo.lat = " + personOriginal.address.geo.lat;
ur.childNodes[3].textContent = "personCopy.address.geo.lat = " + personCopy.address.geo.lat;