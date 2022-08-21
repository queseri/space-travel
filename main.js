const menuBtn = document.querySelector(".menu-btn-js")
console.log(menuBtn)
const menuControl = () => {
    const closeIcon = document.querySelector(".close")
    const hamburger = document.querySelector(".hamburger")
    const navMenu = document.querySelector(".navbar-collapse")
    console.log("button clicked")
    menuBtn.classList.toggle("show-menu-js")
    closeIcon.classList.toggle("hide-icon-js")
    hamburger.classList.toggle("hide-icon-js")
    if (menuBtn.classList.contains("show-menu-js")) {
        menuBtn.setAttribute("aria-expanded", true)
        navMenu.classList.add("show-menu-js")
    } else {
        menuBtn.setAttribute("aria-expanded", false)
        navMenu.classList.remove("show-menu-js")
    }
}

menuBtn.addEventListener("click", menuControl)
