document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = document.querySelectorAll("section");

    const options = {
        threshold: 0.7
    };

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if(link.getAttribute("href").substring(1) === entry.target.id){
                        link.classList.add("active");
                    }
                });
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});