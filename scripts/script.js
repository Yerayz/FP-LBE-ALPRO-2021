// alert('test')
function handleClick() {
    alert('Test tombol 123')
}

// function navButton(button: HTMLElement) {
//     if button.class
// }

const homebtn = document.getElementById('navhome')
const expbtn = document.getElementById('navexp')
const edubtn = document.getElementById('navedu')
const contactbtn = document.getElementById('navcontact')

homebtn.onclick = homebtn.className = "navbarbtn currpg"
expbtn.onclick = expbtn.className = "navbarbtn currpg"
edubtn.onclick = edubtn.className = "navbarbtn currpg"
contactbtn.onclick = contactbtn.className = "navbarbtn currpg"

const button = document.getElementById('bncbtn')
button.onclick = function() {
    location.href = "#exp"
}

console.log('sampe sini')