const soft = document.querySelector(".software");
const overig = document.querySelector(".overig");

const projectSoftware = {
  projecten: [
    {
      title: "boter, kaas en eieren",
      img: "/img/tic tac toe.png",
      text: `Dit is een digitale versie van het spel boter kaas en eieren. het spel is gemaakt in 2022. het spel heeft het thema van de boeren protesten die er toen waren. het spel zelf detecteerd of er iemand gewonnen heeft. ook laat spel zien wie er aan de beurt is.`,
      link: "/software/boter kaas en eieren/index.html",
    },
    {
      title: "hoger lager",
      img: "img/hogerlager img.png",
      text: `Dit is een digitale versie van het drank spel hoger lager. Dit is samen met David Aalderink gemaakt als schoolproject. gemaakt in het jaar 2022.`,
      link: "/software/hoger lager (2)/hoger lager project/homepage project/index.html",
    },
    {
      title: "webcatalogus",
      img: "/img/webcatalogus.png",
      text: `Een webcatalogus gefocust op games gemaakt samen met Nathen Alberto en David Aalderink`,
      link: "/software/webcatalogus/index.html",
    },
    {
      title: "escape Room",
      img: "img/escaperoom.png",
      text: "Een escape Room samen met Jayden Smink gemaakt, helaas werkt kan je enkelt rond lopen en het ",
      link: "/software/escaproom/index.html",
    },
    {
      title: "Battle of Midway (zeeslag)",
      img: " /img/zeeslag.png",
      text: "D is een digitale versie van zeeslag gebasseerd op de zeeslag bij het eiland zeeslag. helaas niet werkt het spel zelf niet.",
      link: "/software/Battle of Midway (game)/index.html"
    },{
      title: "slender the missing soul",
      img: "/img/slender.jpg",
      text: "Dit spel gemaakt op de godot engine is een horror spel",
      link: "https://github.com/Evanvelzen/Evanvelzen.github.io"
    }
  ],
};

for (let index = 0; index < projectSoftware.projecten.length; index++) {
  const software = projectSoftware.projecten[index];
  soft.innerHTML += `<div class="col-md-3 mt-3 d-flex align-items-stretch img-fluid"> <div class="card ">
         <img class="card-img-top" src="${software.img}">
        <div class="card-body">
              
              <h4 class="card-title">${software.title}</h4>
              <p class="card-text">${software.text}</p>
              <a href="${software.link}" class="btn btn-primary">naar project</a>
          </div>
      </div>
     </div>`
}