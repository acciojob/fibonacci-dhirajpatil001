function fibonacci(num) {
	if(num==1 || num == 2){ return num-1 }
	
	let a = 0;
	let b = 1;
    let c;
	for(let i = 3 ; i <= num;i++){
		c = a + b;
		a = b;
		b = c;
	}
	return c;
}

module.exports = fibonacci;
