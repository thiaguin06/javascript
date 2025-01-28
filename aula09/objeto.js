/*let amigo = {nome : 'thiago',
sexo: 'm',
idade:'18',
peso: '55.9',
engorda(p=0){
    console.log('engordou')
    this.peso += p
}}
amigo.engorda(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)
*/
let amigo = {nome : 'thiago',
sexo: 'm',
idade:'18',
peso: 55.9,
engorda(p=0){
    console.log('engordou')
    this.peso += p
}}
amigo.engorda(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)