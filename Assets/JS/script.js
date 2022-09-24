var APIKey = "9073278d26315ddad5d7b4c589fbb8c2";





// get city
// function getCity(){
  
//   fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=" + APIKey)
//   console.log(city)
// }
//fetch request
function getWeather(){
    let city = $('#cities').val();
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey)
      .then(response => {
        return response.json();
          })
      .then(data => {
        localStorage.setItem('practice', JSON.stringify(data))

        console.log(JSON.stringify(data.main))
// changing text content
        document.querySelector('#cityName').innerText = data.name
        document.querySelector("#weatherInfo").innerText = JSON.stringify(data.weather[0].description)
       
         
        // let icon = "http://openweathermap.org/img/wn/" + icon + ".png"
        // document.querySelector("#icon").innerText = 
        console.log(data.weather[0].icon)


        });
      // .then(data.main => {
      // $('#icon').attr((
      //     "src" = "http://openweathermap.org/img/wn/" + icon + ".png"

      //   ))
      
      // }
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