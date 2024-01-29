// home_anime//
const allhome = document.querySelectorAll(".HOME_target");

function observation() {
    allhome.forEach(function (number) {

        const targetRect = number.getBoundingClientRect();
        if (targetRect.top < window.innerHeight && targetRect.bottom >= 0) {
            number.classList.add("animate__bounceInRight");
        } else {
            number.classList.remove("animate__bounceInRight");
        }
    })
};

window.addEventListener("scroll", observation);


