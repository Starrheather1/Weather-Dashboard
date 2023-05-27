const apikey = "af083a8a81b23e55af7725aa737f4eb4"
const fetchWeather = function (city='New York') {
    fetch("https://api.openweathermap.org/data/2.5/forecast?q="+city+ "&appid=" + apikey+"&units=metric")
        .then(function(response){
            return response.json()
        })
        .then(function(data){
           console.log(data) ///logging to the console
           displayWeather(data.list[0],data.city.name)
           displayForcasts(data.list)
        } );
}

const displayWeather = function (data,name) {
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const {dt_txt}=data;
    const date=dt_txt.substring(0,10);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
    document.querySelector(".date").innerText = date
    //console.log(name, icon, description, temp, humidity, speed);
}
const displayForcasts=function(list){
  const forcastsEl=document.querySelector(".forcasts") ///bind html element to javascript
  forcastsEl.innerHTML="";//clear previous forcasts 

  for(let i=8;i<40;i +=8){
    const containerEl=document.createElement("div")
    
    const tempEl=document.createElement("div")
    const humidityEl=document.createElement("div")
    const windEl=document.createElement("div")
    const dateEl=document.createElement("div")
    const descriptionEl=document.createElement("p")
    const iconEl=document.createElement("img")

    const { icon, description } = list[i].weather[0];
    const { temp, humidity } = list[i].main;
    const { speed } = list[i].wind;
    const {dt_txt}=list[i];
    const date=dt_txt.substring(0,10);

    tempEl.innerText=temp 
    humidityEl.innerText=humidity
    windEl.innerText=speed 
    dateEl.innerText=date
    descriptionEl.innerText=description
    iconEl.src="https://openweathermap.org/img/wn/" + icon + ".png";

    containerEl.appendChild(descriptionEl)
    containerEl.appendChild(dateEl)
    containerEl.appendChild(iconEl)
    containerEl.appendChild(tempEl)
    containerEl.appendChild(windEl)
  
    containerEl.style.margin="20px"
    containerEl.style.borderTop="1px solid white"
    forcastsEl.appendChild(containerEl)
  }
}

const addToLocalStorage=(cityName)=>{
    let local=localStorage.getItem("history")
    let history
    if(local){
        history=JSON.parse(local)
    }else{
        history={}
    }
    history[cityName]=true;
    localStorage.setItem("history",JSON.stringify(history))
    renderLocalStorageHistory()
}

const renderLocalStorageHistory=()=>{
const historyListEl=document.getElementById("history-list")
let local=localStorage.getItem("history")
let history
if(local){
    history=JSON.parse(local)
}else{
    history={}
}
historyListEl.innerHTML="";
const optionEl=document.createElement("option")
optionEl.innerText="---";
optionEl.value="";
historyListEl.appendChild(optionEl)

for(let key in history){
 const optionEl2=document.createElement("option")
optionEl2.innerText=key;
optionEl2.value=key;
historyListEl.appendChild(optionEl2)

}
}

const  formEl = document.querySelector(".search")
const formEl2=document.querySelector(".history")
formEl.addEventListener("submit", search)
formEl2.addEventListener("submit",searchHistory)

function search(event) {
    event.preventDefault()
    let cityName = document.getElementById("value").value.trim()
    addToLocalStorage(cityName)
    fetchWeather(cityName)
}
function searchHistory(event){
    event.preventDefault()
    let cityName = document.getElementById("history-list").value.trim()
    fetchWeather(cityName)
}

fetchWeather();
renderLocalStorageHistory();
