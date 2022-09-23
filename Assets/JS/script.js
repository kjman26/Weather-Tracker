var APIKey = "9073278d26315ddad5d7b4c589fbb8c2";
var city = $('#cities').val();
// var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;


// var weatherThis = [
//   {
//     main: '',
//     description: '',
//     icon: [],
//   }
// ];




//fetch request
function getWeather(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=" + APIKey)
      .then(response => {
        return response.json();
          })
      .then(data => {
        localStorage.setItem('practice', JSON.stringify(data))

        console.log(JSON.stringify(data))

        document.querySelector('#cityName').innerText = data.name
        document.querySelector("#weatherInfo") = data.weather
        // ,(JSON.stringify(data.name))
      
      
        console.log(weatherThis)

      });
      // .then(data.main => {
        
      // }
 };

 //on click function
$('#search').on("click", getWeather);
console.log(city)




          // localStorage.setItem(city, response)
          // console.log(response)
      //   } else {
      //       return response.json()
      //   }
      // });
      // .then(function(data) {
        //   if (data){
          //       printData(data)
          //