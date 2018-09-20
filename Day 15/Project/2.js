// Define a constructor function called Persone which takes three arguments
//(name, yearOfBirth, job) Initiate the properties
var Persone = function(name,yearOfBirth,job) {
	this.name = name;
	this.yearOfBirth = yearOfBirth;
	this.job = job;
}



// Define a function name calculateAge which returns the age of the person

Persone.prototype.calculateAge =  function() {
	var time = new Date();
	var age = time.getFullYear() - this.yearOfBirth;
	return age;
} 

// Use constructor function to make three objects with different values for example ('John', 1990, 'teacher')

var persone1 = new Persone("john",1990,"teacher");
var persone2 = new Persone("Donald",1992,"Buisnessman");
var persone3 = new Persone("Amy",1987,"Engineer");


// call the calculateAge function on each object
persone1.calculateAge();
persone2.calculateAge();
persone3.calculateAge();

