'use strict';
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
        includePaths: ['bower_components/bootstrap-sass/assets/stylesheets']
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
        src: ['jquery/dist/jquery.min.js', 'foundation/js/vendor/modernizr.js'],
        dest: 'js'
      },
      fonts: {
        expand: true,
        cwd: 'bower_components/bootstrap-sass/vendor/assets/fonts',
        src: ['bootstrap/*'],
        dest: 'fonts'
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
        tasks: ['shell:jekyllBuild', 'shell:jekyllServe']
      //   options: {
      //     interrupt: true,
      //     atBegin: true,
      //     livereload: {
      //       port: 9000
      //     }
      //   }
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


  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-concurrent');

}