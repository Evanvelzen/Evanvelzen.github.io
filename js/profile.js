const drop = document.querySelector(".location")

const profile = {
    emailAdress: "schoolEmail: 302942781@student.rocmondriaan.nl ",
    username: "gebruikersnaam: EvanVelzen",
    birthdate: "verjaardag : 22-05-2003",
    biography: "ik ben geboren op 22 mei 2003 en getochen in Nederland.",
    projects: [
        {
            title: "Boter,  kaas en eieren",
            description: "Een simpel boter kaas en eieren spelletje.",
            img:"",
            teamMate: []
        },
        {
            title: "webCatalogus",
            description: "een Webcatalogus over games.",
            img:"",
            teamMates: [{
                fullName: "David Aalderink",
                link: "Daalderink.github.io"
            },
            {
                fullName: "Nathen Alberto",
                link: "Nalberto.github.io"
            }]
        },

    ],
    education: "Ik doe op het moment software development bij het ROC Mondriaan.",
    skills: "fixing pc's",
    laungauges: ["Nederlands", "Engels", "heel klein beetje Russisch", "beetje Duits", "heel klein beetje Japans zelfs"],
    bannerColor: "Rood",
    socialMedia: "#",
}



console.log(profile);

drop.innerHTML += profile.username + "<br>";

drop.innerHTML += profile.emailAdress + "<br>";
drop.innerHTML += profile.birthdate + "<br>";
// drop.innerHTML += profile.profilePicture + "<br>";
drop.innerHTML += profile.biography + "<br>";
drop.innerHTML += profile.laungauges + "<br>";
drop.innerHTML += profile.skills + "<br>";
drop.innerHTML += profile.socialMedia + "<br>";

for (let index = 0; index < profile.projects.length; index++) {
    const projecty = profile.projects[index];
    drop.innerHTML += `<div class="card ">
        <img class="card-img-top" src="">
        <div class="card-body">
            <
            <h4 class="card-title">${projecty.title}</h4>
            <p class="card-text">${projecty.description}</p>
        </div>
    </div>`
}