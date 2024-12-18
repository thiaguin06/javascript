var agr = new Date()
var h = agr.getHours
console.log(`a hora atual e ${h} horas`)
if (h < 12) {
    console.log('bom dia')
} else if (h <= 18) {
    console.log('boa tarde')
} else{
    console.log('boa noite')
}
