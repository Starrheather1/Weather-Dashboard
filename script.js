var weather = {
    "apikey": "50c9640c4cmsha715b76c75b31a9p1c854bjsn08b9271cd4da",
    "apikey2": "50c9640c4cmsha715b76c75b31a9p1c854bjsn08b9271cd4da"
}

let button = document.getElementById("trigger")

var url = ""

function search() {
    let input = document.getElementById("value").value
    let input2 = input.trim();
    url = 'https://open-weather13.p.rapidapi.com/city/' + input2;
    let urls = 'https://open-weather13.p.rapidapi.com/city/denver';
    //console.log("I work", url)

    const settings = {
        async: true,
        crossDomain: true,
        url: urls, 
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '50c9640c4cmsha715b76c75b31a9p1c854bjsn08b9271cd4da',
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    };
    
    $.ajax(settings).done(function (response) {
    
        console.log(response.weather[0].description);
    });
}


button.addEventListener("click", search)



