# WDD Handbook

Handbook for Web Design DeCal students to review concepts from lecture and lab. This handbook is built with Jekyll (and therefore uses Liquid), HTML, CSS, SASS, JS, jQuery, and Grunt.

## Running and Contributing

To start contributing, clone this repository and navigate into the folder:

```
git clone https://github.com/brendacs/wddhandbook.git
```

Then install dependencies using yarn:

```
yarn install
```

Install Jekyll [here](https://jekyllrb.com/) and run:

```
jekyll serve
```

To compile the SCSS files, run:

```
grunt dev
```

If editing SCSS styles, run the below for automatic compiling:

```
grunt watch
```

## Structure and Formatting

This project is based on Jekyll, a templating system that uses Liquid. It is otherwise purely HTML and CSS. Here is some important documentation to read before starting if you've never used Jekyll (I've left out any documentation that involves Jekyll abilities not used in this project):

* [Directories](https://jekyllrb.com/docs/structure/)
* [Front Matter](https://jekyllrb.com/docs/front-matter/)
* [Liquid](https://jekyllrb.com/docs/liquid/)
* [Includes](https://jekyllrb.com/docs/includes/)
* [Layouts](https://jekyllrb.com/docs/layouts/)

### Custom Structure

Specifically for this project, there is a certain structure to things to make things easier to add and remove. It also structured in a way that makes sense for the hierarchies of the handbook. This will be addressed here from the highest level to the lowest level.

First, the folders you can ignore:

* **`_site`**: This folder contains the site compiled into something the browser can read by Jekyll.
* **`.sass-cache`**: A cache might show up when your CSS files are compiled to SCSS
* **`node_modules`**: This will show up once `yarn install` is run, contains dependencies

Now the important parts:

* **`_includes`**: Includes are fragments of pages that are shared or used across multiple pages or layouts, such as a nav or the sidebar that's on every content page.
* **`_layouts`**: This folder contains page templates that are shared or used across multiple pages, such as `directory.html` for both the [programming](https://handbook.wdd.io/directories/programming.html) and [design](https://handbook.wdd.io/directories/design.html) directories that point to various weeks with different content (the content of each week itself uses the `content.html` layout for consistent styling and html).
* **`directories`**: This folder contains the front matter for both the design and programming directories (the pages that link to all the different weeks of content). These pages use the `directory.html` layout from the `_layouts` folder, as the front matter specifies with `layout: directories`. As you can see, the directories are almost the same except for a few aspects, which is why they share a common layout, but are tweaked based on the front matter which specifies whether it is the design directory or the programming directory.
* **`content`**: If you are adding learning content for students for a week, it will go here. There are subdirectories separating design and programming weeks. The files are titled by week, and there is one for each week. We will go more in-depth into this in the next section as most non-development time will be spent here.
* **`assets`**: Any images and styles should be placed in here. Nothing should be added or changed in the CSS folder; it is where the compiled SCSS goes to. In a later section, we will talk about the SCSS file breakdowns a bit more in-depth.

### Further Breakdown of Content

#### Front Matter Variables

All content is written within the front matter of an html file for each week. Please read the documentation for front matter linked above if you do not understand what that is. This makes it possible to reuse the same layout, `_layouts/content.html`, for every week's content.

After creating an html file named `week-#.html`, we can begin writing the front matter and the content. In the front matter, we must specify the **week** this content is for, the **title** of the page (e.g., "The Structure of Websites"), the **layout** we are using which will always be `content` for these pages, the **link-type** ("programming-link" for blue links and "design-link" for green links), and the **text** (which is the content you are writing for the page). See `content/programming/week-1.html` for an example.

#### Text Guidelines

For the content in the `text` portion of the front matter, we will use html to structure and style the page. Because of the usage of reusable classes and global styling of html tags in this project, there are a few things to discuss that go highly in conjunction with the styles and reused classes:

* **Headings**: There are only `<h2>` and `<h3>` styled headings in `_global.scss`. Use `<h2>` for main headings and topics, use `<h3>` for subheadings under `<h2>` headings. Always make the most of these to break up content chunks and walls of paragraphs.
* **Paragraph blocks**: Each paragraph should be enclosed by `<p>` tags which are also styled in `_global.scss`.
* **Line breaks**: Currently, because of poor initial design, there is a line break or `<br/>` tag between each paragraph and two `<br/>` tags before each new heading. Depending on spacing, there are 1-2 line breaks before images as well (typically 2, but sometimes it causes too much whitespace in which case only use 1). Eventually, styles should be updated to on longer require line breaks.
* **Special text**: There may be times when you need to highlight or bold words or write in-line code. In these cases, use a `<span>` tag for bolded words and use a `<code>` tag for in-line code. Both of these tags must be within (children of) paragraph tags. There are different classes for design and programming `<span>` tags and `<code>` tags since the programming content will be WDD's blue while the design content will be WDD's green. The respective classes are `programming-highlighted-text` and `design-highlighted-text`.
* **Special symbols**: If `>`, `<`, or `&` needs to be written, use `&lt;`, `&gt;`, and `&amp;` instead so that it doesn't get mixed up with the rest of the html.
* **Links**: Use the class `programming-link` for links in the programming sections of the handbook and `design-link` for links in the design sections.
* **Images**: Use the class `content-image` for images that go in the content pages. If the size needs to be adjusted, use an in-line style attribute and a percentage. Example from programming week 1: `<img class=\"content-img\" src=\"../../assets/images/tags.png\" style=\"width: 80%\" />` (the backslashes cancel double quotes).
* **Captions**: Most images will have captions either to give credit to the original source or to further describ the image. These should use paragraph tags with the class `caption`.
* **Code blocks**: At the end of each programming page are example code blocks, handled by the `code.html` in `_includes`. This file uses fairly straightforward if-else statements to include different code blocks in different weeks.

Important note: When adding classes, remember that all the content is written within the front matter of an html file, where there are already quotes around the text. Because of this, when using quotes to specify classes, you either must cancel using a backslash `\` or use single quotes. The preferred way is cancelling using a backslash.

### Styles Structure

* Reusable style files
  * **`_global.scss`**: Global styles, handbook default styles for tags and reusable classes.
  * **`_variables.scss`**: Variables for colors used throughout the handbook.
  * **`_mixins.scss`**: Reusable font styling, transitions, and other styles.
* Component style files
    * **`_content.scss`**: Styles for the content layout.
    * **`_home.scss`**: Styles for the home layout.
    * **`_sidebar.scss`**: Styles for the sidebar and sidebar-item includes.
    * **`_topics.scss`**: Style for the topic-item include.
* Miscellaneous style files
  * **`_reset.scss`**: Eric Meyer's CSS reset.
  * **`main.scss`**: Main file, where all other partials are imported.
