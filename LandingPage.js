function toggleMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('show');
}
document.addEventListener("click", function (event) {
    const menu = document.getElementById("mobile-menu");
    const toggleButton = document.querySelector(".menutoggle");

    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnButton = toggleButton.contains(event.target);

    if (!isClickInsideMenu && !isClickOnButton) {
        menu.classList.remove("show");
    }
});
const section = document.querySelector('.collection');
const items = document.querySelectorAll('.collection .items .item');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}, {
    threshold: 0.5 
});

observer.observe(section);
document.addEventListener('DOMContentLoaded', function () {
    const aboutLink = document.querySelector('a[href="#about"]'); // حدد الرابط إلى قسم "About us"

    if (aboutLink) {
        aboutLink.addEventListener('click', function (event) {
            event.preventDefault(); // منع السلوك الافتراضي للرابط (الانتقال الفوري)

            const aboutSection = document.getElementById('about'); // تأكد أن لديك عنصرًا بالمعرف 'about' لسيكشن "About us"

            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});