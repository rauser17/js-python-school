
function set1(button) {
    let zegar = document.getElementById("zegar")
    let body = document.body
    let ustawienia = document.getElementById("ustawienia")
    let notka = document.getElementById("notka")
    let el_zegar = document.getElementById("el_zegar")
    el_zegar.style.borderColor="black"
    notka.style.color="black"
    zegar.style.color="black"
    zegar.style.backgroundColor="cadetblue"
    zegar.style.borderColor="black"
    body.style.backgroundColor="blanchedalmond"
    ustawienia.style.backgroundColor="cornsilk"
    ustawienia.style.borderColor="black"
    }

function set2(button) {
    let zegar = document.getElementById("zegar")
    let body = document.body
    let ustawienia = document.getElementById("ustawienia")
    let notka = document.getElementById("notka")
    let el_zegar = document.getElementById("el_zegar")
    el_zegar.style.borderColor="#512A00"
    notka.style.color="#512A00"
    zegar.style.color="#512A00"
    zegar.style.backgroundColor="#F9D17C"
    zegar.style.borderColor="#512A00"
    body.style.backgroundColor="#FEFFD7"
    ustawienia.style.backgroundColor="#FFFFB3"
    ustawienia.style.borderColor="#512A00"
        }

function set3(button) {
    let zegar = document.getElementById("zegar")
    let body = document.body
    let ustawienia = document.getElementById("ustawienia")
    let notka = document.getElementById("notka")
    let el_zegar = document.getElementById("el_zegar")
    el_zegar.style.borderColor="#A64949"
    notka.style.color="#A64949"
    zegar.style.color="#A64949"
    zegar.style.backgroundColor="#E4B699"
    zegar.style.borderColor="#A64949"
    body.style.backgroundColor="#f6e7db"
    ustawienia.style.backgroundColor="#E8C49A"
    ustawienia.style.borderColor="#A64949"
} 

function font1(button) {
    let body = document.body
    body.style.fontFamily="Arial, Helvetica, sans-serif"
} 

function font2(button) {
    let body = document.body
    body.style.fontFamily="'Courier New', Courier, monospace"
} 

function font3(button) {
    let body = document.body
    body.style.fontFamily="'Times New Roman', Times, serif"
} 

function noP(button) {
    let zegar = document.getElementById("zegar")
    zegar.style.backgroundImage="url()"
} 

function P1(button) {
    let zegar = document.getElementById("zegar")
    zegar.style.backgroundImage="url(1.jpg)"
} 


function P2(button) {
    let zegar = document.getElementById("zegar")
    zegar.style.backgroundImage="url(2.jpg)"
} 


function P3(button) {
    let zegar = document.getElementById("zegar")
    zegar.style.backgroundImage="url(3.jpg)"
} 

function arabic(button){
    let n1 = document.getElementById("numer1")
    let n2 = document.getElementById("numer2")
    let n3 = document.getElementById("numer3")
    let n4 = document.getElementById("numer4")
    let n5 = document.getElementById("numer5")
    let n6 = document.getElementById("numer6")
    let n7 = document.getElementById("numer7")
    let n8 = document.getElementById("numer8")
    let n9 = document.getElementById("numer9")
    let n10 = document.getElementById("numer10")
    let n11= document.getElementById("numer11")
    let n12= document.getElementById("numer12")

    n1.innerHTML="1"
    n2.innerHTML="2"
    n3.innerHTML="3"
    n4.innerHTML="4"
    n5.innerHTML="5"
    n6.innerHTML="6"
    n7.innerHTML="7"
    n8.innerHTML="8"
    n9.innerHTML="9"
    n10.innerHTML="10"
    n11.innerHTML="11"
    n12.innerHTML="12"

}

function roman(button){
    let n1 = document.getElementById("numer1")
    let n2 = document.getElementById("numer2")
    let n3 = document.getElementById("numer3")
    let n4 = document.getElementById("numer4")
    let n5 = document.getElementById("numer5")
    let n6 = document.getElementById("numer6")
    let n7 = document.getElementById("numer7")
    let n8 = document.getElementById("numer8")
    let n9 = document.getElementById("numer9")
    let n10 = document.getElementById("numer10")
    let n11= document.getElementById("numer11")
    let n12= document.getElementById("numer12")

    n1.innerHTML="I"
    n2.innerHTML="II"
    n3.innerHTML="III"
    n4.innerHTML="IV"
    n5.innerHTML="V"
    n6.innerHTML="VI"
    n7.innerHTML="VII"
    n8.innerHTML="VIII"
    n9.innerHTML="IX"
    n10.innerHTML="X"
    n11.innerHTML="XI"
    n12.innerHTML="XII"

}