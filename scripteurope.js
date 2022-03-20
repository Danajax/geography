var nameInput = document.getElementById('name'); //lagrer input fra form som nameInput

//array for noen av landene
let listCountry = ['albania', 'austria', 'belarus', 'belgium', 'bosnia', 'bulgaria', 'croatia', 'czechia', 'estonia', 'finland', 'france', 'germany', 'hungary', 'iceland', 'ireland', 'italy', 'latvia', 'kosovo', 'lithuania', 'macedonia', 'moldova', 'montenegro', 'netherlands', 'norway', 'poland', 'portugal', 'romania', 'russia', 'serbia', 'slovakia', 'slovenia', 'spain', 'sweden', 'switzerland', 'turkey', 'ukraine', 'unitedkingdom']; // lengden er 37 

let random027;
//funksjon som generer ett tilfeldig bilde, og som skriver ut bildet i html
function writeimg(){
		random027 = Math.floor(Math.random()*(listCountry.length)); //lager et tilfeldig generert tall, for å indexere i arrayen
		document.getElementById("bildeavland").innerHTML = `<img src="./Bilder/europe/${listCountry[random027]}.png">`; //referer til bildene, som samsvarer med elementene i arrayen 
	}
writeimg(); //executer funksjonen


function reloadPageOnFail(msec) { // funksjon for å refreshe siden etter gitt antall milli sekunder
	setTimeout("location.reload(true);",msec); //inspirasjon hentet fra: https://www.quackit.com/javascript/javascript_refresh_page.cfm
}

let tryn = 2; // antall forsøk
let scr = 0; // antall riktige ved start 
document.querySelector('form.pure-form').addEventListener('submit', function (e) {

    //formen skal ikke submittes som normalt
    e.preventDefault();

    function checkForMatch(){  //funksjon som ksal sjekke om input stemmer med fasit, altså array verdiene
    	if (((nameInput.value).toLowerCase()).split(' ').join('') == listCountry[random027]){
    		scr++;
    		document.getElementById('torf').innerHTML = `<p>${listCountry[random027]} is the correct answer </p>`; 
    		listCountry.splice(random027, 1);
    		writeimg();
    		document.getElementById('score').innerHTML = `<p>${scr} / ${listCountry.length + scr} </p>`;
    		//hvis svaret er riktig inkrementeres scoren, og vi bruker DOM for å gi tilbakemelding i html om at man har skrevet riktig svar. 
    		if (listCountry.length == 0) {
    			document.getElementById('bildeavland').innerHTML = 'Well done, you must be a true genius!'
    		}
    		//hvis listcountry er tom, er spillet ferdig
    	} 
    	else {
    		if (tryn == 0){
    			document.getElementById('torf').innerHTML = `<p>You have lost! The correct answer was ${listCountry[random027]}</p>`; 
    			reloadPageOnFail(3000); //caller funksjonen vi lagde i linje 16
    		}
    		//hvis brukeren har brukt opp forsøkene sine, får spilleren en beskjed om dette. Vi kaller tilslutt funksjonen for å restarte spillet etter 3 sekunder. 
    		else {
    			tryn--; 
    			document.getElementById('torf').innerHTML = `<p>${nameInput.value} is not correct, ${tryn + 1} tries left</p>`;
    			} //hvis spilleren ikke har brukt opp forsøkene sine, skal den informeres om antall forsøk igjen, og at den har svart feil
    		}
 
    	}
    
    checkForMatch(); //vi executer funksjonen, om input stemmer med fasit
    nameInput.value = ''; //når formet er submittet, skal input veriden i placeholderen bli blank

});










