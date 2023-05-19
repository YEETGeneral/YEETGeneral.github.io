const observer = new IntersectionObserver((entries) => {
    entries.forEach((entires) => {
        if (entires.isIntersecting) {
            entires.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));