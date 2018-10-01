var searchBtn = document.querySelector('.btn');
var input = document.querySelector('.dogs-breed');
var dogImg1 = document.querySelector('.dog-img1');
var dogImg2 = document.querySelector('.dog-img2');
var dogImg3 = document.querySelector('.dog-img3');
var dogName = document.querySelector('.dog-name');
var dogGallery = document.querySelector('.gallery');
var spinner = document.querySelector('.lds-ring');

spinner.style.display = 'none';

dogGallery.style.display = 'none';



function searchDog() {
	dogGallery.style.display = 'block';
	spinner.style.display = 'inline-block';
	var value = input.value;
	var url = `https://dog.ceo/api/breed/${value}/images/random/3`;
	// var url2 =`https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=${value}&order=RANDOM&page=0&limit=1`;

	fetch(url).then(res => res.json()).then(data => {
		console.log(data);
		dogName.innerText = `${value} Dogs`
		dogImg1.src = data.message[0];
		dogImg2.src = data.message[1];
		dogImg3.src = data.message[2];
		spinner.style.display = 'none';

	})
	// fetch(url2).then(reso => reso.json()).then(d => {
		
	// })
}


searchBtn.addEventListener('click', searchDog);