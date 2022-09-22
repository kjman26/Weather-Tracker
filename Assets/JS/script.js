var APIKey = "9073278d26315ddad5d7b4c589fbb8c2";
var city = $('#cities').val();
var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

var weatherParams = [
  {
    coord: '',
    weather: '',
    main: '',
    clouds: '',
  }
];
//fetch request
function getWeather(){
    fetch(queryUrl)
      .then(response => {
        return response.json();
          })
      .then(data => {
        localStorage.setItem('practice', JSON.stringify(data))
         console.log(data)
      });
 };

 //on click function
$('#search').on("click", getWeather);
  


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