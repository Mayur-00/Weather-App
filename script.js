
let search = document.getElementById("search")
let btn = document.getElementById("btn")
let APIKEY ="e53317bf5a15f51dda6b353397f48255"
let API = "https://api.openweathermap.org/data/2.5/weather?q="
const searchbox = document.querySelector("#search")
const searchboxbtn = document.querySelector("#btn")

// °C

async function fecthApi(city){
    let response = await fetch(API+ city +`&appid=${APIKEY}`);
    let data = await response.json();
    console.log(data);

    updateWeather(data)
}

function updateWeather(data){
    document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp-273.15)}°c`;
    document.querySelector(".humid").innerHTML = `${data.main.humidity}% `
    document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h `
    document.querySelector(".city").innerHTML = `${data.name}`

    if(data.weather[0].main =="Haze"){
        document.querySelector(".weather-image").innerHTML=`<img src="/images/mist.png" alt="">`
    }else if(data.weather[0].main =="Clear"){
        document.querySelector(".weather-image").innerHTML=`<img src="/images/clear.png" alt="">`
    }else if(data.weather[0].main =="Clouds"){
        document.querySelector(".weather-image").innerHTML=`<img src="/images/clouds.png" alt="">`
    }else if(data.weather[0].main =="Snow"){
        document.querySelector(".weather-image").innerHTML=`<img src="/images/snow.png" alt="">`
    }else if(data.weather[0].main =="Rain"){
        document.querySelector(".weather-image").innerHTML=`<img src="/images/rain.png" alt="">`
    }
    searchbox.value =""
}

searchboxbtn.addEventListener('click',()=>{
    fecthApi(searchbox.value)


})
