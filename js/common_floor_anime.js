/////////// FLOOR_anime ///////////////
const alltarget = document.querySelectorAll(".ab03");

function observation() {
    alltarget.forEach(function (number) {

        const targetRect = number.getBoundingClientRect();
        if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
            number.classList.add("animate__bounceInRight");
        } else {
            number.classList.remove("animate__bounceInRight");
        }
    })
};

window.addEventListener("scroll", observation);

/////////// FLOOR_anime end ///////////////