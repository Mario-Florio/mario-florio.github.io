
(function() {

    const topbar = document.querySelector('.topbar');
    let lastScrollY = window.scrollY;

    let isHidden = true;

    window.addEventListener('scroll', (e) => {
        const currentScrollY = window.scrollY;

        if (isHidden === false && currentScrollY < lastScrollY) {
            topbar.classList.remove('hide');
            isHidden = true;

        } else if (isHidden === true && currentScrollY > lastScrollY) {
            topbar.classList.add('hide');
            isHidden = false;
        }

        lastScrollY = currentScrollY;
        
    });

})();
