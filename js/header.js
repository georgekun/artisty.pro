document.addEventListener('DOMContentLoaded', function() {
    const header = {
        element: document.querySelector('.header'),
        settings: {
            change_top_offset: 30,
        },
        color_toggler() {
            if (window.scrollY > this.settings.change_top_offset) {
                this.element.classList.remove('transparent');
                document.querySelector('.menu-button').classList.add('checked');
            } else {
                this.element.classList.add('transparent');
                document.querySelector('.menu-button').classList.remove('checked');
            }
        },
        start_color_check() {
            this.color_toggler()
            window.addEventListener('scroll', this.color_toggler.bind(this))
        }
    }

    function burger_button_color() {
        if (this.checked) {
            document.querySelector('.menu-button').classList.add('checked');
            document.body.classList.add('unscroll');
        } else {
            document.querySelector('.menu-button').classList.remove('checked');
            document.body.classList.remove('unscroll');
            header.color_toggler()
        }
    }

    burger_button_color()
    document.querySelector('#menu-toggle').addEventListener('click', burger_button_color)
    header.start_color_check()
})