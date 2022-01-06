function wysok(){
    element = document.getElementById('arena')
    suw = parseInt(document.getElementById('inpwys').value)
    element.style.height=suw+'px'

}

function szer(){
    element = document.getElementById('arena')
    suw = parseInt(document.getElementById('inpsze').value)
    element.style.width=suw+'px'
    col = document.getElementById('c')
    col.style.width=suw+20+'px'
}

function dane(){
    wys1 = parseInt(document.getElementById('inpwys').value)
    miejce1 = document.getElementById('wys')

    sz2 = parseInt(document.getElementById('inpsze').value)
    miejce2 = document.getElementById('sze')
    
    miejce2.innerHTML=sz2
    miejce1.innerHTML=wys1
}

function kolor(){
    element = document.getElementById('arena')
    color = document.getElementById('c').value
    element.style.background=color
    kolor_czcionki1=color[1]
    kolor_czcionki2=color[2]
    if((kolor_czcionki1<8)||(kolor_czcionki2<8)){
        element.style.color='white'
    }else{
        element.style.color='black'
    }

}

function liczenie(){
    litery_male = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m','ą','ę','ż','ź','ó','ł']
    litery_duze = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M','Ą','Ę','Ż','Ź','Ó','Ł']
    liczby_tablica = ['1','2','3','4','5','6','7','8','9','0']
    spec_tablica = ['!','@','$','%','^','#','&','*','(',')',"+",'=','-','[',']','{','}',';',':','"','?','/','<','>','|','_']
    tekst = document.getElementById('arena').value
    dlu = tekst.length
    spacja = 0
    mala = 0
    duza = 0
    wyraz = 0
    liczba = 0
    spec = 0
    for(let i=0;i<dlu;i++){
        //mala, a duza
        for(let y=0;y<litery_male.length;y++){
            if(tekst[i]==litery_male[y]){
                mala=mala+1
            }else if(tekst[i]==litery_duze[y]){
                duza=duza+1
            }
        }
        //liczby
        for(let z=0;z<liczby_tablica.length;z++){
            if(tekst[i]==liczby_tablica[z]){
                 liczba = liczba+1
            }
        }
        //spacje
        if(tekst[i]==' '){
            spacja=spacja+1
        }
        //znaki
        for(let u=0;u<spec_tablica.length;u++){
            if(tekst[i]==spec_tablica[u]){
                 spec = spec+1
            }
        }
        //wyraz
        tak = 0
        for(let y=0;y<litery_male.length;y++){
            if(tekst[i]==litery_male[y]){
                tak=1
            }else if(tekst[i]==litery_duze[y]){
                tak=1
            }
        }
        if((tak==1)&&(tekst[i-1]==' ')){
            wyraz=wyraz+1
        }

    }
    for(let y=0;y<litery_male.length;y++){
        if(tekst[0]==litery_male[y]){
            wyraz=wyraz+1
        }else if(tekst[0]==litery_duze[y]){
            wyraz=wyraz+1
        }
    }
    jest = document.getElementById('stat1')
    if(jest.checked){
        
        sts1();
    }
 

}

function sts1(){
    stater = document.getElementById('statystyki')
    stater.innerHTML='<table><tr><th>Wyrazy</th><td>'+wyraz+'</td></tr><tr><th>Małe litery</th><td>'+mala+'</td></tr><tr><th>Duże litery</th><td>'+duza+'</td></tr><tr><th>Znaki specjalne</th><td>'+spec+'</td></tr><tr><th>Spacje</th><td>'+spacja+'</td></tr><tr><th>Cyfry</th><td>'+liczba+'</td></tr></table>'
}

function sts2(){
    stater = document.getElementById('statystyki')
    stater.innerHTML=''
}

