const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const ctotalontainer = document.getElementById("total");
const movieSelect = document.getElementById("movie");

const ticketPrice = +movieSelect.value;

console.log(ticketPrice)

container.addEventListener("click", (e) => {
    if(e.target.classList.contains("seat") && 
    !e.target.classList.contains("occupied"))
    {
        e.target.classList.toggle("selected")
    }
});