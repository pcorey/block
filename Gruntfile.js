// module.exports = function(grunt) {
//     pkg: grunt.file.readJSON('package.json'),
//     grunt.initConfig({
//     // running `grunt less` will compile once
//     less: {
//         development: {
//             options: {
//                 paths: ["less"]
//             },
//             files: {
//                 "css/main.css": "less/main.less"
//             }
//         }
//     },

//     // running `grunt watch` will watch for changes
//     watch: {
//         less: {
//             files: ["less/*.less"],
//             tasks: ["less"]
//         }
//     }
// });

// grunt.loadNpmTasks('grunt-contrib-less');
// grunt.loadNpmTasks('grunt-contrib-watch');

// });



module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  //grunt.registerTask('default', ['less']);

};