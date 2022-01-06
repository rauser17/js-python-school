var wys_zdj = document.getElementById('wys')
var grupa = document.getElementById('pasek').getElementsByTagName('img')

for(var z=0; z<grupa.length; z++){
    grupa[z].onclick = wys
}

function wys(event){
    wys_zdj.src=event.target.src
}