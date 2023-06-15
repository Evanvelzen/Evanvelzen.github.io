const chart1 = document.querySelector('.chart-1');
const chart2 = document.querySelector('.chart-2');
const additionalInfo = document.querySelector('.additional-info');
const additionalInfo2 = document.querySelector('.additional-info2');
//functions datafetchYear2022 to 2023 functions. these fetch the data and send it to the createchart 

function dataFetchYear2022() {

    fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/2022-01-01/currencies/eur.json')
        .then(myData => {
            console.log("myData: ", myData);
            return myData.json()
        })
        .then(data1 => createChart(chart1, data1));
}



function dataFetchYear2023() {

    fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/2023-01-01/currencies/eur.json')
        .then(data => data.json())
        .then(data1 => createChart2(chart2, data1));

}

function infoFetch2023() {
    //fetch year 2023
    fetch('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/2023-01-01/currencies/eur.json')
        .then(data => data.json())
        .then(data4 => calculateInfo2023(data4));
}





function calculateInfo2023(data4) {
    //here it calulates the lowest and highest value's from the fetch data
 let lowest;
 let highest;
    for (key in data4.eur) {
        //  console.log(data4.eur[key])
        if(lowest == null){
            lowest = data4.eur[key]
        } 
        
        if (lowest > data4.eur[key]) {
            lowest = data4.eur[key];
        }
    }

    for (key in data4.eur) {
        //  console.log(data4.eur[key])
        if(highest == null){
            highest = data4.eur[key]
        } 
        
        if (highest < data4.eur[key]) {
            highest = data4.eur[key];
        }
    }
     additionalInfo.innerHTML += `<div class="card bg-dark border border-white">
     <div class="card-body">
         <p class="card-text">Laagste waarde: ${lowest}</p>
     </div>
 </div>`
    additionalInfo2.innerHTML += `<div class="card bg-dark border border-white">
    <div class="card-body">
        <p class="card-text">hoogste waarde: ${highest}</p>
    </div>
</div>`
 console.log(lowest)
    console.log(highest)

    
    
} 

// function calculateDifference(){
//     calculateInfo2022();
//     calculateInfo2023();

//     const total = average2022 - average2023;

//     additionalInfo.innerHTML += `verschil gemiddelde waarde: ${total}`

// }

//  create chart makes charts with the data from it gets from the fetch functions
function createChart(canvasElement, data1) {

    console.log("<<yenData>>", data1);
    new Chart(canvasElement, {
        type: 'bar',
        data: {
            labels: ['tjeschië kroon', 'deense kroon', 'Roebel', 'Zweedse kroon', 'mexicaanse peso', 'Noorse Kroon', 'poolse złoty'],
            datasets: [{
                label: '# waardes munt eenheden 2022, waarde euro = 1',
                data: [data1.eur.czk, data1.eur.dkk, data1.eur.rub, data1.eur.sek, data1.eur.mxn, data1.eur.nok, data1.eur.pln],
                borderWidth: 1
            },]
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

function createChart2(canvasElement, data1) {
    new Chart(canvasElement, {
        type: 'bar',
        data: {
            labels: ['tjeschië kroon', 'deense kroon', 'Roebel', 'Zweedse kroon', 'mexicaanse peso', 'Noorse Kroon  ', 'poolse złoty'],
            datasets: [{
                label: '# waardes munt eenheden 2023, waarde euro = 1',
                data: [data1.eur.czk, data1.eur.dkk, data1.eur.rub, data1.eur.sek, data1.eur.mxn, data1.eur.nok, data1.eur.pln],
                borderWidth: 1
            }

            ],
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


dataFetchYear2022();
dataFetchYear2023();

infoFetch2023();
// calculateDifference();


