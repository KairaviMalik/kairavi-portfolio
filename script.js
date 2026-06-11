// Mobile menu (simple toggle)
function toggleMenu(){
    const nav = document.getElementById("nav");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// Scroll animation
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            el.classList.add("active");
        }
    });
});