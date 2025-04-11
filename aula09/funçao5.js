function fatorial (n){
    let faat = 1
    for(var c = n; c > 1; c--){
        faat *= c
    }
    return faat
}
console.log(fatorial(6))
