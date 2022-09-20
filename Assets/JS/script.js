var searchInputEl = document.getElementById("#cities")
var formatInputEl = document.getElementById("format-input")
var searchBtnEl = document.getElementById("search-btn")
var APIKey = "2e989b2bac28621c7288cf154f0033f0"
var city = "#cities"; 

// get parameters
//5380748
/*api.openweathermap.org/data/2.5/weather?q={city}&appid={2e989b2bac28621c7288cf154f0033f0} */

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey ;

    //JSON.stringify(queryURL, null, "    ");
    apiSearch(searchTerm, format) 
  
    fetch(requestUrl)
      .then(function(response){
        if(response.ok){
            console.log("error")
        } else {
            return response.json()
        }
      })
      .then(function(data) {
        if (data){
            printData(data)
      }
      })
