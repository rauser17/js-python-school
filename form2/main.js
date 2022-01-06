  const formu = document.getElementById('formularz')

  function forms(event){
    event.preventDefault()

    var imie = document.getElementById("imie").value
    var nazwisko = document.getElementById("nazwisko").value
    var nazwa_fr = document.getElementById("nazwa_fr").value
    var ulica = document.getElementById("ulica").value
    var kod = document.getElementById("kod").value
    var nr = document.getElementById("nr").value
    var miejscowosc = document.getElementById("miejscowosc").value

    //Pan^Pani
    if(imie[(imie.length)-1]=='a'){
        plec1="Panią"
        plec2="Pani"
    }else{
        plec1="Pana"
        plec2="Pan"
    }

    //id
    var id=''
    for(let i=1; i<=9;i++){
        if(i==1){
            id+=imie[0]
        }

        if(i==2){
            id+=nazwisko[nazwisko.length-1]
        }

        if(i==3){
            id+='-'
        }
        if(i>3&&i<7){
            id+=kod[i-1]
        }

        if(i==7){
            for(let g=0; g<=2; g++){
                id+=miejscowosc[g]
            }
        }
    }   

    id = id.toUpperCase()

    //miejsce i kiedy
    var f = document.getElementsByName('kwota')
    for (const rb of f) {
        if (rb.checked) {
            var obrot = rb.value
            break;
        }}

    if(obrot==1){
        var data_szkolenia="23-03-2020"
        var miejsc_szkolenia="Bydgoszczy"
    }

    if(obrot==2){
        var data_szkolenia="13-04-2020"
        var miejsc_szkolenia="Gdańsku"
    }

    if(obrot==3){
        var data_szkolenia="05-05-2020"
        var miejsc_szkolenia="Poznaniu"
    }

    if(obrot==4){
        var data_szkolenia="03-06-2020"
        var miejsc_szkolenia="Warszawie"
    }
    var uczes = document.getElementById("uczestnik")
    var miejsce = document.createElement("p")
        miejsce.id="miejsce"
        miejsce.innerHTML=imie+" "+nazwisko+'</br>'+nazwa_fr+'</br> Ul. '+ulica+' '+nr+'</br>'+kod+' '+miejscowosc
        uczes.appendChild(miejsce)

   var str = document.getElementById("maciej")
    var miejsce0 = document.createElement("p")
        miejsce0.id="miejsce0"
        miejsce0.innerHTML="Plajta Macieja sp. z o. o.</br>Ul. Ciemna 56</br> 55-168 Upadlewo</br>"
        str.appendChild(miejsce0)

        var tresc = document.getElementById("tresc")
        var  miejsce1 = document.createElement("p")
        miejsce1.id="tresc"
        miejsce1.innerHTML="Identyfikator zgłoszenia: "+id+"<br>Mamy zaszczyt zaprosić "+plec1+" na szkolenie, które odbędzie się dnia: "+data_szkolenia+" w "+miejsc_szkolenia+" o godzinie 10:00.<br>Z niniejszym zaproszeniem należy stawić się w dniu szkolenie ok. 1 godzinę wcześniej w celu rejestracji uczestników.<br>Po szkoleniu otrzyma "+plec2+" certyfikat autoryzowanego dystrybutoranaszych produktów."
        tresc.appendChild(miejsce1) 

        var str2 = document.getElementById("blup")
        var miejsce3 = document.createElement("p")
            miejsce3.id="miejsce0"
            miejsce3.innerHTML="Prezes zarządu<br>mgr Maciej Liczygroszek"
            str2.appendChild(miejsce3)

        document.getElementById("wys").disabled=true
    }  
 

    formu.addEventListener("submit", forms)
