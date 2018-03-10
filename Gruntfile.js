module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      scripts: {
        files: ['**/*.scss'],
        tasks: ['sass', 'cssmin'],
        options: {
            spawn: false,
          },
      },
    },
    sass: {
      dist: {
        options: {
          style: 'compact'
        },
        files: {
          'assets/css/main.css': 'assets/scss/main.scss'
        },
      },
    },
    cssmin: {
      target: {
          files: [{
            'assets/css/main.min.css': 'assets/css/main.css',
          }]
        },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('minify', ['cssmin']);
  grunt.registerTask('dev', ['sass', 'minify']);
  grunt.registerTask('build', ['dev', 'watch']);
};
