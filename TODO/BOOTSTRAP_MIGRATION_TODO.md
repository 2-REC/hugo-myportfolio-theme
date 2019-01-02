
LOOK AT:
https://getbootstrap.com/docs/4.0/migration/

https://getbootstrap.com/docs/4.0/layout/grid/
https://getbootstrap.com/docs/4.0/layout/overview/
https://scotch.io/tutorials/understanding-the-bootstrap-3-grid-system

----

- replace CSS files in static/css
- replace JS files in static/js

- GRID
    - update grid system sizes: (new "sm")
        xs (stays)
        (sm - new)
        sm => md
        md => lg
        lg => xl
	(in: about, contact, services, skills, limage)
    - change CSS rules with "@media"
EG:
@media(min-width:768px) {
TO
@include media-breakpoint-up(md) {


!!!! WHAT ABOUT EM UNITS???? !!!!



