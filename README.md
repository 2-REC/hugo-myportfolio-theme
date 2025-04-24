> **__TODO__**: Needs to be updated (check parameters)

# MyPortfolio Theme

> **__NOTE:__** Due to the theme specific structure (allowing more than 1 section for the posts, and the homepage sections defined in "data" directory instead of content), the "exampleSite" doesn't respect the classic Hugo structure, and is thus not working correctly.<br>
The "Professional" and "Personal" links and sections are not available and don't allow to see the demo site properly.<br>
To visualise a working example of the theme, you are invited to take a look at [my portfolio website](TODO: FIX ADDRESS).

<br>

"MyPortfolio Theme" is a portfolio for developers or creatives to showcase their projects.

It is based on the [HUGO "Creative" theme](//github.com/digitalcraftsman/hugo-creative-theme) by [digitalcraftsman](//github.com/digitalcraftsman), itself based on the [original Bootstrap theme](//github.com/IronSummitMedia/startbootstrap-creative) by [David Miller](//github.com/davidtmiller).


## Features

A key feature of this theme is its support for multiple portfolio sections.
This is especially useful for versatile individuals or companies looking to showcase different types of work.

For instance, you might create separate portfolios for "Technical" and "Artistic" projects.
Alternatively, you could organize your work into categories like "Professional", "Personal", and "Academic".

Noteworthy features of this Hugo theme are:

* Configurable home page (sections order and presence, and their content)
* Possibility to have arbitrary number of content/projects sections
* Responsive portfolio grids with hover effect
* Can be used as a professional showcase, a personal one, or both
* Image gallery with easy and intuitive navigation controls (*)
* Easy site navigation via header navigation bar
* Easy content navigation via sidebar: hierarchy (siblings and parents), and taxonomies (tags and categories)
* Possibility to display siblings, children posts and children lists independently for each page, with associated orders
* Customisable CSS to override default values (such as main theme colours, fonts, etc.)
* Easy copyright image labelling per image, per gallery or per project
* 404 page


(*) Thanks to [liwenyip](//github.com/liwenyip) for the [PhotoSwipe](https://photoswipe.com) gallery integration in Hugo: [hugo-easy-gallery](//github.com/liwenyip/hugo-easy-gallery)


![Hugo MyPortfolio Theme Screenshot](https://github.com/2-REC/hugo-myportfolio-theme/blob/master/images/screenshot.png)


## Theme structure and layout

As in the "Creative" theme, the theme's homepage holds the different sections. Its layout is a typical vertical single page, with a floating navigation bar on top.

Each section has a specific layout and contains specific data, some of which is customisable.
These custom values for layout and data are defined respectively in the common ["config"](#config-file) file, and in the section's corresponding ["data"](#data-files) file.

The different sections are described hereafter.


### HOME

The welcome section, at the top of the homepage.


### ABOUT

The introduction/presentation section.
It is based on the "Biography" section of the ["Academic" theme](//github.com/gcushen/hugo-academic).


### SERVICES

Section presenting the services that can be provided, listed in categories and sub-categories.


### SKILLS

Section typically providing a link to a downloadable resume, as well as listing the different tags and categories that are found in the projects sections.


### PROJECTS

Section serving as a portfolio, displaying a set of project categories (can be companies, technologies, etc.), each linking to their respective individual page containing projects listing.

It is based on the "Creative" theme "Portfolio" section, but with links to other pages instead of pop-up windows.

The section can be present more than once if several portfolio are to be showcased. It could for example be used to display a "professional" portfolio as well as a "personal" one.


### CONTACT

Section providing the contact information.


### Custom Sections

If desired, custom sections can be added to the homepage.

Steps to add a new custom section:
* HTML<br>
    Create an HTML file in the site's "_layouts/partials/sections_" (NOT in the theme's directory under "_themes_").<br>
    E.g.: `layouts/partials/sections/custom_section.html`<br>
    The file must define a "`section`" element with the "`id`" matching the file name. The file can be based on an existing section file, or created from scratch.<br>
    Parameters specific to the page can be defined in the ["config"](#config-file) file.
    Data specific to the page can be defined in a ["data"](#data-files) file.
    ```
    {{ $params := .Site.Params.custom_section }}
    {{ $data := .Site.Data.custom_section }}
    <section class="section" id="custom_section">
        ...
    </section>
    ```

* DATA<br>
    (_optional_) Create a YAML data file in the site's "_data_" directory (not in "_themes_"). <br>
    E.g.: `data/custom_section.yaml`<br>
    The content of the file can be accessed in the HTML file with:
    ```
    {{ $data := .Site.Data.custom_section }}
    ```

* CONFIG<br>
    In the site's config file ("_config.toml_"):
    * Add an entry for the custom section in the sections list (it has to match the section's HTML file name).<br>
        E.g.:
        ```
        [params.homepage]
            sections = [ "home", "about", "custom_section", "services", "skills", "projects", "contact" ]
        ```
    * Add an entry in the navigation links.<br>
        E.g.:
        ```
        [params.navigation.links]
            ...
            custom_section = "CUSTOM"
        ```

    * (_optional_) Add an entry for the section parameters.<br>
        E.g.:
        ```
        [params.custom_section]
            ...
        ```
        The paramaters defined in the entry can be accessed in the HTML file with:
        ```
        {{ $params := .Site.Params.custom_section }}
        ```

* CSS<br>
    Create a CSS file in the "_static/css_" directory of the site, and import it in the HTML file.<br>
    E.g.:
    ```
    <link rel="stylesheet" href="css/custom_section.css">
    ```


### Custom Homepage

Custom components can also be added to the homepage.

As an example, the following steps describe how to add a fixed overlay image covering the homepage (not scrolling).

* HTML
    * Create a new HTML file "_homepage-custom.html_" in "_layouts/partials_".
    * Content:
        ```
        <div id="home_overlay"
             style="--home-bkg-image: url('{{ "images/overlay_image.png" | absURL }}');"
            >
            <link rel="stylesheet" href="css/homepage-custom.css">
            <script src="{{ "js/homepage-custom.js" | relURL }}"></script>
        </div>
        ```
        > **__NOTE:__** An image named "_overlay_image.png_" must be present in "_static/images_".

* CSS
    * Create a new CSS file "_homepage-custom.css_" in "_static/css_".
    * Content:
        ```
        #home_overlay {
            position: absolute;
            top: 0;
            padding: 0;
            width: 100%;

            background-image: var(--home-bkg-image,);
            background-attachment: fixed;
            background-position: center bottom;

            background-size: 100% 100%;
        }
        ```
* JS
    * Create a new JS file "_homepage-custom.js_" in "_static/js_".
    * Content:
        ```
        var body = document.body;
        var home_overlay = document.getElementById("home_overlay");
        window.onload = function () {
            var height = Math.max(body.scrollHeight, body.offsetHeight);
            home_overlay.style.height = height + "px";
        };
        window.onresize = function () {
            var height = Math.max(body.scrollHeight, body.offsetHeight);
            home_overlay.style.height = height + "px";
        };
        ```


## Installation

Inside the folder of your Hugo site run:
```
$ cd themes
$ git clone https://github.com/2-REC/hugo-myportfolio-theme
```

For more information read the official [setup guide](//gohugo.io/overview/installing/) of Hugo.


## Getting started

After installing the "MyPortfolio" Theme, a few more steps are required to get the site running.


### The config file {#config-file}

Settings about the different sections in the homepage as well as the navigation bar and menu are defined in the config file, named "_config.toml_".

Each section has a set of parameters that can be modified to customise the site. Most of these are related to the layout.
Details about each parameter and their role can be found in the file itself.

In the [`exampleSite`](//github.com/2-REC/hugo-myportfolio-theme/tree/master/exampleSite) folder of this theme there is an example [`config.toml`](
//github.com/2-REC/hugo-myportfolio-theme/blob/master/exampleSite/config.toml) file.
The file should be copied in the root folder of the site, and modified as desired.


### Data Files {#data-files}

Additionally to the configuration file, data files (located in the "_data_" folder) are required for the different sections of the homepage.

The required data files are the folowing:

* about.yaml
* contact.yaml
* home.yaml
* services.yaml
* skills.yaml

The files can also be in JSON format, but need to have the same names.

The "Projects" section(s) are optional, but it is advised to have at least one (it is a "Portfolio" theme after all :) ).
However, in case there are no projects sections, the "projects" entry of the "[params.navigation.links]" can be removed.

Resource files (images, videos, etc.) that are specified in the data files must be located in the "_static_" directory of the site.
The following paragraphs detail the required data for each of the sections.


### HOME - Set the homepage header

The content of the top section of the homepage is fetched from the "home" data file.

The different parameters that can be used are:
* `title_logo`: A small image displayed above the title.<br>
* `title`: The title for the website.<br>
    Typically your name or company name.
* `subtitle`: A subtitle.<br>
    Typically the role or types of provided services.
* `background`: The image used for the background.
* `background_opacity`: The opacity of the background, given in %.<br>
    The background colour will appear through the image. This colour is defined by the "`--home-bkg-image-opacity`" CSS variable (see [custom CSS](#custom-css)).
* `background_hidden`: The image used for the second background, shown when scrolling down.
* `background_hidden_speed`: Speed at which the hidden background appears when scrolling.<br>
    * `1`: after full screen scroll
    * `2`: after 1/2 (50%) screen scroll
    * etc.
* `background_video`: An MP4 video used for the background.<br>
    This is ignored if a `background` is defined.
* `text`: A short phrase to catch the eye and invite visitors to explore further.

Additionally, the following parameters can be used to customize the scrolling button:
* `button_image`: The image used for the button.
* `button_text`: The text displayed on the button.
* `button_icon`: The icon used for the button.<br>
    Additional subfields must be defined for the icon:<br>
    * `icon`: The name of the icon
    * `pack`: The pack/library of the icon

    E.g.:
    ```
    button_icon:
      icon: "fa-arrow-down"
      pack: "fas"
    ```

> **__NOTE:__** The 3 button parameters are mutually exclusive, so only one can be used (the others will be ignored).
They are presented in their order of priority.


All the parameters in the home section are optional: if not defined, their corresponding element will not be added to the page content.


### ABOUT - Introduce yourself

The content of the "ABOUT" section of the homepage is fetched from the "about" data file.

The different parameters that can be used are:
* `title`: The title of the section.<br>
    Typically "ABOUT" would be used.
* `avatar`: The image used for the avatar.
    * (_optional_) `avatar2`: Extra image displayed when hovering the profile image.
* `profile_text`: A short text briefly describing the company or person.
* `main_text`: A longer text providing more detailled information.<br>
    Typically, the text will contain links to the other sections.
* `background_image`: Background image.


All the parameters are optional: if not defined, their corresponding element will not be added to the page content.


### SERVICES - Add your services

The content of the "SERVICES" section of the homepage is fetched from the "services" data file.

The different parameters that can be used are:
* `title`: The title of the section.<br>
    Typically "SERVICES" would be used.
* `background_image`: The image used for the background.
* `services`: The list of services. At least one must be provided.<br>
    Each service has a set of subfields:
    * `name`: The name of the service.
    * `icon`: The icon used for the service.
    * `icon_pack`: The icon package/family (look at icons documentation).
    * `text`: A short text describing the service.
    * `list`: A list of sub-services displayed as bullet points.

    `text`, `icon_pack` & `list` are optional.

    E.g.:
    ```
    services:
    - name: "Service 1"
      icon: "fa-chalkboard-teacher"
      icon_pack: "fas"
      list: [ "One thing", "Another thing", "And some more ..." ]
    - name: "Service 2"
      icon: "fa-window-restore"
      icon_pack: "fas"
      text: "I am also able to do this."
    ```


All the parameters except "services" are optional: if not defined, their corresponding element will not be added to the page content.
The "services" list parameter must exist and contain at least one element.


### SKILLS: Show your skills

The content of the "SKILLS" section of the homepage is fetched from the "skills" data file.

The different parameters that can be used are:

* "title": The title of the section. Typically "SKILLS" would be used.
* "tags_label": Label used for the tags found in the content sections.
* "categories_label": Label used for the categories found in the content sections.
* "text": Text describing the content of the page.
* "download":
    * "button_text": Text used for the button.
    * "filename": Name of the file to download. The file must be in "static/files".
    * "icon": The icon used for the button.
    * "icon_pack": The icon package/family (look at icons documentation).


All the parameters except "text" are optional - if not defined, it will not be added to the page content.


### PROJECTS: Create a portfolio (or more)

This section serves as a showcase for a "Portfolio" of projects.
It is composed of a grid representing a set of subsections, each grouping "Projects" into "Categories".

It is based on the "Portfolio" section of the "Creative" theme, but with an additional level of categories above the projects level. Also, instead of opening a pop-up window when selecting an element in the grid, it opens a new page displaying the contained projects.

A portfolio section "Projects" is defined in the Homepage via the "config.toml" configuration file. Additionally to the entry specified in the file, a directory with the same name must exist at the top level of the website file structure, containing its associated "_index.md" file.

As an example, to have two sections for a professional portfolio and a personal porfolio, the following entry could be added to the "[params.projects]" group in "config.toml" file:

    categories = [ "pro", "perso" ]

It will create 2 projects sections identified by "pro" and "perso" respectively.
The values specified have to correspond to directories existing in the "content" directory of the website ("content/pro" and "content/perso").

In order to have the two sections accessible via the main navigation bar (at the top of the screen), entries also need to be added to the "[params.navigation.links]" group in "config.toml" file:

    projects = [
        { section = "pro", label = "PROFESSIONAL" },
        { section = "perso", label = "PERSONAL" }
    ]

It will create 2 projects sections links labelled "PROFESSIONAL" and "PERSONAL", pointing to the "pro" and "perso" sections respectively (the values specified for the "section" keys need to correspond to the sections identification values).

![Section Screenshot](https://github.com/2-REC/hugo-myportfolio-theme/blob/master/images/section.png)

A section is composed of "subsections" (typically categories, companies, technologies, etc.) grouping projects together. A subsection is defined by a subdirectory in a section directory also containing its associated "_index.md" file. Each subsection will be automatically added in the section menu.
Sectikns and subsections correspond to list pages in the Hugo jargon.

![List Screenshot](https://github.com/2-REC/hugo-myportfolio-theme/blob/master/images/list.png)

Subsections are in turn composed of "projects", each one defined by a post file or by a directory in case it is a bundle - containing more than a file, and generally images (the directiry must contain a "index.md" file in order to be considered as a post entry).

![Project Screenshot](https://github.com/2-REC/hugo-myportfolio-theme/blob/master/images/project.png)

For each post ("project"), "tags" and "categories" should be specified, in order to allow easy keywords filtering (the taxonomy pages resulting in the filtering results will automatically be generated by Hugo).

There can be more than one main projects sections. Different categories could for example be "Development", "Design", "Music", etc. Another set of categories could be "Professional", "Personal", "Freelance", etc.


### CONTACT: Add contact information

The content of the "CONTACT" section of the homepage is fetched from the "contact" data file.

The different parameters that can be used are:

* "title": The title of the section. Typically "CONTACT" would be used.
* "background_image": The image used for the background.
* "photo": The image used for the avatar.
* "description": A short text typically with a call to action.
* "email": Email information.
    * "address: Email address.
    * "link": Whereas the address can be used as a link.
    * "icon": The icon used next to the address.
    * "icon_pack": The icon package/family (look at icons documentation).
* "social": List of social network icons/links.
    * "icon": The icon used for the button.
    * "icon_pack": The icon package/family (look at icons documentation).
    * "link": The link to the social network profile page.


All the parameters are optional - if not defined, it will not be added to the page content.


## Run the website

In order to see your site in action, run Hugo's built-in local server:
```
$ hugo server
```

In the browser, enter `localhost:1313` in the address bar.

To be able to view the website from other machines within the same local network (such as a mobile phone connected via Wi-Fi), the following command can be used:
```
$ hugo server --bind <IP> --baseURL http://<IP> -D --disableFastRender
```
where `<IP>` is the IP address of the machine running the server.

A message indicating the server's address will be displayed, for example:
```
Web Server is available at http://192.168.0.7:1313/ (bind address 192.168.0.7)
```
The address can be entered in browsers to reach the website.


## Going further

### Customise the appearance - CSS Override {#custom-css}

CSS rules are used to define the appearance of the website.

To make the website look more personal or to make it fit with the colour schemes of your company/brand, some CSS variables can be directly overridden using extra custom files (and thus not requiring to change anything in the code or main CSS file).

In order to use custom CSS files to override the variables, add the files in the "_static/css_" directory, and specify their name (with extension) in the "`custom_css_vars`" array variable of the "_config.toml_" file of the site.

The CSS variables that can be overridden are listed in the "_default.css_" file (in the theme's "_static/css_" directory). The file also defines for each variable its default value.

The provided "_custom_vars.css_" (in the theme's "_static/css_" directory) file can be used as template file, by uncommenting the desired variables and setting their new values (the file should ideally first be copied in the site's "_static/css_" directory).


In addition, if bigger changes are desired, CSS rules can be modified or added by using custom CSS files. These files need to be located in the site's "_static/css_" directory, and their names (with extension) need to be added in the "`custom_css`" array variable of the "_config.toml_" file.

> **__NOTE__**: Custom CSS rules should be defined in files specified in "`custom_css`", and Custom CSS variables should be defined in files specified in "`custom_css_vars`". Not respecting this might result in unexpected behaviour.


### Galleries

Image galleries can be added to posts by using shortcodes, thanks to a modified version of "[hugo-easy-gallery](https://www.liwen.id.au/heg/)".

Documentation and licence of the original project from [Li-Wen Yip](https://www.liwen.id.au/) can be found at the [repository page](https://github.com/liwenyip/hugo-easy-gallery/).


#### Parameters

From:<br>
https://github.com/liwenyip/hugo-easy-gallery/?tab=readme-ov-file#-gallery--shortcode-usage

* `dir` (default: none)
    * Directory containing images (all the images found in the directory will be part of the gallery).
    * If not set, a list of "figure" shortcode(s) can be added inside the "gallery" shortcode.
* `thumb` (default: `-thumb`)
    * Thumbnail suffix.
    * "[image].jpg" is used for the hi-res image, and "[image]-thumb.jpg" is used for the thumbnails. If [image]-thumb.jpg doesn't exist, then [image].jpg will be used for both hi-res and thumbnail images.

Optional parameters:
* `caption-position`: Determines the captions' position over the image.
    * `bottom` (default)
    * `center`
    * `none` (hides captions on the page: will only show in PhotoSwipe)
* `caption-effect`: Determines if/how captions appear upon hover.
    * `slide` (default)
    * `fade`
    * `none` (captions always visible)
* `hover-effect`: Determines if/how images change upon hover.
    * `zoom` (default)
    * `grow`
    * `shrink`
    * `slideup`
    * `slidedown`
    * `none`
* `hover-transition`: Determines if/how images change upon hover.<br>
    => This parameter only works if `hover-effect` is set.
    * not set: smooth transition (default)
    * `none`: hard transition

#### New Parameters

Added optional parameters.

* `static` (default: `false`)
    * Images are by default looked for in the directory inside the post's content: "content/posts/.../\<dir>".
    * If specified, images are looked for in the site's "static" folder (as it was originally).
* `images_copyright`: String (copyright)<br>
    => General copyright for all images.
* `images`: Array (images parameters)
    * `src`: String (filename) - MANDATORY<br>
        => Must correspond to an image in "dir" directory.
    * `title`: String (legend)<br>
        => Legend of the image.
    * `copyright`: String (copyright)<br>
        => Specific copyright for the image.

Additional parameters for the partial:
* `page` (automatic in shortcode)


## Contributing

If you have found a bug, or have an idea for a new feature, please feel free to use the [issue tracker](//github.com/2-REC/hugo-myportfolio-theme/issues) to let me know.

You can also make directly a [pull request](//github.com/2-REC/hugo-myportfolio-theme/pulls).
Please create a separate branch for your pull request.


## License

This theme is released under the Apache License 2.0 For more information read the [license](//github.com/2-REC/hugo-myportfolio-theme/blob/master/LICENSE).


## Acknowledgements

Thanks to:

* [digitalcraftsman](//github.com/digitalcraftsman) for creating the Creative theme
* [Steve Francia](//github.com/spf13) for creating Hugo and the awesome community around the project
* [David Miller](//github.com/davidtmiller) for creating the original theme
* [Li-Wen Yip](//github.com/liwenyip) for the PhotoSwipe gallery integration in Hugo
* [PhotoSwipe](https://photoswipe.com) for the gallery functionality
