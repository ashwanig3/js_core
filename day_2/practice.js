// Get two values from the user ‘password’ and ‘confirm password’  using the prompt box and display a message “Password validated” if both the values match else display the message “Password do not match”
	
	function password(password){
	var password=prompt("enter your password");
	var confirmPassword=prompt("Confirm password");

	if(password==confirmPassword){
		console.log("validated password");
	}else{
		console.log("password do not match")
	}

}





// Find the output of the following
// Logical AND operation
// true  && true;	/true
// true  && false;	/false
// false && true;	/false
// false && false;	/false

// Logical OR operation
// true  || true;	/true
// true  || false;	/true
// false || true;	/true
// false || false;	/false

// "foo" && "bar";	/bar
// "bar" && "foo";	/foo
// "foo" && "";     /""
// ""    && "foo";	/""

// "foo" || "bar";	/foo
// "bar" || "foo";	/bar
// "foo" || "";		/foo
// ""    || "foo":  /foo


// alert(alert(1) || 2 ||alert(3));/2



// Create a function which takes two input and (a,b) and display the sum, sub, multiplication, devision of those two numbers.
	
		function numbers(a,b){

		   console.log(a+b);
		    console.log(a-b);
		    console.log(a*b);
		    console.log(a/b);
		}
		numbers(12,6);

// Function to display a number if user enters negative number

	function negative(){
		var a=prompt("enter a no");
		if(a<0){
			alert(a);
		}
	}
	negative();

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
		var sum = 0;
	

	for (var i=3; i<1000;i++) {
  		if (i % 3 == 0) {
    		sum = sum + i;
  		} else {if (i % 5 == 0) {
   			 sum = sum + i;
 		 }
		}
	}
console.log(sum);



// If user enters positive number, that number won't be displayed

		function positive(){
			var a=prompt("enter a no");
			if(a<0){
				console.log(a);
			}
		}
		positive();

// Funnction to check whether an integer entered by the user is odd or even
	function evenOdd(a){
		if(a%2==0){
			console.log("even");
		}else{
			console.log("odd");
		}
	}
	evenOdd();



// Funnction to take two input and show the relation using =, > or < i.e (21,45) 21 < 45, (23,12) 23 > 12
	function input(a,b){
		if(a=b){
			console.log(a=b);
		}else{
			if(a<b){
				console.log(a<b);
			}else{
				if(a>b){
					console.log(a>b);
				}
			}
		}
	}


// Funnction to Check Whether a Character is Vowel or Consonant



// Funnction to Find the Largest Number Among Three Numbers



//Switch
// You are given a variable, . Your task is to print:
// - ONE, if num is equal to .
// - TWO, if num is equal to .
// - THREE, if num is equal to .
// - FOUR, if num is equal to .
// - FIVE, if num is equal to .
// - SIX, if num is equal to .
// - SEVEN, if num is equal to .
// - EIGHT, if num is equal to .
// - NINE, if num is equal to .
// - PLEASE TRY AGAIN, if  is none of the above.



// You are given a variable marks. Your task is to print:
// - AA if marks is greater than 90.
// - AB if marks is greater than 80 and less than or equal to 90
// - BB if marks is greater than 70 and less than or equal to 80
// - BC if marks is greater than 60 and less than or equal to 70
// - CC if marks is greater than 50 and less than or equal to 60
// - CD if marks is greater than 40 and less than or equal to 50
// - DD if marks is greater than 30 and less than or equal to 40
// - FF if marks is less than or equal to 30




// Funnction to generate Multiplication Table of a given number (use alert for number input)


// Funnctionn to calculate the Factorial of a Number
		


// Output: var x = 10 + "1"; console.log(x); typeof x;
		// console.log(x)=101
		// typeof x=number

//  Solve: 225 % 6 = ? /3


