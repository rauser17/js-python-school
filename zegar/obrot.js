const secHTML = document.getElementById('sec')
const minHTML = document.getElementById('min')
const godzHTML = document.getElementById('godz')

setInterval(zegar, 500);

function zegar(){
    let date = new Date();
    let sec = date.getSeconds()/60;
    let min = date.getMinutes()/60;
    let godz = date.getHours()/12;
    
    secHTML.style.transform="rotate("+(sec*360)+"deg)";
    minHTML.style.transform="rotate("+(min*360)+"deg)";
    godzHTML.style.transform="rotate("+(godz*360)+"deg)";
}

zegar();