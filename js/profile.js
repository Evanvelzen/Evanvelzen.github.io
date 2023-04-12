const drop = document.querySelector(".location")

const profile = {
    emailAdress: "schoolEmail: 302942781@student.rocmondriaan.nl ",
    username: "username: EvanVelzen",
    birthdate: "birthdate : 22-05-2003",
    biography: "i am a person born on the 22nd of may 2003, ",
    projects: [
        {
            title: "boter,  kaas en eieren",
            description: "a simple game known as tic tac toe",
            teamMate: []
        },
        {
            title: "webCatalogus",
            description: "a web catalogus that displays a number of games",
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
    education: "doing currently mbo-4 software development",
    skills: "fixing pc's",
    laungauges: ["dutch", "english", "small bit of russian", "small bit of german", "small bit of japanese"],
    bannerColor: "red",
    socialMedia: "#",
}



console.log(profile);

drop.innerHTML += profile.username + "<br>";

drop.innerHTML += profile.emailAdress + "<br>";
drop.innerHTML += profile.birthdate + "<br>";
drop.innerHTML += profile.profilePicture + "<br>";
drop.innerHTML += profile.biography + "<br>";
drop.innerHTML += profile.laungauges + "<br>";
drop.innerHTML += profile.skills + "<br>";
drop.innerHTML += profile.socialMedia + "<br>";

for (let index = 0; index < profile.projects.length; index++) {
    const projecty = profile.projects[index];
    drop.innerHTML += `<div class="card ">

        <div class="card-body">
            <h4 class="card-title">${projecty.title}</h4>
            <p class="card-text">${projecty.description}</p>
        </div>
    </div>`
}