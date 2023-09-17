const apikey="5b8124c5ee03f1fcaaa821a08690c361"
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchbox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
async function checkweather(city)
{
const response=await fetch (apiurl+city+`&appid=${apikey}`)
var data =await response.json();
console.log(data)
document.querySelector(".city").innerHTML=data.name
document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C"
document.querySelector(".humidity").innerHTML=data.main.humidity+"%"
document.querySelector(".wind").innerHTML=data.wind.speed+"km/h"

}
searchBtn.addEventListener("click",()=>{

checkweather(searchbox.value)
})