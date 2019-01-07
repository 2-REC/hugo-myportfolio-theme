TODO - CODE:

- [ ] General:
    - [ ] Check for css urls (Have to hardcode absolute to work... check others)
    - [ ] Allow to not have the footer
    - [ ] Make better footer
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

- [ ] "SERVICES" section:
    - [ ] "services" list parameter should be optional.

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

- [ ] "PROJECTS" Additional pages (related to projects - for each project section):
    - [ ] "PROJECTS":
        => Projects page, containing 1+N sections (N = number of project sections:
            - "TIMELINE": link to "TIMELINE" page.
            - "<SUBSECTION_TYPE>": link to "PROJECTS_<SUBSECTION_TYPE>" - with no subsection selected.
            - "ALL PROJECTS": link to "PROJECTS_<SECTIONS>_ALL" page.
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

- [ ] "CONTACT" section:
    - [ ] Add microdata in HTML (as in sidebar of MINIMAL ACADEMIC theme).
    LATER:
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

- [ ] "ASIDE" section:
    => Could add optional section.


CODE CHECK/BUGS:

- layouts
    - _default
        - [ ] baseof.html
            - [ ] Check/adapt CSS for "list-content" & "list-page".

        - [ ] li.html
            - [ ] Change layout of links, and put everything in the "a" tag.
                => Do something similar to "project-box".

        - [ ] limage.html
            - [ ] Determine number of columns and offsets based on content.
                For <div class="col-lg-4 col-sm-6">
                => Could use "get-number-columns.html".

        - [ ] single.html
            - [ ] Keep aria-hidden?
                => And check if needed anywhere else.
            - [ ] Change size of images once have gallery style images (clickable to view)

    - partials
        - pages
            - [ ] lists.html
                - [ ] For posts listing, descend recursively instead of only handling first level.

            - [ ] sidebar.html
                - [ ] Make "categories" & "tags" optional?
                - [ ] Get texts from data instead of hardcoded ("HOME", "CATEGORIES", "TAGS")
                - [ ] Determine if want "combobox"/collapsable in sidebar
                    => Look at:
                    - DOCBOOK theme
                    - FAQ theme
                        https://themes.gohugo.io/theme/hugo-faq-theme/
                    - simple "more" shortcode
                        https://github.com/jiridj/hugo-collapsible-code
                        https://github.com/jiridj/hugo-collapsible-code-jquery/blob/master/static/js/more.js

            - [ ] title.html
                - [ ] Add a "path" element at beginning for easy navigation.
                    eg: "HOME > WORK_PRO > VRCONTEXT > post"

        - sections
            - [ ] about.html
                - [ ] Add microdata
                    - [ ] For row containing the "profile":
                        - what itemtype? (person? organiation? ...?)
                        <div class="row" itemprop="author" itemscope
                                itemtype="http://schema.org/Person"
                                itemref="{{ if $.Site.Params.email }}person-email{{ end }}{{ if $.Site.Params.phone }} person-telephone{{ end }}{{ if $.Site.Params.address}} person-address{{ end }}"

                            >
                    - [ ] Under "portrait"
                        - See if want/need microdata
                        - Is "meta" tag required? (or microdata can be in div?)
                            <meta itemprop="image" content="{{ (printf "images/%s" .) | absURL }}">
                        - For "short_text"
                            <h2 itemprop="name">{{ . | markdownify }}</h2>

                        - For "long_text"
                            <div class="col-xs-12 col-md-8" itemprop="description">


            -[ ]  contact.html
                - [ ] Add microdata for portrait (and others?)
                    itemprop="description"?
                - [ ] Add form at end (& see how to handle with static site)
                    <div class="col-md-4 col-md-offset-2 text-center">
                        ... (form)
                    </div>

            - [ ] home.html
                - [ ] LATER: BACKGROUND.
                    => Set size to minimum between width and height, keeping ratio (=> image cropped)
                        - Doesn't seem perfect in CREATIVE theme, image sometimes not covering entire screen.
                        => OK or should fix problem?

            - [ ] projects.html
                - [ ] Add "all_projects" at end of list!
                    => set front matter, etc.
                    {{ .Render "limage" }}

            - [ ] services.html
                - [ ] For "services-container"
                    => When updating to BOOTSTRAP 4, use "justify-content-around"

            - [ ] skills.html
                - [ ] For "$data.download"
                    => When updating to BOOTSTRAP 4, use "float-{sm,md,lg,xl}-{left,right,none}" to allow the button to the right (with offset)

                - [ ] For tags & categories:
                    => When updating to HUGO 0.45, replace:
                        {{ with $.Site.GetPage "section" . }}
                        With
                        {{ with $.Site.GetPage . }}

        - utils
            - [ ] get-keywords.html
                - [ ] Add a parameter to specify order (based on wieght, title, occurrences, ...)
                (now hardcoded on alphanumerical value - at end of file)
            - [ ] get-number-columns.html
                - [ ] Enhance by adding "offsets" & "xl" (& "xs", "sm"?)
                    => Output should be such as:
                        .Scratch.Set "col-sizes" "col-md-6 col-lg-4 col-xl-5"
                        .Scratch.Set "col-offsets" "col-xl-offset-1"
                        & in loop: class="{{ .Scratch.Get "col-sizes" }} {{ .Scratch.Get "col-offsets" }} text-center"
                        ! - delete Scratch variables after, & delete "offsets" after first iteration (end of first)!

        - [ ] footer.html
            - [ ] Fix problem that not at bottom of page.
                => Need changes in CSS for main tags (html, body, sections, etc?)
            - [ ] Set content...

        - [ ] head.html
            (Look at backuped file)
            - [ ] Use some "blocks" to allow overriding parts..
            - [ ] See about the custom fonts (if keep same, change, or remove)
                => And see if "safe"/stable to use URLs...
            - [ ] Check end of file (Shim & Respond.js stuff) 
                => Needed? keep?
            - [ ] Look at other header files (in other themes) 
                => "header.html" in Osprey (lots of other stuff!)
            - [ ] Add meta params in config:
                In {{ "<!-- Meta data -->" | safeHTML }}
                - meta
!                    - favicon
                         (& other favicon sutff...?)
?                    - theme
                        <meta name="theme" content="THEME_NAME">
            - [ ] Check if need other meta params in config:
                In {{ "<!-- Meta data -->" | safeHTML }}
                - author
                - description
                - ...?
            - [ ] Check about Google Analytics stuff (at end of file as well).
            - [ ] Check for RSS stuff
            - [ ] check Favicon stuff (what they are & if needed)
                (From "minimal-academic" theme)
                => Could have a "favicon.html"...
            - [ ] For external "libs" (Bootstrap, FontAwesome, JQuery?)
                => Use CDN & fallback on local files. (see links)
                E.g.: for FontAwesome:
                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous">
            - [ ] Fonts: see what fonts we use, & what's needed.
                In {{ "<!-- Custom Fonts -->" | safeHTML }}
                => Depends on custom CSS!
            - [ ] Check publish meta stuff.
            - [ ] Check about "shiv" & "respond" stuff.


        - [ ] homepage.html
            - [ ] When updating to HUGO version 0.45, replace:
                {{ with $.Site.GetPage "section" . }}
              with:
                {{ with $.Site.GetPage . }}
            - [ ] use google analytics? (or "google_analytics_async" in header?), or none?
                {{ template "_internal/google_analytics.html" . }


        - [ ] tail.html
            - [ ] For external "libs" (Bootstrap, FontAwesome, JQuery?)
                => Use CDN & fallback on local files. (see links)

- static
    - css
        - [ ] custom.css
            - [ ] Check that all variables are listed.
            - [ ] File should be removed from theme (as it is optional, and name specified in "config.toml").

        - [ ] theme.css
            - [ ] Check/adapt everything.
            - [ ] See licensing stuff at beginning.
            - [ ] Should merge "icons-list" rules with "logos-list" & "images-list" rules.
            - [ ] Change size of ".image" once have gallery style images (clickable to view).
                (also for "@media(max-width: 448px)")
            - [ ] Fix box height problem (cells of different height, aligning badly when medium screen).
                => Update to BOOTSTRAP 4 should solve problem (then can remove "min-height: 300px;").

            - [ ] For "main" "min-height", need to consider header and footer heights as well.
                => Write JS code to get the values.

    - js
        - [ ] Check/adapt license etc.








