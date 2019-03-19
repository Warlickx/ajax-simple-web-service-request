document.getElementById("quoteButton").addEventListener('mousedown', newQuote);

function newQuote() {
    let request = new XMLHttpRequest();
    let url = "https://thatsthespir.it/api"

    request.open("GET", url);
    request.send();
    if (!request) {
        alert('?')
    return false
    }
    request.onreadystatechange = function() {
        alertContents(request);
    };

    function alertContents(request) {
        if (request.readyState == XMLHttpRequest.DONE) {
            if (request.status == 200) {
                let recolt = JSON.parse(request.responseText);
                document.getElementById('quote').innerHTML = recolt["quote"];
                document.getElementById('img').innerHTML = `<img class="avatar" src = ${recolt["photo"]}/>`;
                document.getElementById('author').innerHTML = recolt["author"];
            }
            else {
                alert('Erreur');
            }
        }
    }
}