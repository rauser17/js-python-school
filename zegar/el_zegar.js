const secH = document.getElementById('el_sec')
const minH = document.getElementById('el_min')
const godzH = document.getElementById('el_godz')

setInterval(zegar, 500);
function zegar(){
    let date = new Date();
    let sec = date.getSeconds()
    let min = date.getMinutes()
    let godz = date.getHours()

    sec=("0"+sec).slice(-2);
    min=("0"+min).slice(-2);
    godz=("0"+godz).slice(-2);
    secH.innerHTML=sec
    minH.innerHTML=min
    godzH.innerHTML=godz
}

zegar();