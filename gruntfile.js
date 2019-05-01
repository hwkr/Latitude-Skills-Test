module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'assets/css/styles.css': 'assets/sass/styles.scss'
        }
      },
    },
    'compile-handlebars': {
      amy: {
        files: [{
          expand: true,
          cwd: 'templates/',
          src: ['**/*.hbs', '!partials/**', '!helpers/**'],
          dest: 'out/',
          ext: '.html'
        }],
        templateData: 'data/user.json',
        globals: ['data/globals.json'],
        helpers: 'templates/helpers/**/*.js',
        partials: 'templates/partials/**/*.hbs'
      }
    },
    copy: {
      assets: {
        files: [{
          expand: true,
          cwd: 'assets/',
          src: [
            '**/*.js',
            '**/*.ico',
            '**/*.css',
            '**/*.css.map',
            '**/*.eot',
            '**/*.svg',
            '**/*.ttf',
            '**/*.woff',
            '**/*.woff2'
          ],
          dest: 'out/assets/'
        }]
      },
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'assets/css',
          src: ['*.css', '!*.min.css'],
          dest: 'assets/css',
          ext: '.min.css'
        }]
      }
    },
    watch: {
      styles: {
        files: ['assets/sass/**/*.scss'],
        tasks: ['build-styles']
      },
      assets: {
        files: ['assets/img/**/*', 'assets/js/**/*'],
        tasks: ['copy:assets']
      },
      templates: {
        files: 'templates/**/*',
        tasks: ['build-templates']
      },
      data: {
        files: 'data/**/*',
        tasks: ['build-templates']
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: 'out'
        }
      }
    }
  });

  // Load the plugins.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-compile-handlebars');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Tasks.
  grunt.registerTask('build-styles', ['sass:dist', 'cssmin', 'copy:assets']);
  grunt.registerTask('build-templates', ['compile-handlebars']);
  grunt.registerTask('build', ['build-templates', 'build-styles']);
  grunt.registerTask('default', ['build', 'connect', 'watch']);

};