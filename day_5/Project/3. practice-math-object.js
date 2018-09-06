1.

Using math object write a JavaScript function to generate a random integer between min and max.
Hint: Use Math.random() & Math.floor()
Example:
rand(max,min)
console.log(rand(20,1)); //15
console.log(rand(1,10)); //8
 
 function randInteger(max,min){
    return Math.floor(Math.random() * max) + min;
	}



2.
Write a JavaScript function to format a number up to specified decimal places.
Example:
console.log(decimals(2.100212, 2)); //2.10
console.log(decimals(2.100212, 3)); //2.100
console.log(decimals(2100, 2)); //2100.00

	function decimals(number,tofixed){
    return Number.parseFloat(number).toFixed(tofixed);
	}
	console.log(decimals(5.00043 , 2));

3. Write a JavaScript function to find the highest value in an array.

Example:
console.log(maxNumber([12,34,56,1])); //56
console.log(maxNumber([-12,-34,0,-56,-1])); //0


function max(arr){
    var max = arr[0];
    
    for(var i=1; i< arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}

arr = [24,335,74,35,33];
console.log(max(arr));