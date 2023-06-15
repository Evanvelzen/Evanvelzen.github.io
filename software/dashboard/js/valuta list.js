const drop = document.querySelector(".drop");


//data fetched in the fetchList function
function fetchList() {
  fetch(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json`
  )
    .then((data) => data.json())
    .then((data) => showList(data));
}

function showList(data) {
  console.log(data)

  //special for loop that lops through an object instead of an array
  for (const list of Object.entries(data)) {
   
  
    //posts the list on the page with inner HTMl
  drop.innerHTML += `<div class="col-md-12 text-white">${list} </div>`;
  }  
    
  
}

fetchList();
