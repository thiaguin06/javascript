
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inLista(n, l){
   if (l.indexOf(Number(n)) != -1){
    return true
   } else{
    return false
   }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        atualizarContagem()
        
    } else{
       const errorMessage = document.getElementById('error-message')
       errorMessage.textContent = 'Erro! Digite um número válido'
    }
    num.value = ''
    num.focus()
}

function atualizarContagem() {
    const contagem = document.getElementById('contagem')
    contagem.textContent = `Quantidade de números adicionados: ${valores.length}`
}

let button = document.querySelector('input[type="button"]');
button.addEventListener('click', adicionar);
 