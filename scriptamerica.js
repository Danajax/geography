var nameInput = document.getElementById('name'); //lagrer input fra form som nameInput

//array for noen av landene
let listCountry = ['argentina','bolivia', 'brazil', 'canada', 'chile', 'colombia', 'ecuador', 'frenchguyana', 'guyana', 'mexico', 'paraguay', 'peru', 'suriname', 'unitedstates', 'uruguay', 'venezuela']; 

let random027;
//funksjon som generer ett tilfeldig bilde, og som skriver ut bildet i html
function writeimg(){
		random027 = Math.floor(Math.random()*(listCountry.length)); 
		document.getElementById("bildeavland").innerHTML = `<img src="./Bilder/amerika/${listCountry[random027]}.png">`;
	}
writeimg(); //exe funksjonen


function reloadPageOnFail(msec) { // funksjon for å refreshe siden etter gitt antall milli sekunder
	setTimeout("location.reload(true);",msec); //inspirasjon hentet fra: https://www.quackit.com/javascript/javascript_refresh_page.cfm
}

let tryn = 2; // antall forsøk
let scr = 0; // antall riktige ved start 
document.querySelector('form.pure-form').addEventListener('submit', function (e) {

    //formen skal ikke submittes som normalt
    e.preventDefault();

    function checkForMatch(){
    	if (((nameInput.value).toLowerCase()).split(' ').join('') == listCountry[random027]){
    		scr++;
    		document.getElementById('torf').innerHTML = `<p>${listCountry[random027]} is the correct answer </p>`;
    		listCountry.splice(random027, 1);
    		writeimg();
    		document.getElementById('score').innerHTML = `<p>${scr} / ${listCountry.length + scr} </p>`;
    		if (listCountry.length == 0) {
    			document.getElementById('bildeavland').innerHTML = 'Well done, you must be a true genius!'
    		}
    	} 
    	else {
    		if (tryn == 0){
    			document.getElementById('torf').innerHTML = `<p>You have lost! The correct answer was ${listCountry[random027]}</p>`; 
    			reloadPageOnFail(3000); //caller funksjonen vi lagde i linje 15
    		}
    		else {
    			tryn--; 
    			document.getElementById('torf').innerHTML = `<p>${nameInput.value} is not correct, ${tryn + 1} tries left</p>`;
    			}
    		}
 
    	}
    
    checkForMatch();
    nameInput.value = '';

});











