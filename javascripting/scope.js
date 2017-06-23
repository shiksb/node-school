var a = 1, b = 2, c = 3;

(function firstFun(){
	var b = 5, c = 6;
	
	(function secFun(){
		var b = 8;

		(function thirdFun() {
			var a = 7, c = 9;
			
			(function fourthFun() {
	
			var a = 1, c = 8;
			})();
		})();
			console.log("a: "+a+", b: "+b+", c: "+c);		
	})();
})();
