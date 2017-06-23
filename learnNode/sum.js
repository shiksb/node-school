var sum = 0;
for(var i = 0; i < 3; i++) {
	sum += Number(process.argv[i+2]);
}
console.log(sum);
