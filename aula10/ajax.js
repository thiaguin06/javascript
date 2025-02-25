 /*var xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.exemplo.com/dados", true);
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText); // Resposta do servidor
    }
};
xhr.send();
*/
fetch("https://api.exemplo.com/dados")
  .then(response => response.json()) //
  .then(data => console.log(data))
  .catch(error => console.error("Erro:", error));

  