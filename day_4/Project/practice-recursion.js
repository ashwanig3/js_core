// Write a JavaScript program to calculate the factorial of a number. Go to the editor

function fact(x) {
   if(x==0) {
      return 1;
   }
   return x * fact(x-1);
}
console.log(fact(4));

// Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
 function gcd(a, b) {
    if (b == 0) {
        return a;
    }

    return gcd(b, a % b);
}
console.log(gcd(12 , 8));
	

//Write a JavaScript program to get the integers in range (x, y)

