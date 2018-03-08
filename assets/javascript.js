$(document).ready(function(){
//Testing to ensure javascript is linked properly//
//alert("This link works!");

$("submit").click(function(){
    $("#btnContainer").append("<button>Text</button>");

});

//javascript to get 10 images from giphyAPI
//var queryURL = "https://api.giphy.com/v1/gifs/search?q=golden+retreiver&api_key=03BFaIu291Xxikn1zURAMosrPWoDshPT&limit=10";
var api = "https://api.giphy.com/v1/gifs/search";
var apiKey = "&api_key=03BFaIu291Xxikn1zURAMosrPWoDshPT";
var qty = "&limit=10";


$("button").on("click", function () {
  searchValue = $(this).val();
  console.log(searchValue);
  queryURL = api+"?q="+searchValue+apiKey+qty
  //console.log(queryURL);
  //AJAX call to giphy API to retrieve 10 images based on the value of the button (searchValue)//
   $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {    
  
    //console.log(response);
    console.log(queryURL);
    //alert("images were returned!");

    var results = response.data;
    console.log(results);

    for (var i = 0; i < results.length; i++) {
        	
      var imgBox = $("<div class='col-md-4'>");

      var rating = results[i].rating;
      var animatedImage = results[i].images.fixed_height.url;
      var stillImage = results[i].images.fixed_height_small_still.url;
      var showImage = $("<img>");
      var p = $("<p>").text("Rating: " + rating);

      showImage.attr("src", stillImage);
      showImage.addClass("dogImage");
      showImage.attr("data-state", "still");
      showImage.attr("data-still", stillImage);
      showImage.attr("data-animate", animatedImage);
      imgBox.append(p);
      imgBox.append(showImage);
      //$("#gifArea").append(imgBox);
      $("#gifArea").prepend(imgBox);
    }
  });
})

//Click on images executes the animateImg function to make images move
$(document).on("click",".dogImage", animateImg);

//Function changes the data-state attribute of the image (still to animated/animated to still)
function animateImg(){
  var state = $(this).attr("data-state");
  if (state === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
}
}

});