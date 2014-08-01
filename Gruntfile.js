module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    shell: {
      jekyllBuild: {
          command: 'jekyll build'
      },
      jekyllServe: {
          command: 'jekyll serve'
      }
    },

    sass: {
      options: {
        //includePaths: ['bower_components/foundation/scss']
        includePaths: ['bower_components/bootstrap-sass-official/assets/stylesheets']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/ual-theme.css': 'scss/ual-theme.scss'
        }        
      }
    },


    // copy selected files from bower_components into the theme's JS folder
    // only run after modifying what is being copied or if bower is updated
    copy: {
      main: {
        expand: true,
        cwd: 'bower_components',
        src: [
          'jquery/dist/jquery.js', 
          'bootstrap-sass-official/assets/javascripts/bootstrap/transition.js',
          'bootstrap-sass-official/assets/javascripts/bootstrap/collapse.js',
          'bootstrap-sass-official/assets/javascripts/bootstrap/tab.js'
        ],
        dest: 'source/js'
      },
      fonts: {
        expand: true,
        cwd: 'bower_components/bootstrap-sass-official/assets/fonts',
        src: ['bootstrap/*'],
        dest: 'fonts'
      }
    },

    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: ';'
      },
      dist: {
        // the files to concatenate
        src: ['source/js/jquery/dist/jquery.js',
          'source/js/bootstrap-sass-official/assets/javascripts/bootstrap/transition.js',
          'source/js/bootstrap-sass-official/assets/javascripts/bootstrap/collapse.js',
          'source/js/bootstrap-sass-official/assets/javascripts/bootstrap/tab.js', 
          'source/js/bootstrap-datepicker.js',
          'source/js/app.js'
        ],
        // the location of the resulting JS file
        dest: 'js/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
        // the banner is inserted at the top of the output
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },

    jshint: {
      // define the files to lint
      files: ['Gruntfile.js', 'source/js/app.js'],
      // configure JSHint (documented at http://www.jshint.com/docs/)
      options: {
          // more options here if you want to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },

    watch: {
      configFiles: {
        files: [ 'Gruntfile.js', 'config/*.js' ],
        options: {
          reload: true
        }
      },
      
      jekyll: {
        files: [
          '_includes/*.html',
          '_layouts/*.html',
          'js/*.js',
          'css/*.css',
          'templates/*.html',
          '_config.yml',
          'index.html',
          'contents.html'
        ],
        tasks: ['shell:jekyllBuild', 'shell:jekyllServe'],
        options: {
          interrupt: true,
          //atBegin: true,
          livereload: {
            port: 9000
          }
        }
      },

      js: {
        files: [
          'source/js/**/*.js'
        ],
        tasks: ['concat', 'uglify']
      },

      sass: {
        files: 'scss/*.scss',
        tasks: ['sass']
      }
    },

    concurrent: {
      target: {
        tasks: ['shell:jekyllBuild', 'shell:jekyllServe', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }  
    }

  });

  grunt.registerTask('default', ['concurrent:target']);
  grunt.registerTask('js', ['copy', 'concat', 'uglify']);

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-jshint');

};