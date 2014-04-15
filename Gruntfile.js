module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        //includePaths: ['bower_components/foundation/scss']
        includePaths: ['bower_components/bootstrap-sass/vendor/assets/stylesheets']
      },
      dist: {
        options: {
          outputStyle: 'expanded'
        },
        files: {
          'css/style.css': 'scss/style.scss'
        }        
      }
    },

    // copy selected Foundation JS files from bower_components into the theme's JS folder
    // only run after modifying what is being copied or if bower is updated
    copy: {
      main: {
        expand: true,
        cwd: 'bower_components',
        src: ['jquery/dist/jquery.min.js', 'foundation/js/vendor/modernizr.js'],
        dest: 'js'
      }
    },

    jekyll: {
      serve : {
        options: {
          serve: true,
          watch: true
        }
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      jekyll: {
        files: ['_includes/**', '_layouts/**', 'js/**', 'css/**', 'templates/**'],
        tasks: ['jekyll:serve']
      },

      sass: {
        files: 'scss/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.registerTask('build', ['jekyll:serve', 'sass']);
  grunt.registerTask('default', ['build','watch']);

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

}