const formu = document.getElementById('form')

const interval = setInterval(() => {
towar = document.getElementById('towar').value
cena = document.getElementById('cena')
    
    if(towar=='Kalosze'){
        cena.innerHTML='36,50 zł'
        kwota=36.50
    }
    
    if(towar=='Bambosze'){
        cena.innerHTML='18,34 zł'
        kwota=18.34
    }
    
    if(towar=='Sandały'){
        cena.innerHTML='93,45 zł'
        kwota=93.45
    }
    
    if(towar=='Trampeczki'){
        cena.innerHTML='42,00 zł'
        kwota=42.00
    }
    
    if(towar=='Kamasze'){
        cena.innerHTML='64,11 zł'
        kwota=64.11
    }
    
x = document.getElementById('w1').value
z=document.getElementById('w2')
if(x==1){
z.innerHTML=0+' %'
}
if(x==2){
    z.innerHTML=3+' %'
}
if(x==3){
    z.innerHTML=7+' %'
}
if(x==4){
    z.innerHTML=23+' %'
}

},1);
ilosc=0
function suwak(){
    var miejsce = document.getElementById('suwak')
    wybor = document.getElementById('wybor')              
    
    if(ilosc==0){
        miejsce.innerHTML="[ opcje ]"
        wybor.innerHTML='<input type="range" min="1" max="4" id="w1" step=1>  <z id="w2"></z>'
        ilosc=ilosc+1

    }else{
        miejsce.innerHTML="[ suwak ]"
        wybor.innerHTML='<a id="wybor"><input type="radio" name="procent" value="0"> 0%<br><input type="radio" name="procent" value="3"> 3%</br><input type="radio" name="procent" value="7"> 7%</br><input type="radio" name="procent" value="23"> 23%</br></a>'
        ilosc=ilosc-1
    }
}
ilosc1=0
function zmiana(){
    var kolor = document.getElementById('kolor')
    var body = document.body
    var form = document.getElementById('form')
    var ramka = document.getElementById('ramka')
    if(ilosc1==0){
        kolor.innerHTML="szata: [ zielono mi ]"
        body.style.backgroundColor='rgb(196, 196, 196)'
        form.style.backgroundColor='black'
        form.style.color='white'
        form.style.border='10px solid black'
        ramka.style.border='2px solid white'
        ilosc1=ilosc1+1

    }else{
        kolor.innerHTML="szata: [ czarno - biały ]"
        body.style.backgroundColor=' rgb(153, 238, 210)'
        form.style.backgroundColor='rgb(77, 233, 137)'
        form.style.color='black'
        form.style.border='10px solid rgb(77, 233, 137)'
        ramka.style.border='2px solid grey'
        ilosc1=ilosc1-1
    }
}

function forms(event){
    event.preventDefault()

    fak = document.querySelector("input[name=fak]")
    
    if(fak.checked){
        faktura='Wystawiamy fakturę zgodnie z życzeniem klienta.'
    }else{
        faktura='Wystawiamy paragon.'
    }
    imie = document.getElementById('imie').value
    nazwisko = document.getElementById('nazwisko').value
    email = document.getElementById('email').value
    
    if(ilosc==0){
            stawka1 = document.getElementsByName('procent')

    for (const rb of stawka1) {
        if (rb.checked) {
            var stawka1v2 = rb.value
            break;
        }}
    }else{
        stawka1v2=x
    }

    if(stawka1v2==1){
        stawka1v3=0
        }

    if(stawka1v2==2){
        stawka1v3=3
        }
            
    if(stawka1v2==3){
        stawka1v3=7
        }
        
    if(stawka1v2==4){
        stawka1v3=23
        }
    if(imie==''){
        imie=''
    }else{
        imie='Imie: '+imie
    }
    
    zaplata=(kwota+(kwota*stawka1v3/100)).toFixed(2)
    data = document.getElementById('data').value
    pods = document.getElementById('form')
    pods.innerHTML='<a id="zam">Dane klienta: </a><p>'+imie+'<br>Nazwisko: '+nazwisko+'<br>E-mail: '+email+'<br>'+faktura+'<p><a id="zam">Szczegóły zamówienia:</a></p>Kwota netto: '+kwota+' zł<br>Stawka VAT: '+stawka1v3+' %<br>Do zapłaty: '+zaplata+' zł</br>Przewidywana data dostawy: '+data+'.'
    form.style.backgroundColor='rgb(153, 238, 210)'
    form.style.border='0px solid rgb(153, 238, 210)'
    form.style.boxShadow='0px 0px white'
    }  
 
    formu.addEventListener("submit", forms)