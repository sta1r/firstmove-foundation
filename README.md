## A new suite of front-end templates for LCF FirstMove

Built using selected elements of [Twitter Bootstrap](http://getbootstrap.com/). Bootstrap is maintained as a dependency via Bower, so the core files can be updated in future. The UI is finished with themed 'UAL' skin. 

## Requirements

You'll need to have the following items installed first of all:

  * [Node.js](http://nodejs.org): Use the installer provided on the NodeJS website.
  * [Grunt](http://gruntjs.com/): Run `[sudo] npm install -g grunt-cli`
  * [Bower](http://bower.io): Run `[sudo] npm install -g bower`
  * [Jekyll](http://jekyllrb.com/): Run `[sudo] gem install jekyll`

## Quickstart

1. `git clone https://github.com/strangerpixel/firstmove-foundation.git`

2. `cd firstmove-foundation`

3. `bundle install` (or `gem install jekyll`)

4. `npm install && bower install`

While you're working on your project, run:

`grunt`

The `watch` task watches for changes to scss files (in /scss), js files (in /source/js) and html inside the `/templates`, `/_layouts` and `/_includes` directories.