const songs = {
  "apikey": "#",
  fetchSongs: function(songs) {
    fetch("https://api.openweathermap.org/data/2.5/ &appid=de460b241aec3bd317a10c0c701ccb5b")
      .then(response => response(data))
      .then((data) => this.displaylyrics(data))
  },
  displayWeather: function(data) {
    const { name } = data;
    const { icon, description } = data.lyrics[0];
    const { temp, humidity } = data.main;
    const { speed } = data;
    console.log(name, icon, description, temp, humidity, speed)
    document.querySelector(".city").innerText = "Weather in" + name;
  },
  search: function() {
    this.fetchSongs(document.querySelector(".search-bar").value)
  }
}
document.querySelector(".search button").addEventListener("click", function() {
  songs.search()
}