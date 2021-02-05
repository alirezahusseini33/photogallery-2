const header = document.querySelector("header");
const galleryImgBox = document.querySelectorAll(".img-box");
const galleryImg = document.querySelectorAll(".g-img");

// onscroll
window.onscroll = function() {
    let topPosition = window.scrollY;
    if (topPosition >= 100) {
        header.classList.add("header-onscroll");
        // contactBtn.classList.add("carry");
        // skillBtn.classList.add("carry-2");
    } else {
        header.classList.remove("header-onscroll");
        // contactBtn.classList.remove("carry");
        // skillBtn.classList.remove("carry-2");
    }
};

// // gallery img effect on hover
// $(function() {
//     var effects = "animate__animated animate__flipInX";
//     var effectEnd =
//         "animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd";

//     $(galleryImg).hover(function() {
//         $(this)
//             .addClass(effects)
//             .one(effectEnd, function() {
//                 $(this).removeClass(effects);
//             });
//     });
// });