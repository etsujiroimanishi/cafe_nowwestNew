/////////// FLOOR ///////////////
const ab01 = document.querySelector(".ab01");
const ag00 = document.querySelector(".ag00");
const ag01 = document.querySelector(".ag01");
const ag02 = document.querySelector(".ag02");
const ag04 = document.querySelector(".ag04");
const ag05 = document.querySelector(".ag05");

ab01.addEventListener("click", geoGen);

function geoGen() {
    if (ag01.classList.contains("aa01")) {
        ag01.classList.remove("aa01");
        ag02.classList.remove("aa02");
        ag04.classList.remove("aa04");
        ag05.classList.remove("aa05");
        ag00.classList.remove("aa00");
    } else {
        ag01.classList.add("aa01");
        ag02.classList.add("aa02");
        ag04.classList.add("aa04");
        ag05.classList.add("aa05");
        ag00.classList.add("aa00");
    }
};

/////////// FLOOR end ///////////////