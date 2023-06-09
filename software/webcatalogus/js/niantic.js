const niantic = document.querySelector('.Niantic') 

function fetchData(url){
    fetch(url)
    .then(Data => Data.json())
    .then(jsonData => createCard(jsonData))
}

function createCard(data){
    for(let i = 0; i<data.length;i++){
        const element = data[i]
        const card = `<div class="col-md-4">
        <div class="card">
            <img class="card-img-top" src="`+ element.img +`" alt="Title">
            <div class="card-body">
                <h4 class="card-title">`+ element.title+`</h4>
                <p class="card-text">`+ element.description+`</p>
                <p class="card-text">Release date: `+element.releaseDate+`</p>
                <p class="card-text">Genre: ` +element.genres+`</p>
                <p class="card-text">download from: `+element.downloadFrom+`</p>
                <p class="card-text">Playercount: `+element.activePlayers +`</p>
            </div>
        </div>
        </div>`;
        niantic.innerHTML += card;
    }
}


fetchData('https://mbo-sd.nl/period3-fetch/games-mobile-niantic')