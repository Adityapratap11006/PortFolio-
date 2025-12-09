document.getElementById("contactbtn").addEventListener("click", function () {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

const sections = document.querySelectorAll("section");
const navlinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });
    navlinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});

const button = document.getElementById("contactbtn");
button.addEventListener("mousedown", () => { button.style.transform = "scale(0.95)"; });
button.addEventListener("mouseup", () => { button.style.transform = "scale(1)"; });
