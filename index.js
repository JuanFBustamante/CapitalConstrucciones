import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// let headerIndex =document.getElementById("headerIndex")
// let headerServices =document.getElementById("headerServices")
// let headerAbout =document.getElementById("headerAbout")
// let headerWork =document.getElementById("headerWork")
// let mainIndex =document.getElementById("mainIndex")
// let mainServices =document.getElementById("mainServices")
// let mainAbout =document.getElementById("mainAbout")
// let mainWork =document.getElementById("mainWork")

// function tops() {
//     headerIndex.scrollIntoView();
//     headerServices.scrollIntoView();
//     headerAbout.scrollIntoView();
//     headerWork.scrollIntoView();
//     window.setTimeout(function () {
//         bottom();
//     }, 8000);
// }

// function bottom() {
//     mainIndex.scrollIntoView();
//     mainServices.scrollIntoView();
//     mainAbout.scrollIntoView();
//     mainWork.scrollIntoView();
// }

// tops();

const nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
    const offset = window.pageYOffset;

    if (offset > 75)
        nav.classList.add('scroll')
    // else
    //     nav.classList.remove('scroll')
});

const preloaderWrapper = document.querySelector(".preloader-wrapper")
window.addEventListener('load', function () {
    preloaderWrapper.classList.add('fade-out-animation')
})

