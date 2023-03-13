let country = {
  "apiKey":"#",
fetchCountry: function(){
  fetch("#")
  .then((response)=>response.json())
  .then((data)=>this.displayInfo(data)
        },
  displayInfo:function(data){
    const {capital} = data;
    const{continent} = data.main
    const{population}=data.main
    const{currency}=data.main
    console.log(capital,continent,population,currency)
    document.querySelector(".capital").innerText=capital;
    document.querySelector(".continent").innerText=continent;
    document.querySelector(".population").innerText=population;
    document.QuerySelector(".currency").innerText=currency;
  },
  search:function search(){
    this.fetchCountry(document.querySelector(".btn"))
  }
  document.querySelector(".btn").addEventListener("click",function(){
  country.search
  })
}