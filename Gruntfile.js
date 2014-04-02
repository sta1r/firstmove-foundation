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
          'css/app.css': 'scss/app.scss'
        }        
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
        src: 'templates',
        dest: 'dev'
      },
      prod: {
        src: 'templates',
        dest: 'prod'
      }
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      jekyll: {
        files: ['templates/*.html', '_layouts/*.html', '_includes/*.html'],
        tasks: ['jekyll:dev']
      },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass', 'jekyll:dev']);
  grunt.registerTask('default', ['build','watch']);
}