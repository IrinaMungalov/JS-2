// HW3*: last request -> minimum interval 1min (15min) < localStorage

const KEY = "4e93b168d34d64b71a826b89ef7f8dfa"
const MIN_INTERVAL = 900000

function loadWeatherData() {

    let actualTime = new Date().getTime()
    let lastRequestTime = parseInt( localStorage.getItem('lastRequestTime') )

    if ( lastRequestTime && actualTime - lastRequestTime >= MIN_INTERVAL ) {
    // HW1:  input < city
        let city = document.querySelector('#inputCity').value

        const CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4e93b168d34d64b71a826b89ef7f8dfa&units=metric`
    
        let xhr = new XMLHttpRequest()

        xhr.open( "GET", CURRENT_WEATHER_URL )

        xhr.onload = function () {

            let data = JSON.parse(xhr.responseText)
            let temp = data.main.temp
            let wind = data.wind.speed 
            let description = data.weather[0].description     
            let icon = data.weather[0].icon
            // console.log( data )
            // console.log( temp )
            // console.log( wind )
            // console.log( description )
            // console.log( icon )

            let html = document.createElement('div')
            let h1 = document.createElement('h1')
            h1.innerText = "temperature: " + temp + "℃"
            let h2 = document.createElement('h2')
            h2.innerText = description
            let p = document.createElement('p')
            p.innerText = "wind speed: " + wind + "m/s"
            let img = document.createElement('img')
            img.src = `http://openweathermap.org/img/wn/${icon}@2x.png`
            

            html.appendChild(h1)
            html.appendChild(h2)
            html.appendChild(p)
            // http://openweathermap.org/img/wn/${icon}@2x.png
            html.appendChild(img)

            document.querySelector('.weather').innerHTML = ''
            document.querySelector('.weather').appendChild(html)
            
            localStorage.setItem( 'lastRequestTime', actualTime )
        } 

        xhr.send()
    } else {
        alert("Less than 15 minutes have passed since the last request.")
    }
}
// HW2:  onclick -> timer
setInterval( loadWeatherData, 35000 )