var fs = require('fs');
var newlines = 0;
var file = process.argv[2].toString();
var text = fs.readFileSync(file).toString().split('\n');
console.log(text.length - 1);
