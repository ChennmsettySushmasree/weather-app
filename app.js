
function check(){
	let city = document.getElementById("city").value;
	let place = document.getElementById("place");
	let wind = document.getElementById("wind");
	let humid = document.getElementById("humid");
	let latitude = document.getElementById("latitude");
	let longitude = document.getElementById("longitude");
	let pressure = document.getElementById("pressure");
	let lowTemp = document.getElementById("lowTemp");
	let highTemp = document.getElementById("highTemp");
	let temp = document.getElementById("temp");
	let country = document.getElementById("country");
	let sunRise = document.getElementById("sunRise");
	let sunSet = document.getElementById("sunSet");
	let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0bd79a091ee74c7eb20f7827564936cd`
	fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // console.log(data);
	place.innerHTML=data.name;
	wind.innerHTML=data.wind.speed+" Km/hr";
	humid.innerHTML=data.main.humidity+" gm/km";
	latitude.innerHTML=data.coord.lat+" ° lat";
	longitude.innerHTML=data.coord.lon+" ° long";
	pressure.innerHTML=data.main.pressure+" mb";
	lowTemp.innerHTML=Math.floor(data.main.temp_min-273)+"° C";
	highTemp.innerHTML=Math.floor(data.main.temp_max-273)+"° C";
	temp.innerHTML=Math.floor(data.main.feels_like-273)+"° C";
	country.innerHTML=data.sys.country;
	sunRise.innerHTML=data.sys.sunrise;
	sunSet.innerHTML=data.sys.sunset;
  });
}

