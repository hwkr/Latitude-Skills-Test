# Mockup Starter

## Project Structure

### Templates

The project uses [Handlebars](http://handlebarsjs.com/) and Grunt to generate static HTML pages from templates and JSON. The templates are stored in `templates/` and are compiled into `out/`.

Partial templates are stored in `templates/partials` and are included into page templates.

### Data

Data for different users is stored in `data/` and is compiled into templates.

### Styles

The project uses SASS in the form of SCSS for styles. Source SCSS is stored in `assets/sass` and compiles then minifies to `assets/css`. The assets are copied to `out/assets` for use by compiled pages. The project is set up with [specter.css](https://picturepan2.github.io/spectre/) as a framework.

## Getting Started

### Requirements

To build this project you will need:

* [Node.js](https://nodejs.org/en/)
* [Grunt](http://gruntjs.com/)
* [SASS](http://sass-lang.com/)


### Set Up

Install dependancies with the Node Package Manager (NPM),

```bash
npm install
```

Assuming all dependancies installed correctly you can build the styles and pages with Grunt,

```bash
grunt build
```

If you have issues with the previous command make sure you have the Grunt Command-Line Interface (CLI) installed globally (`npm install -g grunt-cli`).

### Working with Source Files

Grunt will watch the files you're working on and automatically build any data, template or style changes just by running,

```
grunt
```

in the root of the project. This will build all the output files then watch for source file changes.

### Debugging the Site

When developing the website locally it's best to run a simple a local server and view/inspect the website in a web browser. Grunt is set up to run a web server automatically at [localhost:8000](http://localhost:8000).








