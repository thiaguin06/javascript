function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'bebe img.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'euuu.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'homem img.jpg')
            } else {
                img.setAttribute('src', 'velho img.jpg')
            }
            } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'bebex img.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem m img.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'mulher img.jpg')
            } else {
                img.setAttribute('src', 'velha img.jpg')
            }
            
        
        }
        
            res.style.textAlign = 'center' 
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
            res.appendChild(img)
        }   
    
    
    }


   






   /* var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //crianca
                img.setAttribute('src', 'crianca-homem.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'jovem-homem.png') */ 
