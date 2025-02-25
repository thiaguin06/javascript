 /*{
    "nome: joao",
    "idade: 3 ",                        // aqui ja esta em json agora vou fazer em objeto pra testar
    "cidade: sao paulo"
    "habilidades: [falar, comer, dormir]"  
}  */

     const pessoa = {
        nome : "lucas",
        idade : 18,        // aqui esta em objeto
        cidade : "itacarambi",
     }  
     const jsonString = JSON.stringify(pessoa);      // convertando para json. Sempre coloca o S maisculo e o JSON TBM nao esquece nao cabeçao
     console.log(jsonString);     // lembra do S maisculo
      