function tabuada (){
    var num = document.getElementById('txtn').value
    var tab = document.getElementById('seltab')
    tab.innerHTML = ''
    for(var c = 1; c <= 10; c++){
        var item = document.createElement('option')
        item.text = `${num} x ${c} = ${num * c}`
        tab.appendChild(item)
    }
}