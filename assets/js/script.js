// /* Main scripts */
window.addEventListener("DOMContentLoaded", () => {

    /* Mobile menu */
    let path = document.querySelector(".path");

    function lerp(start, end, t) {
        return start * (1 - t) + end * t;
    }

    let toggle = false;

    // Start SVG at bottom of screen
    let y = 100;
    let c = 100;


    function animate() {
        if (toggle) {
            y = lerp(y, 0, .055);
            c = lerp(c, 0, 0.075);
            path.setAttribute('d', `M 0 ${y} L 0 100 100 100 100 ${y} C ${50} ${c}, ${50} ${c}, 0 ${y}`)
        } else {
            y = lerp(y, 100, .055)
            c = lerp(c, 100, 0.075);
            path.setAttribute('d', `M 0 ${y} L 0 100 100 100 100 ${y} C 50 ${c}, ${50} ${c}, 0 ${y}`)
        }

        requestAnimationFrame(animate)
    }

    animate()

    const toggleButton = document.querySelector('.menu-tog-wrapper');
    let menuToggle = document.querySelector('.menu-tog');
    let menuWrapper = document.querySelector('.wrapper');
    let nav = document.querySelector('#mobile-nav');
    const navLinks = document.querySelectorAll('#mobile-nav a')
    toggleButton.addEventListener('click', () => {
        setTimeout(() => {
            toggle = !toggle;

        }, 300)
        if (toggle) {
            nav.classList.remove('active');

        } else {
            setTimeout(() => {
                nav.classList.add('active')

            }, 1000)
        }

        menuToggle.classList.toggle('active')
        menuWrapper.classList.toggle('active')

    })
    for (const link of navLinks) {
        link.addEventListener('click', () => {

            setTimeout(() => {
                toggle = !toggle;

            }, 300)

            if (!toggle) {
                nav.classList.add('active');

            } else {
                setTimeout(() => {
                    nav.classList.remove('active')

                }, 250)
            }

            menuToggle.classList.toggle('active')
            menuWrapper.classList.toggle('active')
        })
    }


    /* Mouse scroll */
    const scrollDownMouse = document.getElementById('scroll-down-mouse')
    const scrollTopBtn = document.getElementById('scroll-top-btn')

    window.addEventListener('scroll', function () {
        scrollFunction();
    });

    //Scroll
    function scrollFunction() {
        if (window.scrollY >= 70) {
            scrollTopBtn.classList.add('active');
            scrollDownMouse.classList.add('scrolled');
        }
        if (window.scrollY === 0) {
            scrollTopBtn.classList.remove('active');
            scrollDownMouse.classList.remove('scrolled');
        }
        
    }

    //At bottom
    window.onscroll = function(ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            scrollTopBtn.classList.add('is-bottom')
        }else {
            scrollTopBtn.classList.remove('is-bottom')
        }
    };

    //portfolio home link focus with tab
    const portfolioLinks = document.querySelectorAll('.grid-item > .overlay > a')

    for (const link of portfolioLinks) {
        link.addEventListener('focus', () => {
            link.parentElement.classList.add('active')
        })
        link.addEventListener('blur', () => {
            link.parentElement.classList.remove('active')
        })

    }


    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (() => {
        'use strict'

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.querySelectorAll('.needs-validation')

        // Loop over them and prevent submission
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
    })()



})