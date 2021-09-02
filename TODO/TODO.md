# TODO


!!!!
- add CSS+layout variables changes in README + exampleSite config.toml!
!!!!

- [ ] Complete README.md file
    => What to add?
    - [ ] Reference "Minimal Academic" theme for the sidebar stuff? (if not done)
    - [ ] Mention use of "cover_image" and "small_image" for sections ("cover_image" can override "small_image")


## BUG FIXES

### GENERAL
- [ ] Solve bug of page a bit larger than window (width of vertical scrollbar?)
- [ ] Check for CSS urls (Have to hardcode absolute to work... check others)


### NAV BAR
- [ ] Solve bug of NAVBAR offset when getting back from project page


### HOME
- [ ] Seems to have a bug with the background in CREATIVE theme: image sometimes not covering the entire screen.<br>
    => Set size to minimum between width and height, keeping ratio (=> image cropped)<br>
?        => OK or should fix problem?


## CLEANING

### GENERAL
- [ ] Check/clean the entire code


## CODE - SECTIONS

### PUBLISHING
- [ ] Look at "Google Search" and "structured data" stuff
    - get a quick glimpse into site's indexation: Use a tool like Moz Pro, Link Explorer, or Screaming Frog to run a site crawl.
    - Then, compare the number of pages the crawl turned up to the number of pages listed when you run a site:search on Google.
- [ ] Do micro data stuff (look at MDN docs)
- [ ] ARIA: Set role for each html tags<br>
    => Look at:<br>
    https://www.w3.org/TR/html-aria/#document-conformance-requirements-for-use-of-aria-attributes-in-html


### GENERAL
- [ ] Look at "figure" opcode and do same thing as for gallery
- [ ] Update to latest HUGO.
- [ ] Update to BOOTSTRAP 4+.

- [ ] Use responsove images?
    LOOK AT:
    ```html
    <picture class="photo-wide orientation-landscape loaded">
        <source media="(min-width: 1024px)" srcset="image_large.jpg, image_large_retina.jpg 2x">
        <source media="(min-width: 640px) and (max-width: 1024px)" srcset="image_medium.jpg, image_medium_retina.jpg 2x">
        ...
    </picture>
    ```


- LATER:
    - [ ] Create and set icons
        - [ ] For tags/technologies
        - [ ] For skills: gears, retropad, windows, book?,
        - [ ] Nav bar, etc.: DSP, etc.
    - [ ] Add a "path" on top, to show where we are, and easy navigate (or in sidebar?!)
    - [ ] Add "content table" on right side (EVEN theme, in a post page)
    - [ ] TAGS: Allow to specify weight parameter to sort list (eg on number of occurrences).
    - [ ] Write script to convert CSS.<br>
        => Replace variables by their value (better perf)<br>
        (create a separate git repo/project for the converter)
    - [ ] Make better CSS?<br>
        => Use "em" & "rem" instead of px, etc.
    - [ ] Handle multi-language (look at UNIVERSAL theme) (+language selector)
    - [ ] Add a page view counter?
    - [ ] Add Google Analytics<br>
        => googleAnalytics = "..."


### HEADER
- [ ] CDN: use font awesome (& jquery, Bootstrap,  etc) from online resource AND from local files (fallback).<br>
    => BOTH - look at:<br>
    https://forum.freecodecamp.org/t/using-a-fallback-code-in-case-bootstraps-cdn-is-down/160753/11
    https://stackoverflow.com/questions/26192897/should-i-use-bootstrap-from-cdn-or-make-a-copy-on-my-server


### FOOTER
- [ ] Add copyright stuff (for my stuff, but also images, themes, etc I "took")
- [ ] Allow to not have the footer
- [ ] Make better footer


- LATER:
    - [ ] See about donation stuff (Patreon?) - in "contact" section?


### HOMEPAGE
- [ ] Set order of sections from order in navigation bar.<br>
    => Parse menu and add each section in that order (in same order as defined in config.toml).


### NAV BAR
- [ ] When not on homepage, have the current section button highlighted (for "projects" sections).


- LATER:
    - [ ] See about image for brand (and possibility to swap with text - or both).


### SERVICES
- [ ] "services" list parameter should be optional.


### SKILLS
- [ ] "text" parameter should be optional.


- LATER:
    - [ ] Replace the tags and categories blocks by the 2 skills table, with each keyword being a link to a taxonomy page.
        - [ ] Add the 2 HTML tables
        - [ ] Set tags and categories in tables (with links for taxonomies)
        - [ ] Generate tables dynamically from data files (instead of static html tables)
            - skills.json => Should have all skills data defined here, and used to fill tables (so that can have dynamic number of tables)
            (! - and it should be matched with tags and categories from each project!)


### PROJECTS
- LATER:
    - [ ] Add a vertical scrolling text in the top right corner.
        => For scrolling text, look at:
        https://www.quackit.com/css/codes/marquees/
        <br>=> Need to adapt the layout as in AIRSPACE theme, "Contact" form.
    - [ ] Add a link to "TIMELINE" page (once page created).<br>
        => Look at "NEWSPRINT" theme, "The Library" section for timeline example.
    - [ ] "PROJECTS" list page:
        - [ ] Add a "path" on top, to show where we are, and easy navigate (or in sidebar?!).
    - [ ] "PROJECT" single page:
        - [ ] Add a "path" on top, to show where we are, and easy navigate (or in sidebar?!).
        - [ ] Add "content table" on right side (EVEN theme, in a post page).
    - [ ] "PROJECTS" Additional pages (related to projects - for each project section):
        - [ ] "PROJECTS":
            => Projects page, containing 1+N sections (N = number of project sections:
            - "TIMELINE": link to "TIMELINE" page.
            - "<SUBSECTION_TYPE>": link to "PROJECTS_<SUBSECTION_TYPE>" - with no subsection selected.
            - "ALL PROJECTS": link to "PROJECTS_<SECTIONS>\_ALL" page.
        - [ ] "TIMELINE":
            => Page with vertical timeline (top = present), listing positions in chronological order.
            - When clicking on a company icon, it opens a small pop-up with the position description.
            - In the pop-up, there is a button ("Projects"?) to open the related category projects page ("PROJECTS_SUBSECTION").
        - [ ] "PROJECTS_<SECTIONS>_ALL":
            => Page listing all the projects, with possibility to filter on tags/categories.
            - Similar to "PROJECTS_<SUBSECTION_TYPE>" page.
            - Without position/role block.
            - With a search possibility (could display all the tags).
                => Display projects related to tags.


### CONTACT
- [ ] Add microdata in HTML (as in sidebar of MINIMAL ACADEMIC theme).
- [ ] See how to have image on right side and fading to the left...


- LATER:
    - [ ] Allow to have background on full screen or only right half side (look at homepage of "SPLIT" theme).
    - [ ] Add Contact form (use NETLIFY or "method with ZAPIER").
      => Look at:
        - Pierre Morsa Hugo Form
            => Free, but need "Zapier" and "Slack" accounts (free?)
            https://www.pierremorsa.com/post/2017-11-13-ajouter-formulaire-hugo
        - Netlify (integrated in their services)
            => 100 free submissions per month (19$ per month for 1000 submissions)
            https://www.netlify.com
        - Forma
            => free & open-source (?)
            https://hugs.octolab.net/
            https://kamilsk.github.io/form-api/
        - FormSpree
        - TypeForm
            => 100 free submissions per month
            https://www.typeform.com
        - FormFerret
            => 6$ per form per month
            http://www.formferret.com
        - 99Inbound
        - Formata (BETA)
            => NOT FREE (0.09$ per submission)
            https://www.formata.io/
        - PageClick
            => ?

### SIDEBAR
- [ ] On small screens (when sidebar fixed) put sidebar UNDER page, not on top


## CODE - FILES

### LAYOUTS
- \_default
    - [ ] baseof.html
        - [ ] Check/adapt CSS for "list-content" & "list-page".
    - [ ] li.html
        - [ ] Change layout of links, and put everything in the "a" tag.
            => Do something similar to "project-box".
    - [ ] limage.html
        - [ ] Determine number of columns and offsets based on content.<br>
            For
            ```html
            <div class="col-lg-4 col-sm-6">
            ```
            => Could use "get-number-columns.html".
    - [ ] single.html
        - [ ] Keep aria-hidden?<br>
            => And check if needed anywhere else.
        - [ ] Change size of images once have gallery style images (clickable to view)


- partials
    - pages
        - [ ] lists.html
            - [ ] For posts listing, descend recursively instead of only handling first level.
        - [ ] sidebar.html
            - [ ] Make "categories" & "tags" optional?<br>
                => Find way to remove them from taxonomy pages (or make them different)
            - [ ] Get texts from data instead of hardcoded ("HOME", "CATEGORIES", "TAGS")
            - [ ] Determine if want "combobox"/collapsable in sidebar<br>
                => Look at:
                - DOCBOOK theme
                - FAQ theme
                    https://themes.gohugo.io/theme/hugo-faq-theme/
                - simple "more" shortcode<br>
                    https://github.com/jiridj/hugo-collapsible-code <br>
                    https://github.com/jiridj/hugo-collapsible-code-jquery/blob/master/static/js/more.js
        - [ ] title.html
            - [ ] Add a "path" element at beginning for easy navigation.<br>
                eg: "HOME > WORK_PRO > VRCONTEXT > post"
    - sections
        - [ ] about.html
            - [ ] Add microdata
                - [ ] For row containing the "profile":
                    - what itemtype? (person? organiation? ...?)
                    ```html
                    <div class="row" itemprop="author" itemscope
                        itemtype="http://schema.org/Person"
                        itemref="{{ if $.Site.Params.email }}person-email{{ end }}{{ if $.Site.Params.phone }} person-telephone{{ end }}{{ if $.Site.Params.address}} person-address{{ end }}"
                    >
                    ```
                - [ ] Under "portrait"
                    - See if want/need microdata
                    - Is "meta" tag required? (or microdata can be in div?)
                    ```html
                    <meta itemprop="image" content="{{ (printf "images/%s" .) | absURL }}">
                    ```
                    - For "short_text"
                    ```html
                    <h2 itemprop="name">{{ . | markdownify }}</h2>
                    ```
                    - For "long_text"
                    ```html
                    <div class="col-xs-12 col-md-8" itemprop="description">
                    ```
        - [ ] contact.html
            - [ ] Add microdata for portrait (and others?)
            ```html
            itemprop="description"?
            ```
            - [ ] Add form at end (& see how to handle with static site)
            ```html
            <div class="col-md-4 col-md-offset-2 text-center">
                ... (form)
            </div>
            ```
        - [ ] home.html
            - [ ] LATER: BACKGROUND.
                => Set size to minimum between width and height, keeping ratio (=> image cropped)
                - Doesn't seem perfect in CREATIVE theme, image sometimes not covering entire screen.<br>
                => OK or should fix problem?
        - [ ] projects.html
            - [ ] Add "all_projects" at end of list!
                => set front matter, etc.
                ```html
                {{ .Render "limage" }}
                ```
        - [ ] services.html
            - [ ] For "services-container"<br>
                => When updating to BOOTSTRAP 4, use "justify-content-around"

        - [ ] skills.html
            - [ ] For "$data.download"
                => When updating to BOOTSTRAP 4, use "float-{sm,md,lg,xl}-{left,right,none}" to allow the button to the right (with offset)
            - [ ] For tags & categories:<br>
                => When updating to HUGO 0.45, replace:
                ```html
                {{ with $.Site.GetPage "section" . }}
                ```
                With
                ```html
                {{ with $.Site.GetPage . }}
                ```
    - utils
        - [ ] get-keywords.html
            - [ ] Add a parameter to specify order (based on wieght, title, occurrences, ...)
            (now hardcoded on alphanumerical value - at end of file)
        - [ ] get-number-columns.html
            - [ ] Enhance by adding "offsets" & "xl" (& "xs", "sm"?)<br>
                => Output should be such as:
                ```html
                .Scratch.Set "col-sizes" "col-md-6 col-lg-4 col-xl-5"
                .Scratch.Set "col-offsets" "col-xl-offset-1"
                & in loop: class="{{ .Scratch.Get "col-sizes" }} {{ .Scratch.Get "col-offsets" }} text-center"
                ! - delete Scratch variables after, & delete "offsets" after first iteration (end of first)!
                ```
    - [ ] footer.html
        - [ ] Fix problem that not at bottom of page.<br>
            => Need changes in CSS for main tags (html, body, sections, etc?)
        - [ ] Set content...
    - [ ] gallery.html
        - [ ] Check JQUERY loading.<br>
            => OK to load both files in tail.html? (should only load one)
        - LATER:
            - [ ] Fix ".Inner" stuff (with "figure")
            - [ ] Add "figure.html" file & make changes.<br>
                => Do the same as for gallery (paths, change to partial instead of shortcode, etc).
    - [ ] head.html<br>
        (Look at backuped file)
        - [ ] Use some "blocks" to allow overriding parts..
        - [ ] See about the custom fonts (if keep same, change, or remove)<br>
            => And see if "safe"/stable to use URLs...
        - [ ] Check end of file (Shim & Respond.js stuff)<br>
            => Needed? keep?
        - [ ] Look at other header files (in other themes)<br>
            => "header.html" in Osprey (lots of other stuff!)
        - [ ] Add meta params in config:<br>
            In
            ```html
            {{ "<!-- Meta data -->" | safeHTML }}
            ```
            - meta
                - favicon
             (& other favicon sutff...?)
                - theme
                ```html
                <meta name="theme" content="THEME_NAME">
                ```
        - [ ] Check if need other meta params in config:<br>
            In
            ```html
            {{ "<!-- Meta data -->" | safeHTML }}
            ```
            - author
            - description
            - ...?
        - [ ] Check about Google Analytics stuff (at end of file as well).
        - [ ] Check for RSS stuff
        - [ ] check Favicon stuff (what they are & if needed)<br>
            (From "minimal-academic" theme)<br>
            => Could have a "favicon.html"...
        - [ ] For external "libs" (Bootstrap, FontAwesome, JQuery?)<br>
            => Use CDN & fallback on local files. (see links)<br>
            E.g.: for FontAwesome:
            ```html
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
            ```
        - [ ] Fonts: see what fonts we use, & what's needed.<br>
            In
            ```html
            {{ "<!-- Custom Fonts -->" | safeHTML }}
            ```
            => Depends on custom CSS!
        - [ ] Check publish meta stuff.
        - [ ] Check about "shiv" & "respond" stuff.
    - [ ] homepage.html
        - [ ] When updating to HUGO version 0.45, replace:
          ```html
          {{ with $.Site.GetPage "section" . }}
          ```
          with:
          ```html
          {{ with $.Site.GetPage . }}
          ```
        - [ ] use google analytics? (or "google_analytics_async" in header?), or none?
        ```html
        {{ template "_internal/google_analytics.html" . }
        ```
    - [ ] tail.html
        - [ ] For external "libs" (Bootstrap, FontAwesome, JQuery?)<br>
            => Use CDN & fallback on local files. (see links)


### STATIC

- css
    - [ ] custom.css
        - [ ] Check that all variables are listed.
        - [ ] File should be removed from theme (as it is optional, and name specified in "config.toml").
    - [ ] theme.css
        - [ ] Check/adapt everything.
        - [ ] See licensing stuff at beginning.
        - [ ] Should merge "icons-list" rules with "logos-list" & "images-list" rules.
        - [ ] Change size of ".image" once have gallery style images (clickable to view).<br>
            (also for "@media(max-width: 448px)")
        - [ ] Fix box height problem (cells of different height, aligning badly when medium screen).<br>
            => Update to BOOTSTRAP 4 should solve problem (then can remove "min-height: 300px;").
        - [ ] For "main" "min-height", need to consider header and footer heights as well.<br>
            => Write JS code to get the values.


- js
    - [ ] Check/adapt license etc.
