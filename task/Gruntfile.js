module.exports = function(grunt) {
 // Project configuration.
 grunt.initConfig({
     pkg: grunt.file.readJSON('package.json'),
     concat: {
         options: {
             banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
             process: function(src, filepath) {
                 return '//####' + filepath + '\n' + src;
             }
         },
         basic: {
             src: 'app/assets/js/*.js',
             dest: 'app/app-min.js'
         }
     },
     watch: {
         js: {
             files: 'app/assets/js/*.js',
             tasks: ['concat', 'uglify', 'cssmin', 'csssplit'],
             dest: 'app/app-min.js'
         },
         css: {
             files: 'app/assets/css/*.css',
             tasks: ['cssmin', 'csssplit']
         }
     },
     uglify: {
         options: {
             banner: '/*! <%= pkg.name %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
         },
         build: {
             src: 'app/assets/js/*.js',
             dest: 'app/app-min.js'
         }
     },
     cssmin: {
         minify: {
             expand: true,
             cwd: '',
             src: ['app/assets/css/*.css'],
             dest: 'app/style-min.css',
             ext: 'min.css'
         }
     }
 });
 grunt.loadNpmTasks('grunt-contrib-concat');

 grunt.loadNpmTasks('grunt-contrib-uglify');

 grunt.loadNpmTasks('grunt-contrib-watch');

 grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.registerTask('default', ['uglify']);
}