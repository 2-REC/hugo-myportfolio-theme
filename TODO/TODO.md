# TODO

- [ ] DOC
    - [ ] Adapt example site to new changes + make as complete as possible, showcasing everything + explaining/detailing how it works (in page content itself, or comments in md files...).
    - [ ] Mention use of "cover_image" and "small_image" for sections ("cover_image" can override "small_image")
    - [ ] GALLERY PARTIAL + SHORTCODE!

- [ ] README.md
    - [ ] Add CSS+layout variables changes in README + exampleSite config.toml!
    - [ ] Reference "Minimal Academic" theme for the sidebar stuff? (if not done)
    - [ ] Update to every change + check complete

- [ ] config
    - [ ] switch to 'config' directory instead of single file? (look at other themes - eg 'myblog-theme')


## BUG FIXES

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
- [ ] Use responsive images?
    LOOK AT:
    ```html
    <picture class="photo-wide orientation-landscape loaded">
        <source media="(min-width: 1024px)" srcset="image_large.jpg, image_large_retina.jpg 2x">
        <source media="(min-width: 640px) and (max-width: 1024px)" srcset="image_medium.jpg, image_medium_retina.jpg 2x">
        ...
    </picture>
    ```

- LATER:
    - [ ] (?) Add a "path" on top, to show where we are, and easy navigate (or in sidebar?!)
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
    - [ ] See about donation stuff (Patreon?) - in "contact" section?
    - [ ] Update to BOOTSTRAP 4+.


### FOOTER
- [ ] Add copyright stuff (for my stuff, but also images, themes, etc I "took")
- [ ] Allow to not have the footer
- [ ] Make better footer


### SERVICES
- [ ] "services" list parameter should be optional.


### SKILLS
- [ ] "text" parameter should be optional.


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

- LATER:
    - [ ] (?) Add Contact form (use NETLIFY or "method with ZAPIER").
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


## CODE - FILES

### LAYOUTS
- \_default
    - [ ] baseof.html
        - [ ] Check/adapt CSS for "list-content" & "list-page".
    - [ ] 'main' tag should not contain sidebars - DESIGN ERROR!
        In:
        themes\myportfolio\layouts\_default\baseof.html
        From:
        https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/main
    - [ ] li.html
        - [ ] Change layout of links, and put everything in the "a" tag.
            => Do something similar to "project-box".
    - [ ] single.html
        - [ ] Keep aria-hidden?<br>
            => And check if needed anywhere else.
        - [ ] Change size of images once have gallery style images (clickable to view)


- partials
    - pages
        - [ ] sidebar.html + sidebar-bottom.html
            - [ ] Make "categories" & "tags" optional?<br>
                => Find way to remove them from taxonomy pages (or make them different)
            - [ ] Get texts from data instead of hardcoded
                - [ ] "HOME": from config
                - [x] "CATEGORIES", "TAGS": from 'skills' data
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
                    - For "profile_text"
                    ```html
                    <h2 itemprop="name">{{ . | markdownify }}</h2>
                    ```
                    - For "main_text"
                    ```html
                    <div class="col-xs-12 col-md-8" itemprop="description">
                    ```
        - [ ] contact.html
            - [ ] Add microdata for portrait (and others?)
            ```html
            itemprop="description"?
            ```
        - [ ] home.html
            - [ ] LATER: BACKGROUND.
                => Set size to minimum between width and height, keeping ratio (=> image cropped)
                - Doesn't seem perfect in CREATIVE theme, image sometimes not covering entire screen.<br>
                => OK or should fix problem?
    - utils
        - [ ] get-keywords.html
            - [ ] Add a parameter to specify order (based on wieght, title, occurrences, ...)
            (now hardcoded on alphanumerical value - at end of file)
    - [ ] footer.html
        - [ ] Fix problem that not at bottom of page.<br>
            => Need changes in CSS for main tags (html, body, sections, etc?)
        - [ ] Set content...
    - [ ] head.html (Look at backuped file)
        - [ ] Use some "blocks" to allow overriding parts..
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
        - [ ] For external "libs" (Bootstrap, JQuery?)<br>
            => Use CDN & fallback on local files. (see links)<br>
            E.g.: for FontAwesome:
            ```html
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
            ```
        - [ ] Check publish meta stuff.
    - [ ] homepage.html
        - [ ] use google analytics? (or "google_analytics_async" in header?), or none?
        ```html
        {{ template "_internal/google_analytics.html" . }
        ```

### STATIC

- css
    - [ ] custom_vars.css
        - [ ] Check that all variables are listed.
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
