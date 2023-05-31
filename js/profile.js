const drop = document.querySelector(".location")
const personal = document.querySelector(".personal-info")
const profile = {
    emailAdress: "SchoolEmail: 302942781@student.rocmondriaan.nl.",
    username: "Gebruikersnaam: EvanVelzen.",
    birthdate: "Verjaardag : 22-05-2003",
    biography: "Ik ben geboren op 22 mei 2003 en getochen in Nederland.",
    // projects: [
    //     {
    //         title: "boter, kaas en eiereren",
    //         description: "Een simpel boter kaas en eieren spelletje.",
    //         img: "",
    //         teamMates: []
    //     },
    //     {
    //         title: "webCatalogus",
    //         description: "een Webcatalogus over games.",
    //         img: "",
    //         teamMates: [{
    //             fullName: "David Aalderink",
    //             link: "Daalderink.github.io"
    //         },
    //         {
    //             fullName: "Nathen Alberto",
    //             link: "Nalberto.github.io"
    //         }]
    //     },

    // ],
    education: "Ik doe op het moment software development bij het ROC Mondriaan.",
    skills: "Repareren en upgraden van pc's.",
    bannerColor: "Rood",
    socialMedia: [{
        title: "Facebook",
        img: "/img/facebook icon.png",
        link: "https://www.facebook.com/profile.php?id=100008801014229"
    }, {
        title: "Instagram",
        img: "/img/instagram_icon.png",
        link: "https://www.instagram.com/emielvanvelzen/"
    }]
}



console.log(profile);
// personal.innerHTML += profile.profilePicture + "<br>";
personal.innerHTML += profile.username + "<br>";

personal.innerHTML += profile.emailAdress + "<br>";
personal.innerHTML += profile.birthdate + "<br>";

personal.innerHTML += profile.biography + "<br>";
personal.innerHTML += profile.laungauges + "<br>";
personal.innerHTML += profile.skills + "<br>";


// for (let index = 0; index < profile.projects.length; index++) {
//     const projecty = profile.projects[index];
//     drop.innerHTML += `<div class="col-md-4 mt-3 d-flex align-items-stretch"> <div class="card ">
//         <img class="card-img-top" src="${projecty.img}">
//         <div class="card-body">

//             <h4 class="card-title">${projecty.title}</h4>
//             <p class="card-text">${projecty.description}</p>
//             <a href="${projecty.teamMates}"
//         </div>
//         </div>
//     </div>
//     `
// }

for (let index = 0; index < profile.socialMedia.length; index++) {
    const social = profile.socialMedia[index];
    drop.innerHTML += `<div class="col-md-3 mt-3 d-flex align-items-stretch"> <div class="card ">
           <img class="card-img-top" src="${social.img}">
          <div class="card-body">
                
                <h4 class="card-title">${social.title}</h4>
      
                <a class="text-primary text-decoration-none " href="${social.link}">link to social</a>
            </div>
        </div>
       </div>`
}