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

There are a few things to discuss here that go highly in conjunction with the styles and reused classes:

* **Headings**: There are only `h2` and `h3` styled headings. Use `h2` for main headings and topics, use `h3` for subheadings under `h2` headings. Always make the most of these to break up content chunks and walls of paragraphs.
* **Paragraph blocks**: 
* **Line breaks**: 
* **Special text**: 
  * **Bolded text**: 
  * **In-line code**: 
* **Links**: 
* **Images**: 
* **Captions**: 
* **Code blocks**: 

### Styles Structure

* Reusable style files
  * **`_global.scss`**: 
  * **`_variables.scss`**: 
  * **`_mixins.scss`**: 
* Component style files
    * **`_content.scss`**: 
    * **`_home.scss`**: 
    * **`_sidebar.scss`**: 
    * **`_topics.scss`**: 
* Miscellaneous style files
  * **`_reset.scss`**: 
  * **`main.scss`**: 
