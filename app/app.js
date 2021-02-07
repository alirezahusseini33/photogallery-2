const header = document.querySelector("header");
const galleryImgBox = document.querySelectorAll(".img-box");
const galleryImg = document.querySelectorAll(".g-img");
const orderBtn = document.querySelector("#order");
const gallery = document.querySelector("#gallery");

// onscroll
window.onscroll = function() {
    let topPosition = window.scrollY;
    if (topPosition >= 100) {
        header.classList.add("header-onscroll");
    } else {
        header.classList.remove("header-onscroll");
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

function galleryToggle() {
    const galleryPage = document.createElement("section");
    const galleryClass = document.createAttribute("class");
    galleryClass.value = "gallery-page";
    galleryPage.setAttribute("class", "gallery-page");
    const galleryContent = document.createElement("div");

    // appending cilds
    galleryPage.appendChild(galleryContent);
    gallery.appendChild(galleryPage);
}

orderBtn.addEventListener("click", () => {
    galleryToggle();
});