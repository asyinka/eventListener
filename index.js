
const myDiv = document.getElementById("firstDiv")
const theDiv = document.getElementById("bigDiv")
myDiv.addEventListener("mousedown", onclicked);
myDiv.addEventListener("mouseover", overColour)
myDiv.addEventListener("mouseout", outColour)
theDiv.addEventListener("mousedown", onclicked, true);
function onclicked(){
    alert(`you just clicked on ${this.id} box`);
}

function overColour(){
    this.style.backgroundColor ="red"
}
function outColour(){
    this.style.backgroundColor ="aqua"
}
