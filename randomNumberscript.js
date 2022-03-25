const randomNumm = document.querySelector(".random");
const numberr = document.querySelector(".number");

const randomNumberr = () => {
    const rannum = Math.floor(Math.random() * 10);
    numberr.innerHTML = rannum;
    console.log(numberr.innerHTML);
};

randomNumm.addEventListener("click", randomNumberr);