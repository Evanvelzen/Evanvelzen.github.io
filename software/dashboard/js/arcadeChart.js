console.log("loaded");
// Binnen halen van de html charts
const canvas = document.querySelector(`.chartInput`);
const canvasFetch = document.querySelector(`.chartInputFetch`);

// Zelf een chart gemaakt want fetch werkte niet
// createChartAssignment1(canvas);
function createChartAssignment1(canvasElement, chartLables, chartData){
    new Chart(canvasElement, {
        type: 'pie',
        data: {
          labels: chartLables,
          datasets: [{
            label: '# of Votes',
            data: chartData,
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
}
// Tweede chart, die ik met fetch ga proberen

function creatChartAssignment2() {
fetch(`/Dashboards/Nathan/Json/arcade.json`)
.then(response => response.json())
.then(data => {
    console.log(data);
    const chartLables = [];
    const chartData = [];
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
       chartLables.push(element.title)
       chartData.push(element.levels)
    }
    createChartAssignment1(canvas, chartLables, chartData)
})
}

creatChartAssignment2();