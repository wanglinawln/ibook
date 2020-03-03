module.exports = function (grunt) {
    grunt.initConfig({
      htmlmin: {
        options: {
          collapseWhitespace: true,
          preserveLineBreaks: false
        },
        files: {
          expand: true,
          cwd: '_book',
          src: ['*.html'],
          dest: 'dist/'
        }
      },
      cssmin: {
        files: {
          expand: true,
          cwd: '_book',
          src: ['gitbook/**/*.css'],
          dest: 'dist/'
        }
      },
      uglify: {
        main: {
          files: [{
            expand: true,
            cwd: '_book',
            src: ['gitbook/**/*.js'],
            dest: 'dist/'
          }]
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('minify', ['htmlmin', 'cssmin', 'uglify']);
  };
