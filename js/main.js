
function animate(id) {
	TweenMax.to(id, 1, {
		// scale: 1.2,
		opacity: 1,
		delay: .3,
	   ease: Bounce.easeOut,y: -150 
	});
};
function Bounce(id) {
	TweenMax.from("."+id+"", 1, {
		scale: 1.2,
		// opacity: 1,
		// delay: .3,
	  ease: Bounce.easeOut 
	});
};

function SchoolAdvantages() {
	var i = 1 , j = 1, k  = 1,  l = 304;
	var x = document.getElementById("nintyseven");
	var y = document.getElementById("teachers");
	var z = document.getElementById("buildings");
	var aa = document.getElementById("students");
	var myVar = setInterval(function(){ myTimer() }, 50);
	function myTimer() {
	   x.innerHTML = i + "%";
	   y.innerHTML = j + "+";
	   z.innerHTML = k ;
	   aa.innerHTML = l + "+";
	   i++;
	   l++;
	   k = 2;
	   if(j < 30) {
	   	j++;
	   }
	   if(i == 98) {
		clearInterval(myVar);
	   }
	}
}
var i = 1 , j = 1 , k = 1 , l = 1;
$(function() {
       $('#abt').waypoint(function() {
       	if(i) {
       		 animate(".abt");	
       		 console.log("error");
       		 i = 0;
       	}
        
         }, {
           offset: '100%'
         });
});
$(function() {
       $('.schoolAdvantages').waypoint(function() {
       	if(j) {
         SchoolAdvantages();
         animate(".schoolAdvantages");
         j = 0;
     	}
         }, {
           offset: '100%'
         });
});

$(function() {
       $('.story').waypoint(function() {
       	if(k) {
         // SchoolAdvantages();
         animate(".story");
         k = 0;
     	}
         }, {
           offset: '100%'
         });
});
$(function() {
       $('.events').waypoint(function() {
       	if(l) {
         // SchoolAdvantages();
         animate(".events");
         l = 0;
     	}
         }, {
           offset: '100%'
         });
});







