async function getData(){
    let city_name = document.getElementById("searchbar").value;
    const api_url =`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=e4495218edb833ea67696dbb379d5695`;
    var res=await fetch(api_url);
    var data=await res.json();
    console.log(data.weather)
    document.querySelector('#temp').innerHTML= (data.main.temp/10).toFixed(2) + " °C";
    document.querySelector('#feels_like').innerHTML= (data.main.feels_like/10).toFixed(2) + " °C";
    document.querySelector('#temp_min').innerHTML= (data.main.temp_max/10).toFixed(2) + " °C";
    document.querySelector('#temp_max').innerHTML= (data.main.temp_min/10).toFixed(2) + " °C";
    document.querySelector('#condition').innerHTML=(data.weather[0].main);
    document.querySelector('#city').innerHTML=data.name;

    let pic = document.getElementById("status");
    if(data.weather[0].main=="Clouds"){
        pic.src="Images/Cloud.jpg";
    }
    else if(data.weather[0].main=="Snow"){
        pic.src="Images/Snow.jpg";
    }
    else if(data.weather[0].main=="Clear"){
        pic.src="Images/Clear.jpg";
    }
    else if(data.weather[0].main=="Rain"){
        pic.src="Images/Rain.jpg";
    }
    else if(data.weather[0].main=="Drizzle"){
        pic.src="Images/Drizzle.jpg";
    }
    else if(data.weather[0].main=="Thunderstorm"){
        pic.src="Images/Thunderstorm.jpg";
    }
    else{
        pic.src="Images/Mist.jpg";
    }
}
const time = new Date();
var h=time.getHours();
var image = document.getElementById("status");

async function changeToDark(){
    document.body.style.backgroundColor="#1c1c1c";
    document.body.style.color="#D4AF37";
    // document.querySelector('#status').src="Images/Dark-mode.png";
    // document.getElementById("status").src="Images/Dark-mode.png";
    image.src="Images/Dark-mode.png"; 
}

if (h>=18 || h<6){
    changeToDark();
}