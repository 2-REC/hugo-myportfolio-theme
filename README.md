# MyPortfolio Theme

"MyPortfolio Theme" is a portfolio for developers or creatives to showcase their projects.
It is based on the [HUGO "Creative" theme](//github.com/digitalcraftsman/hugo-creative-theme) by [digitalcraftsman](//github.com/digitalcraftsman), itself based on the [original Bootstrap theme](//github.com/IronSummitMedia/startbootstrap-creative) by [David Miller](//github.com/davidtmiller).

The main feature of this theme is the possibility to have more than one portfolio section.
It can be used to showcase several portfolios, typically convenient for polyvalent individuals or companies.
One could for example have different portfolios depending on the type of work, such as "Technical", "Artistic", "Experimental", etc.
Another could have different portfolios grouping his work into "Profesional", "Personal" and "Academic".

Noteworthy features of this Hugo theme are:
- Configurable home page (sections order and presence, as well as content).
- Possibility to have arbitrary number of content sections.
- Responsive portfolio grids with hover effects.
- Can be used as a profesional showcase, a personal one, or both.
- Dynamic generation of pages based on data content.
- Image gallery functionality*
- Easy site navigation via header navigation bar.
- Easy content navigation via sidebars, and taxinomies (tags and categories).
- Customisable CSS to override default values (such as main theme colours, fonts, etc.).
- 404 page.
- ...

* Thanks to [liwenyip](//github.com/liwenyip) for the [PhotoSwipe](https://photoswipe.com) gallery integration in Hugo: [hugo-easy-gallery](//github.com/liwenyip/hugo-easy-gallery)


![Hugo MyPortfolio Theme Screenshot](https://github.com/2-REC/hugo-myportfolio-theme/blob/master/images/screenshot.png)

## Theme structure and layout

As in the "Creative" theme, the theme's homepage holds the different sections. Its layout is a typical vertical single page, with a floating navigation bar on top.

The structure and layout of the each section is described hereafter.


### HOME

The welcome section, at the top of the homepage.


### ABOUT

The introduction/presentation section.
It is based on the "Biography" section of the ["Academic" theme](//github.com/gcushen/hugo-academic).


### SERVICES

Section presenting the services that can be provided, listed in categories and sub-categories.


### SKILLS

Section typically providing a link to a downloadable resume, as well as listing the different tags and categories that are found in the different projects sections.


### PROJECTS

Section serving as a portfolio, displaying a set of project categories (can be companies, technologies, etc.), linking to individual pages containing projects listing.
It is based on the "Creative" theme "Portfolio" section, but with links to other pages instead of pop-up windows.

The section can be present more than once if several portfolio are to be showcased. It could for example be used to display a "profesional" portfolio as well as a "personal" one.


### CONTACT

Section providing the contact information.


## Installation

Inside the folder of your Hugo site run:

    $ cd themes
    $ git clone https://github.com/2-REC/hugo-myportfolio-theme

For more information read the official [setup guide](//gohugo.io/overview/installing/) of Hugo.


## Getting started

After installing the "MyPortfolio" Theme successfully it requires just a few more steps to get the site running.


### The config file

In the [`exampleSite`](//github.com/2-REC/hugo-myportfolio-theme/tree/master/exampleSite) folder of this theme there is a [`config.toml`](
//github.com/2-REC/hugo-myportfolio-theme/blob/master/exampleSite/config.toml) file.

Copy this file in the root folder of the Hugo site.
Strings and values can be changed in order to customize the website.

Settings about the different sections in the homepage as well as the navigation menu are defined in this file.
Details about each parameter and their role can be found in the file itself.


Additionally to the configuration file, data files (located in the "data" folder) are required for the different sections of the homepage. The required data files are the folowing:
- about.yaml
- contact.yaml
- home.yaml
- services.yaml
- skills.yaml
The files can also be in JSON format, but need to have the same names.
The "Projects" section(s) can be optional, but it is advised to have at least one (it is a "Portfolio" theme after all ...).
However, if there are no projects sections, the "projects" entry of the "[params.navigation.links]" can be removed.

The following paragraphs detail the required data for each of the sections.


### HOME: Set the homepage header

The content of the top section of the homepage is fetch from the "home" data file.

The different parameters that can be used are:
- "title": The title for the website. Typically your name or company name.
- "subtitle": A subtitle. Typically the kind of services or specialty you provide.
- "background": The image used for the background.
- "text": A short phrase to draw attention and make the visitor to see more.
- "button_text": The text displayed on the scrolling button.

All the parameters are optional - if not defined, it will not be added to the page content.


### ABOUT: Introduce yourself

The content of the "ABOUT" section of the homepage is fetch from the "about" data file.

The different parameters that can be used are:
- "title": The title of the section. Typically "ABOUT" would be used.
- "avatar": The image used for the avatar.
- "short_text": A short text briefly describing the company or person.
- "long_text": A longer text providing more detailled information, and potentially links to the other sections.

All the parameters are optional - if not defined, it will not be added to the page content.


### SERVICES: Add your services

The content of the "SERVICES" section of the homepage is fetch from the "services" data file.

The different parameters that can be used are:
- "title": The title of the section. Typically "SERVICES" would be used.
- "background_image": The image used for the background.
- "services": List of services. At least one must be provided.
    Each service has a set of subfields:
    - "name": The name of the service.
    - "icon": The icon used for the service.
    - "icon_pack": The icon package/family (look at icons documentation).
    - "text": A text describing the service.
    - "list": A list of sub-services displayed as bullet points.

All the parameters except "services" are optional - if not defined, it will not be added to the page content.
The "services" list parameter must exist and contain at least one element.


### SKILLS: Show your skills

The content of the "SKILLS" section of the homepage is fetch from the "skills" data file.

The different parameters that can be used are:
- "title": The title of the section. Typically "SKILLS" would be used.
- "tags_label": Label used for the tags found in the content sections.
- "categories_label": Label used for the categories found in the content sections.
- "text": Text describing the content of the page.
- "download":
    - "button_text": Text used for the button.
    - "filename": Name of the file to download. The file must be in "static/files".
    - "icon": The icon used for the button.
    - "icon_pack": The icon package/family (look at icons documentation).

All the parameters except "text" are optional - if not defined, it will not be added to the page content.


### PROJECTS: Create a portfolio (or more)

This section serves as a showcase for a "Portfolio" of projects.
It is composed of a grid representing a set of subsections, each grouping "Projects" into "Categories".

It is based on the "Portfolio" section of the CREATIVE theme, but with an additional level of categories above the projects level. Also, instead of opening a pop-up window when selecting an element in the grid, it opens a new page displaying the contained projects.

A portfolio section "Projects" is defined in the Homepage via the "config.toml" configuration file. Additionaly to the entry specified in the file, a directory with the same name must exist at the top level of the website file structure, containing its associated "_index.md" file.

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

There can be more than one main projects sections. Different categories could for example be "Development", "Design", "Music", etc. Another set of categories could be "Profesional", "Personal", "Freelance", etc.


### CONTACT: Add contact information

The content of the "CONTACT" section of the homepage is fetch from the "contact" data file.

The different parameters that can be used are:
- "title": The title of the section. Typically "CONTACT" would be used.
- "background_image": The image used for the background.
- "photo": The image used for the avatar.
- "description": A short text typically with a call to action.
- "email": Email information.
    - "address: Email address.
    - "link": Whereas the address can be used as a link.
    - "icon": The icon used next to the address.
    - "icon_pack": The icon package/family (look at icons documentation).
- "social": List of social network icons/links.
    - "icon": The icon used for the button.
    - "icon_pack": The icon package/family (look at icons documentation).
    - "link": The link to the social network profile page.

All the parameters are optional - if not defined, it will not be added to the page content.


### Run the website

In order to see your site in action, run Hugo's built-in local server. 

    $ hugo server

In the browser, enter [`localhost:1313`](http://localhost:1313) in the address bar.


## Going further

### Customise the appearance - CSS Override

A set of CSS rules are used to define the appearance of the website.
To make the website look more personal or to make it fit with the colour schemes of your company/brand, some CSS variables can be directly overridden using extra custom files (and thus not requiring to change anything in the code or main CSS file).

In order to use custom files, simply add the files in the "static/css" directory, and specify their name (with extension) in the "custom_css" array variable in the "config.toml" file.

The CSS variables that can be overridden are listed in the "custom.css" file (in "static/css"). The file indicates for each variable the default value that will be used. These values are defined either in the "default.css" file, or directly hardcoded in the website's main CSS file ("theme.css") in case they're not defined elsewhere. The provided "custom.css" file can be used as template file, by uncommenting the desired variables.



## Contributing

If you have found a bug, or have an idea for a new feature, please feel free to use the [issue tracker](//github.com/2-REC/hugo-myportfolio-theme/issues) to let me know.
You can also make directly a [pull request](//github.com/2-REC/hugo-myportfolio-theme/pulls).

Please create a separate branch for your pull request.


## License

This theme is released under the Apache License 2.0 For more information read the [license](//github.com/2-REC/hugo-myportfolio-theme/blob/master/LICENSE).


## Acknowledgements

Thanks to:

- [digitalcraftsman](//github.com/digitalcraftsman) for creating the Creative theme
- [Steve Francia](//github.com/spf13) for creating Hugo and the awesome community around the project
- [David Miller](//github.com/davidtmiller) for creating the original theme
- [liwenyip](//github.com/liwenyip) for the PhotoSwipe gallery integration in Hugo
- [PhotoSwipe](https://photoswipe.com) for the gallery functionality
