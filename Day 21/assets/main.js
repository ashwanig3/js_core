var gitUsername = document.querySelector('.git_username');
var searchBtn = document.querySelector('.btn');
var userName = document.querySelector('.name');
var userImg = document.querySelector('.user_img');
var repos = document.querySelector('.repos');
var follower = document.querySelector('.follower');
var following = document.querySelector('.following');


function searchUrl() {
	var value = gitUsername.value;
	var url = `https://api.github.com/users/${value}`;
	fetch(url).then(resp => resp.json()).then(data => {
		console.log(data,)
		userName.innerText = data.name;
		repos.innerText = `Public_repos: ${data.public_repos}`;
		follower.innerText = `Followers: ${data.followers}`;
		following.innerText = `Following: ${data.following}`;
		userImg.src = data.avatar_url;
	});
}

searchBtn.addEventListener("click", searchUrl);

