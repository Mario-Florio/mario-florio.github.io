
(function() {

    const topbar = document.querySelector('.topbar');
    let lastScrollY = window.scrollY;

    let isHidden = false;

    window.addEventListener('scroll', (e) => {
        const currentScrollY = window.scrollY;

        if (isHidden === true && currentScrollY < lastScrollY) {
            topbar.classList.remove('hide');
            isHidden = false;

        } else if (isHidden === false && currentScrollY > lastScrollY) {
            topbar.classList.add('hide');
            isHidden = true;
        }

        lastScrollY = currentScrollY;
        
    });

})();
