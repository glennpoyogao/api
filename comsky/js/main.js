import { MY_API_KEY } from './config.js';

fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "quotes15.p.rapidapi.com",
		"x-rapidapi-key": "5a1c6c22fcmsh158205c054eea43p14ef4bjsn58666b26f737"
	}
})
.then(response => response.json())
.then(response => {
    console.log(response);
    
    document.getElementById('quote').innerHTML = response.content;
    document.getElementById('author').innerHTML = '- ' + response.originator.name + ' -';
})
.catch(err => {
	console.log(err);
});