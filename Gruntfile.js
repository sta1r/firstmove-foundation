module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'source/css/app.css': 'source/scss/app.scss'
        }        
      }
    },

    // copy selected Foundation JS files from bower_components into the theme's JS folder
    // only run after modifying what is being copied or if bower is updated
    copy: {
      main: {
        expand: true,
        cwd: 'bower_components',
        src: ['jquery/dist/jquery.min.js', 'foundation/js/vendor/modernizr.js', 'foundation/js/foundation.min.js'],
        dest: 'source/js'
      }
    },

    jekyll: {
      server : {
        src : 'templates',
        dest: 'dev',
        server : true,
        server_port : 8000,
        auto : true
      },
      dev: {
        // src: 'templates',
        // dest: 'dev'
      },
      prod: {
        src: 'templates',
        dest: 'prod'
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      jekyll: {
        files: ['source/**'],
        tasks: ['jekyll:dev']
      },

      sass: {
        files: 'source/scss/app.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('build', ['jekyll:dev', 'sass']);
  grunt.registerTask('default', ['build','watch']);
}