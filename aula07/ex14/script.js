function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `agora são ${hora} horas`
if (hora >= 0 && hora < 12)  {
    img.src = 'img manha.jpg'
    document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde img.jpg'
        document.body.style.background = '#b9846f'
    } else {
        img.src = ' noite img.jpg'
        document.body.style.background = '#515154'
}
}

 /*msg.innerHTML = `agora sao ${hora} horas`
if (hora >= 0 && hora < 12) {
    //bom dia
    img.src = 'img manha.jpg'
    document.body.style.background = '#e2cd9f'
} else if (hora >= 12 && hora < 18) {
    //boa tarde
    img.src = 'img tarde.jpg'
    document.body.style.background = '#b9846f'
} else {
    //boa noite
    img.src = 'img noite.jpg'
    document.body.style.background = '#515154'
}
*/
