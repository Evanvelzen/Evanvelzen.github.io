// alle variabelen en queryselectors
const tempCanvas = document.querySelector(".chart-one");
const windspdCanvas = document.querySelector(".chart-two");
const text = document.querySelector(".text")
const search = document.querySelector(".form-control");
const searchButton = document.querySelector(".search-button");
const backgroundColours = ["White"];
let tempchart;
let windspdchart;
let averageTemp;
let highestTemp;
let lowestTemp;

// deze functie word aangeroepen wanneer de zoek knop word ingedrukt
function searchButtonPressed() {
    if (search.value != "") {
        fetch(`https://geocode.maps.co/search?q=${search.value}`)
            .then(myData => myData.json())
            .then(jsonData => checkLocation(jsonData))
        text.innerHTML = `<div class="col-md-12 text-center">${search.value}</div>`
    }
}

// deze functie maakt de lat en lon aan en roept de functie aan die de wee api fetched met de lat en de lon
function checkLocation(data) {
    const lat = data[0].lat
    const lon = data[0].lon
    fetching(lat, lon)
}

// deze functie fetch de weer api met de lat en de lon
function fetching(lat, lon) {

    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=sunrise,sunset,rain_sum,precipitation_probability_max&hourly=temperature_2m,windspeed_10m&current_weather=true&forecast_days=1&timezone=Europe%2FBerlin`)
        .then(myData => myData.json())
        .then(jsonData => showText(jsonData))
}

// deze functie laat alle tekst zien op de webpagina
function showText(data) {
    console.log(data)
    averageTemp = calculateAverage(data.hourly.temperature_2m)
    highestTemp = calculateHighest(data.hourly.temperature_2m)
    lowestTemp = calculateLowest(data.hourly.temperature_2m)
    text.innerHTML += `
    <div class="col-md-6">Temperatuur</div>
    <div class="col-md-6">${data.current_weather.temperature} °C</div>
    <div class="col-md-6">Laagste temperatuur</div>
    <div class="col-md-6">${lowestTemp} °C</div>
    <div class="col-md-6">Gemmiddelde temperatuur</div>
    <div class="col-md-6">${averageTemp} °C</div>
    <div class="col-md-6">Hoogste temperatuur</div>
    <div class="col-md-6">${highestTemp} °C</div>
    <div class="col-md-6">Tijd</div>
    <div class="col-md-6">${data.current_weather.time}</div>
    <div class="col-md-6">Zonsopgang</div>
    <div class="col-md-6">${data.daily.sunrise}</div>
    <div class="col-md-6">Zonsondergang</div>
    <div class="col-md-6">${data.daily.sunset}</div>
    <div class="col-md-6">Regen</div>
    <div class="col-md-6">${data.daily.rain_sum} mm</div>
    <div class="col-md-6">Kans op regen</div>
    <div class="col-md-6">${data.daily.precipitation_probability_max} %</div>`
    if (tempchart) {
        tempchart.destroy()
    }
    if (windspdchart) {
        windspdchart.destroy()
    }
    tempchart = createChart(tempCanvas, data.hourly.time, data.hourly.temperature_2m, "#Temperatuur")
    windspdchart = createChart(windspdCanvas, data.hourly.time, data.hourly.windspeed_10m, '#Windsnelheid')
}

// hier word de hoogste temperatuur teruggegeven
function calculateHighest(temperatures) {
    return Math.max(...temperatures)
}

// in deze function word de laagste temperatuur teruggegeven
function calculateLowest(temperature) {
    return Math.min(...temperature)
}

// hier word het gemmidelde berekent
function calculateAverage(temperatures) {
    let amount = 0;
    let total = 0
    for (let index = 0; index < temperatures.length; index++) {
        const temperature = temperatures[index];
        total = total + temperature
        amount = amount + 1
        if(amount == 24){
            total = total / amount
            total = total  * 10
            total = Math.round(total)
            total = total / 10
        }
    }
    return total
}

// in deze function worden de charts aangemaakt
function createChart(canvasElement, labels, data, label) {

    return new Chart(canvasElement, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: label,
                data: data,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// de eventlistener
searchButton.addEventListener("click", searchButtonPressed)