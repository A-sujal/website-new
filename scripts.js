// Image Modal Functionality
function openModal(imageSrc) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("fullImage");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

// Close Modal
function closeImageModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Smooth Scroll for Navigation
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
smoothScrollLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});

// Scroll Animations for Elements (Fade-in effect)
document.addEventListener("DOMContentLoaded", () => {
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + window.innerHeight;

        elementsToAnimate.forEach((element) => {
            if (element.offsetTop < scrollPosition) {
                element.classList.add('fade-in');
            }
        });
    });
});

// Skill Bars Animation
window.addEventListener("scroll", () => {
    const skillBars = document.querySelectorAll(".skill-bar");
    const skillSection = document.getElementById("skills");

    if (isElementInViewport(skillSection)) {
        skillBars.forEach((bar) => {
            bar.style.width = bar.getAttribute('data-skill') + '%';
        });
    }
});

// Check if element is in the viewport
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Scroll to top functionality (optional)
const scrollToTopBtn = document.createElement("button");
scrollToTopBtn.innerText = "↑";
scrollToTopBtn.classList.add("scroll-to-top");
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Show scroll-to-top button after some scrolling
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});
