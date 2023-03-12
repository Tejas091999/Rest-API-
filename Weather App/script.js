let weather ={
  "apiKey":"de460b241aec3bd317a10c0c701ccb5b",
  fetchWeather:function(city){
  fetch("https://api.openweathermap.org/data/2.5/weather?+city+ &appid=de460b241aec3bd317a10c0c701ccb5b")
  .then((response)=>response.json())
  .then((data)=>this.displayWeather(data))
  },
  displayWeather:function(data){
    const {name}=data;
    const {icon,description}=data.weather[0];
    const {temp,humidity}=data.main;
    const {speed} = data.wind;
    console.log(name,icon,description,temp,humidity,speed)
    document.querySelector(".city").innerText="Weather in" + name;
    document.querySelector(".icon").innerText=icon;
    document.querySelector(".descripton").innerText=description;
    document.querySelector(".humidity").innerText=humidity;
    document.querySelector(".temp").innerText=temp;
    document.querySelector(".wind").innerText=wind;
  },
  search:function(){
    this.fetchWeather(document.querySelector(".search-bar").value)
  }
}
document.querySelector(".search button").addEventListener("click",function(){
  weather.search()
})