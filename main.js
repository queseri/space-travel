const menuBtn = document.querySelector(".menu-btn-js");

const menuControl = () => {
    const closeIcon = document.querySelector(".close");
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navbar-collapse");
    const body = document.querySelector("body");
    const main = document.querySelector(".main");
    console.log("button clicked")
    menuBtn.classList.toggle("show-menu-js");
    closeIcon.classList.toggle("hide-icon-js");
    hamburger.classList.toggle("hide-icon-js");
    if (menuBtn.classList.contains("show-menu-js")) {
        menuBtn.setAttribute("aria-expanded", true);
        navMenu.classList.add("show-menu-list-js");
        main.classList.add("main-hide-js");
        body.classList.add("body-js");
    } else {
        menuBtn.setAttribute("aria-expanded", false);
        navMenu.classList.remove("show-menu-list-js");
        main.classList.remove("main-hide-js");
        body.classList.remove("body-js");
    }
}

menuBtn.addEventListener("click", menuControl)

const timeLine = gsap.timeline({ duration: 1 })

timeLine.
    from('body',
        {
            ease: 'none',
            backgroundColor: "#fff"
        }
    ).
    fromTo(['h1', 'h2', '.call-to-action', '.main-content', '.tabbed li', '.tab-image', '.footer'],
        {
            opacity: 0,
            y: -20
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power1.out',
            delay: 1.5,
            stagger: 0.2
        },
        '-=1'
    ).
    fromTo('header',
        { y: 20 },
        {
            y: 0, ease: 'power2.inOut',
            yoyo: true
        }
    )

