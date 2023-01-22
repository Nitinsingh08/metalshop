// const accordion = document.getElementsByClassName("options");


// for (i = 0; i < accordion.length; i++) {
//     accordion[i].addEventListener('click', function() {
//         this.classList.toggle("Active")
//     })
// }



// function myFunction() {

//     const zero = document.getElementsById("feature-zero")
//     const one = document.getElementsById("feature-one")
//     const two = document.getElementsById("feature-two")
//     const three = document.getElementsById("feature-three")
//     const four = document.getElementsById("feature-four")



//     //  if (x.style.display === "none") {
//     //    x.style.display = "block";
//     // } else {
//     //     x.style.display = "none";
//     // }
// }
function myFunction() {
    const button = document.getElementsByClassName("accordion-button");
    button.style.color = "#f2814e !important"
}
const image = document.getElementById("feature-image");

function one() {
    image.src = "assets/feature-one.png"
}

function two() {
    image.src = "assets/feature-two.png"
}

function three() {
    image.src = "assets/feature-three.png"
}

function four() {
    image.src = "assets//feature-four.png"
}

function five() {
    image.src = "assets/feature-five.png"
}