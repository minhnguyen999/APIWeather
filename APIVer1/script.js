var request = new XMLHttpRequest();
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q=toronto&units=metric&APPID=bf929377557908a73fa97f9c04ae7963');
    request.send();
    request.onload = function(){
        var response = request.response;
        var parsedData = JSON.parse(response);
        console.log(parsedData);
        var city = document.querySelector('.city');
        city.innerText = parsedData.name + ', ' + parsedData.sys.country;
        var temp = document.querySelector('.temp');
        temp.innerText =parsedData.main.temp + "°C";
        var wind = document.querySelector('.wind');
        wind.innerText = "Wind Speed: " + parsedData.wind.speed + "km/h";
        var feel = document.querySelector('.feel');
        feel.innerText = "Feels like: " + parsedData.main.feels_like + "°C";
        var description = document.querySelector('.weather');
        description.innerText = parsedData.weather[0].description;
        var maxmin = document.querySelector('.maxmin');
        maxmin.innerText = "Temp Max: "+ parsedData.main.temp_max + "°C" + " - " +"Temp Min: "+ parsedData.main.temp_min+ "°C";
        var icon = parsedData.weather[0].icon;
        var imageURL = 'https://openweathermap.org/img/wn/' + icon + '@2x.png';
        var demo = document.querySelector('.demo');
        demo.setAttribute('src', imageURL);

        request.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?q=toronto&units=metric&appid=bf929377557908a73fa97f9c04ae7963');
        request.send();
        request.onload = function(){
            var response1 = request.response;
            var parsedData1 = JSON.parse(response1);
            console.log(parsedData1);
            var date1 = document.querySelector('.date1');
            date1.innerText = parsedData1.list[3].dt_txt;


            var date13 = document.querySelector('.date13');
            date13.innerText = parsedData1.list[3].dt_txt;
            var date15 = document.querySelector('.date15');
            date15.innerText = parsedData1.list[5].dt_txt;
            var date17 = document.querySelector('.date17');
            date17.innerText = parsedData1.list[7].dt_txt;
            var date19 = document.querySelector('.date19');
            date19.innerText = parsedData1.list[9].dt_txt;
            var date21 = document.querySelector('.date21');
            date21.innerText = parsedData1.list[11].dt_txt;
            

            var date2 = document.querySelector('.date2');
            date2.innerText = parsedData1.list[11].dt_txt;
            var date3 = document.querySelector('.date3');
            date3.innerText = parsedData1.list[19].dt_txt;
            var date4 = document.querySelector('.date4');
            date4.innerText = parsedData1.list[27].dt_txt;
            var date5 = document.querySelector('.date5');
            date5.innerText = parsedData1.list[35].dt_txt;
            var description1 = document.querySelector('.weather1');
            description1.innerText = parsedData1.list[3].weather[0].description;


            var description13 = document.querySelector('.weather13');
            description13.innerText = parsedData1.list[3].weather[0].description;
            var description15 = document.querySelector('.weather15');
            description15.innerText = parsedData1.list[5].weather[0].description;
            var description17 = document.querySelector('.weather17');
            description17.innerText = parsedData1.list[7].weather[0].description;
            var description19 = document.querySelector('.weather19');
            description19.innerText = parsedData1.list[9].weather[0].description;
            var description21 = document.querySelector('.weather21');
            description21.innerText = parsedData1.list[11].weather[0].description;


            var description2 = document.querySelector('.weather2');
            description2.innerText = parsedData1.list[11].weather[0].description;
            var description3 = document.querySelector('.weather3');
            description3.innerText = parsedData1.list[19].weather[0].description;
            var description4 = document.querySelector('.weather4');
            description4.innerText = parsedData1.list[27].weather[0].description;
            var description5 = document.querySelector('.weather5');
            description5.innerText = parsedData1.list[35].weather[0].description;
            var temp1 = document.querySelector('.temp1');
            temp1.innerText =parsedData1.list[3].main.temp + "°C";


            var temp13 = document.querySelector('.temp13');
            temp13.innerText =parsedData1.list[3].main.temp + "°C";
            var temp15 = document.querySelector('.temp15');
            temp15.innerText =parsedData1.list[5].main.temp + "°C";
            var temp17 = document.querySelector('.temp17');
            temp17.innerText =parsedData1.list[7].main.temp + "°C";
            var temp19 = document.querySelector('.temp19');
            temp19.innerText =parsedData1.list[9].main.temp + "°C";
            var temp21 = document.querySelector('.temp21');
            temp21.innerText =parsedData1.list[11].main.temp + "°C";


            var temp2 = document.querySelector('.temp2');
            temp2.innerText =parsedData1.list[11].main.temp + "°C";
            var temp3 = document.querySelector('.temp3');
            temp3.innerText =parsedData1.list[19].main.temp + "°C";
            var temp4 = document.querySelector('.temp4');
            temp4.innerText =parsedData1.list[27].main.temp + "°C";
            var temp5 = document.querySelector('.temp5');
            temp5.innerText =parsedData1.list[35].main.temp + "°C";
    }
    }

/*var date = new Date();
var day = new Array();
day[0] = "Monday";
day[1] = "Tuesday";
day[2] = "Wednesday";
day[3] = "Thursday";
day[4] = "Friday";
day[5] = "Saturday";
day[6] = "Sunday";
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var mon = month[date.getMonth()];
var da = day[date.getDay()];
document.querySelector('.date').innerHTML = da +', '+ date.getDate() + ' ' + mon +', '+ date.getFullYear();*/


const search = document.querySelector('.search');
search.addEventListener("keypress", setKey);
function setKey(key){
    if (key.keyCode == 13){
        getResults(search.value);
        console.log(search.value);
    }
}

    document.querySelector('.button').onclick = function showResult() {
        getResults(search.value);
        console.log(search.value);
    }


function getResults(city1) {
    request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?q='+ city1 +'&units=metric&APPID=bf929377557908a73fa97f9c04ae7963');
    request.send();
    request.onload = function(){
        var response = request.response;
        var parsedData = JSON.parse(response);
        console.log(parsedData);
        var city = document.querySelector('.city');
        city.innerText = parsedData.name + ', ' + parsedData.sys.country;
        var temp = document.querySelector('.temp');
        temp.innerText =parsedData.main.temp + "°C";
        var wind = document.querySelector('.wind');
        wind.innerText = "Wind Speed: " + parsedData.wind.speed + "km/h";
        var feel = document.querySelector('.feel');
        feel.innerText = "Feels like: " + parsedData.main.feels_like + "°C";
        var description = document.querySelector('.weather');
        description.innerText = parsedData.weather[0].description;
        var maxmin = document.querySelector('.maxmin');
        maxmin.innerText = "Temp Max: "+ parsedData.main.temp_max + "°C" + " - " +"Temp Min: "+ parsedData.main.temp_min+ "°C";
        var icon = parsedData.weather[0].icon;
        var imageURL = 'https://openweathermap.org/img/wn/' + icon + '@2x.png';
        var demo = document.querySelector('.demo');
        demo.setAttribute('src', imageURL);

        request.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?q='+city1+'&units=metric&appid=bf929377557908a73fa97f9c04ae7963');
        request.send();
        request.onload = function(){
            var response1 = request.response;
            var parsedData1 = JSON.parse(response1);
            console.log(parsedData1);
            var date1 = document.querySelector('.date1');
            date1.innerText = parsedData1.list[3].dt_txt;

            var date13 = document.querySelector('.date13');
            date13.innerText = parsedData1.list[3].dt_txt;
            var date15 = document.querySelector('.date15');
            date15.innerText = parsedData1.list[5].dt_txt;
            var date17 = document.querySelector('.date17');
            date17.innerText = parsedData1.list[7].dt_txt;
            var date19 = document.querySelector('.date19');
            date19.innerText = parsedData1.list[9].dt_txt;
            var date21 = document.querySelector('.date21');
            date21.innerText = parsedData1.list[11].dt_txt;

            var date2 = document.querySelector('.date2');
            date2.innerText = parsedData1.list[11].dt_txt;
            var date3 = document.querySelector('.date3');
            date3.innerText = parsedData1.list[19].dt_txt;
            var date4 = document.querySelector('.date4');
            date4.innerText = parsedData1.list[27].dt_txt;
            var date5 = document.querySelector('.date5');
            date5.innerText = parsedData1.list[35].dt_txt;
            var description1 = document.querySelector('.weather1');
            description1.innerText = parsedData1.list[3].weather[0].description;

            var description13 = document.querySelector('.weather13');
            description13.innerText = parsedData1.list[3].weather[0].description;
            var description15 = document.querySelector('.weather15');
            description15.innerText = parsedData1.list[5].weather[0].description;
            var description17 = document.querySelector('.weather17');
            description17.innerText = parsedData1.list[7].weather[0].description;
            var description19 = document.querySelector('.weather19');
            description19.innerText = parsedData1.list[9].weather[0].description;
            var description21 = document.querySelector('.weather21');
            description21.innerText = parsedData1.list[11].weather[0].description;

            var description2 = document.querySelector('.weather2');
            description2.innerText = parsedData1.list[11].weather[0].description;
            var description3 = document.querySelector('.weather3');
            description3.innerText = parsedData1.list[19].weather[0].description;
            var description4 = document.querySelector('.weather4');
            description4.innerText = parsedData1.list[27].weather[0].description;
            var description5 = document.querySelector('.weather5');
            description5.innerText = parsedData1.list[35].weather[0].description;
            var temp1 = document.querySelector('.temp1');
            temp1.innerText =parsedData1.list[3].main.temp + "°C";

            var temp13 = document.querySelector('.temp13');
            temp13.innerText =parsedData1.list[3].main.temp + "°C";
            var temp15 = document.querySelector('.temp15');
            temp15.innerText =parsedData1.list[5].main.temp + "°C";
            var temp17 = document.querySelector('.temp17');
            temp17.innerText =parsedData1.list[7].main.temp + "°C";
            var temp19 = document.querySelector('.temp19');
            temp19.innerText =parsedData1.list[9].main.temp + "°C";
            var temp21 = document.querySelector('.temp21');
            temp21.innerText =parsedData1.list[11].main.temp + "°C";

            var temp2 = document.querySelector('.temp2');
            temp2.innerText =parsedData1.list[11].main.temp + "°C";
            var temp3 = document.querySelector('.temp3');
            temp3.innerText =parsedData1.list[19].main.temp + "°C";
            var temp4 = document.querySelector('.temp4');
            temp4.innerText =parsedData1.list[27].main.temp + "°C";
            var temp5 = document.querySelector('.temp5');
            temp5.innerText =parsedData1.list[35].main.temp + "°C";
    }
        
    }
}