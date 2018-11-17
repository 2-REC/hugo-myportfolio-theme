TODO - CODE:

- [ ] General:
    - [ ] Check/clean the entire code ...
    - [ ] Make sure page 404 is loaded when 404 error
    - [ ] Add attribute "rel=nofollow" for "a" elements pointing to companies?
        (Might actually be better to keep ref)
    - [ ] CDN: use font awesome (& jquery, Bootstrap,  etc) from online resource AND from local files (fallback).
        => BOTH (look at: https://forum.freecodecamp.org/t/using-a-fallback-code-in-case-bootstraps-cdn-is-down/160753/11 and https://stackoverflow.com/questions/26192897/should-i-use-bootstrap-from-cdn-or-make-a-copy-on-my-server )
    - [ ] Solve bug of NAVBAR offset when getting back from project page
    - [ ] Update to latest HUGO.
    - [ ] Do microdata stuff (look at MDN docs).
    - [ ] Update to BOOTSTRAP 4+.
    LATER:
    - [ ] Write script to convert CSS.
        => Replace variables by their value (better perf)
        (create a separate git repo/project for the converter)
    - [ ] Make better CSS?
        => Use "em" & "rem" instead of px, etc.
    - [ ] TAGS: Allow to specify parameter to sort list (eg on number of occurrences).
    - [ ] ARIA: Set role for each html tags
        => Look at: https://www.w3.org/TR/html-aria/#document-conformance-requirements-for-use-of-aria-attributes-in-html
    - [ ] See about donation stuff (Patreon?) - in "contact" section?
    - [ ] Handle multi-language (look at UNIVERSAL theme) (+language selector)
    - [ ] Add a page view counter?
    - [ ] Add Google Analytics.
        => googleAnalytics = "..."

- [ ] Homepage:
    - [ ] Set order of sections from order in navigation bar.
        => Parse menu and add each section in that order (in same order as defined in config.toml).

- [ ] Navigation Bar:
    - [ ] When not on homepage, have the current section button highlighted (for "projects" sections).
    LATER:
    - [ ] See about image for brand (and possibility to have text instead).
    - [ ] See for additional text at right of brand.    

- [ ] "HOME" section:
    - [ ] Seems to have a bug with the background in CREATIVE theme: image sometimes not covering the entire screen.
        => Set size to minimum between width and height, keeping ratio (=> image cropped)
?        => OK or should fix problem?

- [ ] "SKILLS" section:
    - [ ] "text" parameter should be optional.

- [ ] "PROJECTS" section:
    LATER:
    - [ ] Set heading in top left corner as a link to the section.
    - [ ] Add a vertical scrolling text in the top right corner.
        => For scrolling text, look at:
            https://www.quackit.com/css/codes/marquees/
        => Need to adapt the layout as in AIRSPACE theme, "Contact" form.
    - [ ] Add a link to "TIMELINE" page (once page ceated).
        => Look at "NEWSPRINT" theme, "The Library" section for timeline example.

- [ ] "PROJECTS" list page:
    LATER:
    - [ ] Add a "path" on top, to show where we are, and easy navigate (or in sidebar?!).

- [ ] "PROJECT" single page:
    LATER:
    - [ ] Add a "path" on top, to show where we are, and easy navigate (or in sidebar?!).
    - [ ] Add "content table" on right side (EVEN theme, in a post page).
    - [ ] Add image gallery component (look at "liwenyip gallery" (uses "PhotoSwipe"), or "Icarus").
    - [ ] Create and set icons for tags/technologies.

- [ ] "CONTACT" section:
    - [ ] Add microdata in HTML (as in sidebar of MINIMAL ACADEMIC theme).
    LATER:
    - [ ] Allow to have background on full screen or only right half side (look at homepage of "SPLIT" theme).
    - [ ] Add Contact form (use NETLIFY or "French guy's method with ZAPIER").

- [ ] "ASIDE" section:
    => Could add optional section.
