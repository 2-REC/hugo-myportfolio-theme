# MyPortfolio Theme

"MyPortfolio Theme" is a portfolio for developers or creatives to showcase their projects.
It is based on the [HUGO "Creative" theme](//github.com/digitalcraftsman/hugo-creative-theme) by [digitalcraftsman](//github.com/digitalcraftsman), itself based on the [original Bootstrap theme](//github.com/IronSummitMedia/startbootstrap-creative) by [David Miller](//github.com/davidtmiller).

Noteworthy features of this Hugo theme are:
- Responsive portfolio grid with hover effects.
- Possibility to have more than one content sections.
- Dynamic generation of pages based on data content.
- Customisable CSS to override default values (such as main theme colours, fonts, etc.).
- ...

![Hugo MyPortfolio Theme Screenshot](https://github.com/2-REC/hugo-myportfolio-theme/blob/master/images/screenshot.png)

## Theme structure and layout

As in the "Creative" theme, the theme's homepage holds the different sections. Its layout is a typical vertical single page.

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
It is based on the "Creative" theme "Portfolio" section, but with links to other pages instead of a pop-up window.


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

Settings about the different sections in the homepage as well as the navigation menu can be defined in this file.
Details about each parameter and their role can be found in the file itself.


Additionally to the configuration file, data files (located in the "data" folder) are required for the different sections of the homepage.
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

The content of the "about" section of the homepage is fetch from the "about" data file.

The different parameters that can be used are:
- "title": The title of the section. Typically "ABOUT" would be used.
- "avatar": The image used for the avatar.
- "short_text": A short text briefly describing the company or person.
- "long_text": A longer text providing more detailled information, and potentially links to the other sections.

All the parameters are optional - if not defined, it will not be added to the page content.


### SERVICES: Add your services

The content of the "services" section of the homepage is fetch from the "services" data file.

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

The content of the "skills" section of the homepage is fetch from the "skills" data file.

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
(TODO: "text" should be optional)


### PROJECTS: Create a portfolio (or more)

!!!! TODO !!!!
...


### CONTACT: Add contact information

The content of the "skills" section of the homepage is fetch from the "skills" data file.

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

!!!! TODO !!!!
- describe css override
- ...?


## Contributing

!!!! TODO !!!!
Did you found a bug or got an idea for a new feature?
Feel free to use the [issue tracker](//github.com/...theme.../issues) to let me know.
Or make directly a [pull request](//github.com/...theme.../pulls).

Please create a separate branch for your pull request.


## License

This theme is released under the Apache License 2.0 For more information read the [license](//github.com/2-REC/hugo-myportfolio-theme/blob/master/LICENSE).


## Acknowledgements

Thanks to 

- [digitalcraftsman](//github.com/digitalcraftsman) for creating the Creative theme
- [Steve Francia](//github.com/spf13) for creating Hugo and the awesome community around the project
- [David Miller](//github.com/davidtmiller) for creating the original theme
