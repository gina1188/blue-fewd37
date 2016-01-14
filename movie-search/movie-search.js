// This is what the data returning from IMDB will look like:
/*var sampleResult = {
  "Search": [
    {
      "Title": "Cool Runnings",
      "Type": "movie",
      "Year": "1993",
      "imdbID": "tt0106611"
    }
  ]
}
*/
// Attach an event listener to the form submit (using jQuery)
$("#movie-search-form").submit(formSubmitted);

// Handle the form submission: go to OMDB and get results
function formSubmitted(event) {
  event.preventDefault();
  var url = "http://omdbapi.com/?s=" + $("#query").val();
  $.get(url, resultsReceived);
}

function resultsReceived(results) {
  //var formElement = document.getElementById("movie-search-form");

// var $li = $("#movies");
for (var i = 0; i < results["Search"].length; i++) {

    var movieTitle = results["Search"][i]["Title"];
    var movieID = results["Search"][i]["imdbID"];
    var movieRelease = results["Search"][i]["Year"];
    var moviePoster = results["Search"][i]["Poster"];

    var $newLi = $("<li>");
    $newLi.addClass("movie");
    $newLi.appendTo("ul");

    var $newPoster = $("<img>");
    $newPoster.attr("src", moviePoster);
    $newLi.append($newPoster);

    var $titleDiv = $("<div>");
    $titleDiv.addClass("movie-title");
    $newLi.append($titleDiv);

    var $yearDiv = $("<div>");
    $yearDiv.addClass("movie-release-date");
    $newLi.append($yearDiv);

    var $aTag = $("<a>");
    $aTag.attr('href',"http://www.imdb.com/title/"+ movieID);
    $aTag.text(movieTitle);
    $titleDiv.append($aTag);

    var $rYear = $("<p>");
    $rYear.text(movieRelease);
    $yearDiv.append($rYear);

/*var list = document.querySelector("#movies");
for (var i = 0; i < results["Search"].length; i++) {

     var movieTitle = results["Search"][i]["Title"];
     var movieID = results["Search"][i]["imdbID"];
     var movieRelease = results["Search"][i]["Year"];
     var moviePoster = results["Search"][i]["Poster"];

     var newLi = document.createElement('li');
     newLi.className= "movie"
     list.appendChild(newLi);

     var newPoster = document.createElement("img");
     newPoster.setAttribute("src", moviePoster);
     newLi.appendChild(newPoster);


     var titleDiv = document.createElement("div");
     titleDiv.className = "movie-title";
     newLi.appendChild(titleDiv);

     var yearDiv = document.createElement("div");
     yearDiv.className = "movie-release-date";
     newLi.appendChild(yearDiv);

     var aTag = document.createElement('a');
     aTag.setAttribute('href',"http://www.imdb.com/title/"+ movieID);
     aTag.textContent = movieTitle;
     titleDiv.appendChild(aTag);

     var rYear = document.createElement('p');
     rYear.textContent = movieRelease;
     yearDiv.appendChild(rYear);
*/

     searched=true;
  }
}
