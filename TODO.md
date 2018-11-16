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

- [x] check all URLs, & use RELATIVE everywhere (see "relURL")

- [x] check if ".Hugo.Generator" is included somewhere

- [x] test theme
  - [x] "hugoBasicExample" (https://github.com/gohugoio/hugoBasicExample)
    => Doesn't work.
  - [x] Include "exampleSite".

- [x] finish "theme.toml" with all required metadata (add tags!)
  => check others on "gohugo.io/contribute/themes"

- [ ] finish README.md
  => look at "Hugo Artists Theme" for ideas
  - [ ] find and finish "projects" stuff
  - [ ] add examples?
  - [ ] add more screenshots?
    => "list" (company/category) & "single" (project) examples.
  - [x] add features (404 page, custom css, ...)!

- [x] finish "config.toml"

- [x] add screenshot (1500x1000) & tn (900x600), PNG

- [ ] add theme to "HugoThemes" github => open issue & add link
