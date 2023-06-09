const dump = document.querySelector(`.dump`);

function fetchData(url) {
    fetch(url)
    .then(myData => myData.json())
    .then(jsonData => createCard(jsonData));
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
                <p class="card-text">Release date: `+element.firstGame+`</p>
                <p class="card-text">Genre: ` +element.genre+`</p>
                <p class="card-text">Sales: `+element.sales+`</p>
                <p class="card-text">Playercount: `+element.playerCount+`</p>
            </div>
        </div>
        </div>`;
        dump.innerHTML += card;
    }
}


fetchData("https://mbo-sd.nl/period3-fetch/games-console-ubisoft");
