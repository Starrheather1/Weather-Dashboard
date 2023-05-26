var weather = {
    "apikey": "50c9640c4cmsha715b76c75b31a9p1c854bjsn08b9271cd4da",
    "apikey2": "50c9640c4cmsha715b76c75b31a9p1c854bjsn08b9271cd4da"

    // const url = 'https://open-weather13.p.rapidapi.com/city/landon';
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '50c9640c4cmsha715b76c75b31a9p1c854bjsn08b9271cd4da',
    //         'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    //     }
    // };

    // try {
    //     const response = await fetch(url, options);
    //     const result = await response.text();
    //     console.log(result);
    // } catch(error) {
    //     console.error(error);
}

const fetchweather = function (city) {
    fetch("https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}" + city + weather.apikey)

        .then((response) => response.json())
        .then((data) => console.log(data));

}

const displayWeather = function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";



    console.log(name, icon, description, temp, humidity, speed);

}


    let formEl = document.querySelector(".search")
let button = document.getElementById("trigger")

var url = ""

function search(event) {
    event.preventDefault()
    let input = document.getElementById("value").value
    let input2 = input.trim();
    url = 'https://open-weather13.p.rapidapi.com/city/' + input2;
    let urls = 'https://open-weather13.p.rapidapi.com/city/denver';
    //console.log("I work", url)

    // const settings = {
    //     async: true,
    //     crossDomain: true,
    //     url: urls, 
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '50c9640c4cmsha715b76c75b31a9p1c854bjsn08b9271cd4da',
    //         'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
    //     }
    // };
    //refactor to fetch


    // $.ajax(settings).done(function (response) {



    console.log(response.weather[0].description);
    // });
}


formEl.addEventListener("submit", search)


