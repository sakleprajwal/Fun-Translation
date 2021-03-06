var outputArea = document.querySelector("#output")

function generateUrl(text){
    return "https://api.funtranslations.com/translate/yoda.json?text=" + text.value
}

function clickHandler(){
    var inputText = document.getElementById("input");

    fetch(generateUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText =  json.contents.translated;
            outputArea.innerText = translatedText;
            //  alert(translatedText)
        })
        .catch(error => {
            alert("Too Many Requests: Rate limit of 5 requests per hour exceeded.")
        })   
}

