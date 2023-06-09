function begin(){
alert('Welkom bij het spel Hoger Lager');

alert('De regels van het spel zijn simpel.');

alert('Bij het spel hoger lager is het de bedoeling dat de computer een dobbelsteen gooit en jij(de speler) moet raden of je hoger of lager zal gooien. Wanneer je het fout raad, verlies je 2 credits en als je het goed raad krijg je er 2 credits bij.');

const playerAge = prompt('Hoe oud ben je?');

if (playerAge >= 18 && playerAge < 120){
    alert('Veel plezier met spelen.');
    
}
else if(playerAge < 18){
    alert('u bent te jong');
    return;
}
else if(playerAge > 120){
    alert('Deze leeftijd klopt niet probeer het opnieuw.');
    return;
}
else {
    alert('Wat u zojuist heeft ingetypt klopt niet of is geen leeftijd.');
    return;
};


for(i=0;i<1;i++){
const username = prompt('Vul uw naam in.');
const arrayUsername = [username];

document.querySelector('#Namelist').innerHTML += '<br>' + arrayUsername;
};

    let credits = 10;
    
    alert(`U begint standaard met ${credits} credits.`);
    
    alert('uw doel is om 20 credits te bemeesteren.');

    while(credits < 20 && credits > 0){
    let min = 2;
    let max = 12;
    let c= Math.floor(Math.random()*(max-min+1)+min);
    
    let min2 = 2;
    let max1 = 12;
    let p= Math.floor(Math.random()*(max-min+1)+min);
    
    alert(`De computer heeft ${c} gegooit.`);
    
    let ronde = prompt('Denkt u dat u hoger of lager gooit?');
    
    if (ronde == 'hoger','Hoger'){
        if (c<p){
            credits = credits + 2;
            alert('U heeft het goed!');
        }
        else if(c>p){
        credits = credits - 2;
        alert('Helaas u heeft het fout');
        }
        else if(c==p){
            alert('U heeft hetzelfde gegooit als de computer. Er komen geen credits bij of af')
        };
      
    }
    else if(ronde == 'lager','Lager'){
        if (c>p){
            credits = credits + 2;
            alert(`U heeft het goed!`);
        }
        else if (c<p){
            credits = credits - 2;
            alert('Helaas u heeft het fout');
        }
        else if(c==p){
            alert('U heeft hetzelfde gegooit als de computer. Er komen geen credits bij of af')
        };
        
        
    }
    else{
        alert('U heeft iets anders getypt dan hoger of lager.')
    };
    
    delete ronde

    alert(`u heeft ${p} gegooit.`)
        c= Math.floor(Math.random()*(max-min+1)+min);
        p= Math.floor(Math.random()*(max-min+1)+min);

        alert(`U heeft nu nog ${credits} credits.`);

    };
};
if(credits == 20){
    alert(`${username}. U heeft het doel van  het spel bereikt`)
    alert('Bedankt voor het spelen en tot het volgende project.')
}
else if(credits == 0){
    alert(`${username}. U heeft geen credits meer.`)
    alert('Bedankt voor het spelen en tot het volgende project.')
}