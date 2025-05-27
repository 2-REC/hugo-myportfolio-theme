/*
  Add intersection observer to trigger animation when visible.
*/
$(document).ready(function () {
    const animObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.querySelectorAll('.anim').forEach((animated) => {

                /* TODO: rewrite to handle a list of animations, instead of hardcoded 'if...else if' */
                const classes = animated.classList;
                if (classes.contains('zoomIn')) {
                    if (entry.isIntersecting) {
                        if (!classes.contains('anim-in')) {
                            animated.classList.add('anim-in');
                        }
                    } else {
                        /* TODO: remove this 'else' block if want only triggered once */
                        if (classes.contains('anim-in')) {
                            animated.classList.remove('anim-in');
                        }
                    }
                } else if (classes.contains('slideLeft')) {
                    if (entry.isIntersecting) {
                        if (!classes.contains('anim-left')) {
                            animated.classList.add('anim-left');
                        }
                    } else {
                        /* TODO: remove this 'else' block if want only triggered once */
                        if (classes.contains('anim-left')) {
                            animated.classList.remove('anim-left');
                        }
                    }
                } else if (classes.contains('slideRight')) {
                    if (entry.isIntersecting) {
                        if (!classes.contains('anim-right')) {
                            animated.classList.add('anim-right');
                        }
                    } else {
                        /* TODO: remove this 'else' block if want only triggered once */
                        if (classes.contains('anim-right')) {
                            animated.classList.remove('anim-right');
                        }
                    }
                }
            });
        });
    });

    document.querySelectorAll('.anim-wrapper').forEach((wrapper) => {
        animObserver.observe(wrapper);
    });
})