var fs = require('fs');
var fileName = process.argv[2].toString();

fs.readFile(fileName, function(err, contents) {
	if(err) {
	  console.log(err);
	} 
	console.log(contents.toString().split('\n').length - 1);
});
