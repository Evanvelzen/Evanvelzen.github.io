console.log(`Loaded`);
const accept = document.querySelector(`.accept`);
const decline = document.querySelector(`.decline`);



decline.addEventListener("click", declined);
accept.addEventListener("click", accepted);


function declined(){
    window.close(true);
}
function accepted(){
    window.location.href = "/index.html";
}
