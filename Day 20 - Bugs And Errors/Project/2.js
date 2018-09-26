// Output in the right sequence

try {
  console.log('First'); //First
  
  helloFirst;

  console.log('Second'); 

} catch(err) {

  console.log('Third' + err);   //Reference Error: helloFirst is not defined

} finally {
  console.log('Fourth'); //Fourth
}

console.log('Fifth'); //Fifth



// Output in the right sequence


// try {
//   {
//   console.log('First');
  
//   helloFirst;

//   console.log('Second'); 

// } catch(err) {

//   console.log('Third' + err); 

// } finally {
//   console.log('Fourth'); 
// }

// console.log('Fifth');



//Use the following Data and do the following

var json = {name:"Steve Jobs",job:"Founder"};
// Write a program using try catch
try {
	console.log(json.name)
} catch(error){
	console.log(error.name);
	console.log(error.message)
}
// check if te json object doesn't ahve a agr property throw an arror saying "Incomplete Data"

try{
	if(!json.name) {
		throw new SyntaxError("Incomplete Data")
	}
	console.log(json.name)
}catch(error) {
	console.log(error.name);
	console.log(error.message)
}
// If you have age you can console.log age
// in catch statement console.log error message and name




// Execute your program using this data
var json = {name:"Steve Jobs",job:"Founder", age: 42};