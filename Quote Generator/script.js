let quotes ={
  "apiKey":"de460b241aec3bd317a10234701ccb5b",
  fetchQuote:function(quotes){
  fetch("https://www.stands4.com/services/v2/phrases.php?uid=1001&tokenid=tk324324&phrase=buckle+up&format=xml")
  .then((response)=>response.json())
  .then((data)=>this.displayQuotes(data))
  },
  displayQuotes:function(data){
    const {quote}=data;
    const {example}=data.[0];
    const {author}=data.main;
    document.getElementById("quote").innerText= quote;
    document.getElementById("writer").innerText=author;
    document.getElementById("example").innerText=example;
  }
}
document.getElementById("btn").addEventListener("click",search)
})