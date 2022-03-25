const color = document.querySelector(".color");
const container = document.querySelector(".container");
const random = document.querySelector(".random");

const generateRandomColor = () => {
    const randomC = Math.random().toString(16).substring(2, 8);
    document.body.style.backgroundColor = "#" + randomC;
    color.innerHTML = "#" + randomC;
    console.log(randomC);
};
random.addEventListener("click", generateRandomColor);