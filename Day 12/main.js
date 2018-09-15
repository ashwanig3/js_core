var questionArray = [
  "What is the capital of Australia?",
  "What is the capital of Liberia?",
  "What is the capital of Taiwan?",
  "What is the capital of Japan?",
  "What is the capital of China?",
  "What is the capital of Turkey?",
  "What is the capital of Colombia?",
  "What is the capital of India?"];


var answerArray = [
  ["Canberra", "Melbourne", "Sydney", "Darwin"],
  ["Arthington","Monrovia","Tuzon","Marshall"],
  ["Tainan City", "Taichung", "Taipei", "Hsinchu"],
  ["Kyoto","Hiroshima","Tokyo","Osaka"],
  ["Hong Kong", "Macau", "Shanghai", "Beijing"],
  ["Ankara","Istanbul","Antalya","Bursa"],
  ["Medellin", "Bogota", "Cartagena", "Cali"],
  ["Mumbai","Hyderabad","Bangalore","New Delhi"]
];

var correctAnswers = [
  "A. Canberra",
  "B. Monrovia",
  "C. Taipei",
  "C. Tokyo",
  "D. Beijing",
  "A. Ankara",
  "B. Bogota",
  "D. New Delhi"];

var startBtn = document.querySelector('button');
var questions = document.getElementById('questions');
var randomQuestion = document.getElementById('randomQuestion');
var options = document.querySelector('.options');
var timer = document.getElementById('timer');
var responseAnswer = document.querySelector('.responseAnswer');

let index = randomNumber();


var timeLeft = 30;
var interval

//Function to display questions

function displayQuestion() {
  startBtn.style.display = 'none';
  questions.style.display = 'block';
  responseAnswer.style.display = 'none';;
  countDown();
  interval = setInterval(countDown, 1000);

  randomQuestion.innerHTML = questionArray[index];
  options.innerHTML = answerArray[index].map((item,i )=> {
    return  `<li class="option" data-id='${i}'>${item}</li>`
  }).join('')

  var option = document.querySelector('.options');
  options.addEventListener('click' , response);
}

//Function to response the answer
function response(e) {
  timeLeft = 30;
  var correct = correctAnswers[index].split(' ');
  var three = correctAnswers[index].substr(3);
  var id = e.target.dataset.id;

  responseAnswer.style.display = 'block';
  clearInterval(interval)

  if(e.target.className !== 'option') return;
  questions.style.display = 'none';
  
  if(answerArray[index][id] == correct[1]) {
  responseAnswer.innerHTML = `Correct! The Answer is ${correctAnswers[index]}.'<img src="assets/1.svg">'`;
 } else {
  responseAnswer.innerHTML = `Wrong Answer! The Correct Answer is ${correctAnswers[index]}.'<img src="assets/2.png">'`;
 }
 if(answerArray[index][id] == three) {
   responseAnswer.innerHTML =  `Correct! The Answer is ${correctAnswers[index]}.`;
 } else {
  responseAnswer.innerHTML = `Wrong Answer! The Correct Answer is ${correctAnswers[index]}.`
 } 
  setTimeout(displayQuestion, 5000);
  index = randomNumber();
}





//function for countdown

function countDown() {
if (timeLeft == 0) {
    timeOut();
    // displayQuestion();
  } else {
    timer.innerHTML = 'Time Remaining' + ':' + timeLeft;
    timeLeft--;
  }

}
//Function for time out

function timeOut() {
  randomQuestion.style.display = 'none';
  options.style.display = 'none';
 return timer.innerHTML = `You ran out of time! Correct Answer is ${correctAnswers[index]}`;
}


//Function to generate random number
function randomNumber() {
	return Math.floor(Math.random() * questionArray.length);
}






startBtn.addEventListener('click' , displayQuestion);;
