var grunt = require('grunt');
var autoprefixer = require('autoprefixer');

module.exports = (grunt) => {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'assets/css/screen.css': 'assets/scss/screen.scss'
                }
            }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    autoprefixer({
                        browsers: ['last 2 versions']
                    })
                ]
            },
            dist: {
                src: 'assets/css/*.css'
            }
        },
        watch: {
            sass: {
                files: './assets/scss/**/*.scss',
                tasks: ['sass']
            },
            postcss: {
                files: './assets/css/**/*.css',
                tasks: ['postcss']
            }
        }
    });

    grunt.registerTask('default', ['sass', 'postcss']);
}
