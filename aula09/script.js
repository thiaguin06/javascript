let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('#res')
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
   }else{
    return false
   }
}

function adicionar(){
    if (isNumero(num.value) && !inList(num.value)) {

    }else{
       window.alert('Erro! Digite um número válido')
    }
}