const url = 'https://blockchain.info/ticker';

//request

let req = new XMLHttpRequest();
req.open('GET',url);
req.responseType = 'json';
req.send();


req.onload = function() {
    if (req.readyState === XMLHttpRequest.DONE) {
        if(req.status === 200) {
            let reponse = req.response;
            let prixEuro = reponse.EUR.last;
            document.querySelector('#price_label').textContent = prixEuro;
        }
        else {
            alert('un probleme est intervenu');
        }
    }
}
