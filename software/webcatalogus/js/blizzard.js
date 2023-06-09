console.log('loaded');

const dump = document.querySelector('.dump')

function createCards(data){
    for(let i = 0; i<data.length; i++){
        const element = data[i]
        const card = `<div class="col-md-4"><div class="card">
        <img class="card-img-top" src="` + element.img + `">
            <div class="card-body">
                <h4 class="card-title">`+ element.title +`</h4>
                <p class="card-text">` + element.description + `</p>
                <p class="card-text">release date: ` + element.releaseDate + `</p>
                <p class="card-text"> Prijs: ` + element.price + `</p>
                <p class="card-text"> Genres: ` + element.genres + `</p>
                <p class="card-text">Platformen: ` + element.platforms + `</p>
            </div>
        </div>
        </div>`;
        dump.innerHTML += card
        
    }
}

function fetchData(url){
    fetch(url)
    .then(firstData => firstData.json())
    .then(jsonData => createCards(jsonData))
}

fetchData('https://mbo-sd.nl/period3-fetch/games-pc-blizzard-entertainment')
