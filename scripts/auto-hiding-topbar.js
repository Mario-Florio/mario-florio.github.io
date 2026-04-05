
(function() {

    const topbar = document.querySelector('.topbar');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', (e) => {
        const currentScrollY = window.scrollY;

        if (currentScrollY < lastScrollY) {
            topbar.classList.remove('hide');

        } else if (currentScrollY > lastScrollY) {
            topbar.classList.add('hide');

        }

        lastScrollY = currentScrollY;
        
    });

})();
