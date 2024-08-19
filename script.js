/*open faq sections*/
const faqSection = () => {

    //get dom elements
    const faqBoxes = document.querySelectorAll(".faq-box");

    faqBoxes.forEach(box => {
        const openButton = box.querySelector("button");
        const container = box.querySelector(".faq-content");

        openButton.addEventListener("click", ()=>{
           container.classList.toggle("faq-expanded");
           if(container.classList.contains("faq-expanded")){
               openButton.textContent = "-";
           }else{
               openButton.textContent = "+";
           }
        });
    });
};

/*responsive navigation functionality*/
const responsiveNavigation = () => {

    //on menu click toggle nav visible class
    const menuButton = document.querySelector(".menu-button");
    const nav = document.querySelector("nav");

    menuButton.addEventListener("click", () => {
        nav.classList.toggle("nav-visible");
    });
};

const scrollObservations = () => {
    const header = document.querySelector("header");

    /*on scroll, change header style*/
    const observer = new IntersectionObserver(entries => {
        /*if element is out of view*/
        if (!entries[0].isIntersecting) {
            header.classList.add("header-scrolled");
        } else {
            header.classList.remove("header-scrolled");
        }
    });

    const scrollObserverElement = document.querySelector(".scroll-observer");

    observer.observe(scrollObserverElement);
};


/*perform when document loaded*/
const documentLoaded = () => {
    scrollObservations();
    responsiveNavigation();
    faqSection();
};

document.addEventListener("DOMContentLoaded", documentLoaded);



