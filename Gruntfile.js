module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      files: ["Gruntfile.js", "app.js", "public/*.js"]
    },
    watch: {
    files: ['app.js','public/'],
    tasks: 'default'
    },
    copy: {
      main: {
        files: [
          {src: ["bower_components/**"], dest: "public/"}
        ]
      }
    },
    clean: ["bower_components", "public/bower_components", "node_modules"]
  });

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask("default", ["jshint","copy","watch"]);
};