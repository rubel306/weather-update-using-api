//DOM selection 
let cityName = document.querySelector('.cityName');
const button = document.querySelector('button');
const input = document.querySelector('#input-search');
const temp = document.querySelector('.tempValue');
const description = document.querySelector('.description');
const humidity = document.querySelector('.humidity span');
const wind = document.querySelector('.wind span');
const icon = document.querySelector('.icon');



button.addEventListener('click', (e)=>{
    e.preventDefault();

    
    const API_KEY = 'a5f6643d32df368b4c55a92fe44c5db0';
    let API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=' + input.value +'&appid=a5f6643d32df368b4c55a92fe44c5db0';
        fetch(API_URL)
        .then(res => res.json())
        .then(data => showingData(data))
        .catch(error => console.log("data loading fail"));


        function showingData(data){
            //data
            const {humidity, temp} = data.main;
            const {name} = data;
            const {speed} = data.wind;
            const {description, icon} = data.weather[0];
            //adding data
            cityName.innerText = name;
            description.innerText = data.weather[0].description;
            humidity.innerText = data.main.humidity;
            wind.innerText = data.wind.speed;
            icon.innerText = data.weather[0].icon;
            temp.innerText = data.main.temp;


            console.log(data);
        }




})

