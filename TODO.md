TODO - CODE:

- [ ] Check/clean the entire code ...

- [ ] Homepage:
    - [ ] Set order of sections from order in navigation bar.
        => Parse menu and add each section in that order (in same order as defined in config.toml).

- [ ] "HOME" section:
    - [ ] Seems to have a bug with the background in CREATIVE theme: image sometimes not covering the entire screen.
        => Set size to minimum between width and height, keeping ratio (=> image cropped)
?        => OK or should fix problem?

- [ ] "SKILLS" section:
    - [ ] "text" parameter should be optional.

- [ ] "PROJECTS" section:
    - [ ] Add a vertical scrolling text in the top right corner.
        => For scrolling text, look at:
            https://www.quackit.com/css/codes/marquees/
        => Need to adapt the layout as in AIRSPACE theme, "Contact" form.
    - [ ] Add a link to "TIMELINE" page (once page ceated).
        => Look at "NEWSPRINT" theme, "The Library" section for timeline example.

- [ ] "ASIDE" section:
    => Could add optional section.

- [ ] add Google Analytics:
        googleAnalytics = "..."

========

TODO - PUBLISH:

Look at:
gohugo.io/contribute/themes

- [x] Check all URLs, & use relative URLs everywhere (see "relURL").

- [x] Make sure ".Hugo.Generator" is included in "head.html".

- [x] Test theme.
  - [x] With "hugoBasicExample" (https://github.com/gohugoio/hugoBasicExample)
    => Doesn't work.
  - [x] Include "exampleSite".

- [x] Finish "theme.toml" with all required metadata (add tags!).

- [x] Finish README.md.
  => Look at "Hugo Artists Theme" for ideas.
  - [x] Find and finish "projects" stuff.
  - [x] Add more screenshots.
  - [x] Add features (404 page, custom css, ...).

- [x] Finish "config.toml".

- [x] Add screenshot (1500x1000) & tn (900x600), in PNG format.

- [ ] Add theme to "HugoThemes" github => open issue & add link.
