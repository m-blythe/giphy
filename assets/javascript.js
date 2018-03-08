//Testing to ensure javascript is linked properly//
//alert("This link works!");

//javascript to get 10 images from giphyAPI
//var queryURL = "https://api.giphy.com/v1/gifs/search?q=golden+retreiver&api_key=03BFaIu291Xxikn1zURAMosrPWoDshPT&limit=10";
var api = "https://api.giphy.com/v1/gifs/search";
var apiKey = "&api_key=03BFaIu291Xxikn1zURAMosrPWoDshPT";
var qty = "&limit=10";


$("button").on("click", function () {
  searchValue = $(this).val();
  console.log(searchValue);
  queryURL = api+"?q="+searchValue+apiKey+qty
  console.log(queryURL);
  
   $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {    
  
    console.log(response);
    console.log(queryURL);
    alert("images were returned!");

  });

})