//DOM selection 
let cityName = document.querySelector('.cityName');
const button = document.querySelector('button');
const input = document.querySelector('#input-search');
const temp = document.querySelector('.tempValue');
const description = document.querySelector('.description');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');


const API_KEY = 'a5f6643d32df368b4c55a92fe44c5db0';
let API_URL = 'https://api.openweathermap.org/data/2.5/weather?q=' + input.value +'&appid=a5f6643d32df368b4c55a92fe44c5db0';
    fetch(API_URL)
    .then(res => res.json())
    .then(data => showingData(data))
    .catch(error => console.log("data loading fail"));




button.addEventListener('click', (e)=>{
    e.preventDefault();

})


function showingData(data){
    //data
    const {humidity, temp} = data.main;
    const {name} = data.name;
    console.log(data.name);
}