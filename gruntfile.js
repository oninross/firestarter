module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /**
         * JS Hint
         * Note: Add vendor exceptions in plugins folder here
         */
        jshint: {
            all: [
                'gruntfile.js',
                '_scripts/**/*.js',
                '!_scripts/plugins/**/*.js',
                '!_scripts/vendor/**/*.js'
            ]
        },

        /**
         * Uglify Task
         * Place already minified files from vendos into the minified folder
         */
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                compress: true,
                beautify: false,
                mangle: false
            },
            build: {
                files: {
                    'dist/assets/<%= pkg.name %>/js/main.min.js': ['<%= concat.mainjs.dest %>']
                }
            },
            vendor: {
                files: [{
                    expand: true,
                    cwd: '_scripts/vendor',
                    src: '**/*.js',
                    dest: 'dist/assets/<%= pkg.name %>/js/vendor'
                }]
            }
        },

        /**
         * Concat Tasks
         * Note: Append file to the src array if you need the file to concat in any particular order
         */
        concat: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                separator: ';'
            },
            plugins: {
                src: [
                    '_scripts/plugins/minified/*.js',
                    '_scripts/plugins/*.js'

                ],
                dest: 'dist/assets/<%= pkg.name %>/js/plugins.js'
            },
            modules: {
                src: [
                        '_scripts/vendor/jRespond.js',
                        '_scripts/modules/*.js'
                    ],
                dest: 'dist/assets/<%= pkg.name %>/js/modules.js'
            },
            mainjs: {
                src: [
                        'dist/assets/<%= pkg.name %>/js/plugins.js',
                        'dist/assets/<%= pkg.name %>/js/modules.js',
                        'dist/assets/<%= pkg.name %>/js/main.js'
                ],
                dest: 'dist/assets/<%= pkg.name %>/js/<%= pkg.name %>.js'
            },
            css: {
                options: {
                    separator: ''
                },
                src: [
                    '_styles/jquery.webui-popover.css',
                    '_styles/fancybox/jquery.fancybox.css',
                    'dist/assets/<%= pkg.name %>/css/main.css'
                ],
                separator: '',
                dest: 'dist/assets/<%= pkg.name %>/css/main.css'
            }
        },

        /**
         * Min Tasks
         */
        cssmin: {
            minify: {
                options: {
                    banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */',
                    keepSpecialComments: 0
                },
                expand: true,
                cwd: 'dist/assets/<%= pkg.name %>/css/',
                src: ['*.css', '!*.min.css'],
                dest: 'dist/assets/<%= pkg.name %>/css/',
                ext: '.min.css'
            }
        },

        /**
         * Copy Tasks
         */
        copy: {
            main: {
                files: [
                    { expand: true, cwd: '_styles',  src: ['**/*'], dest: 'dist/assets/<%= pkg.name %>/css' },
                    { expand: true, cwd: '_images',  src: ['**'], dest: 'dist/assets/<%= pkg.name %>/images' },
                    { expand: true, cwd: '_images',  src: ['favicon.ico'], dest: 'dist/assets/<%= pkg.name %>/images' },
                    { expand: true, cwd: '_fonts',  src: ['**'], dest: 'dist/assets/<%= pkg.name %>/fonts' },
                    { expand: true, cwd: '_templates',  src: ['**/*'], dest: 'dist' },
                    { expand: true, cwd: '_scripts',  src: ['**/*'], dest: 'dist/assets/<%= pkg.name %>/js' }
                ]
            },
            mainjs: {
                src: '_scripts/main.js',
                dest: 'dist/assets/<%= pkg.name %>/js/main.js'
            }
        },

        /**
         * Clean Task
         */
        clean: {
            build: ['dist/**'],
            www: [
                'dist/assets/<%= pkg.name %>/css/*.css',
                '!dist/assets/<%= pkg.name %>/css/*.min.css',
                'dist/assets/<%= pkg.name %>/js/*.js',
                '!dist/assets/<%= pkg.name %>/js/*.min.js',
                'dist/assets/<%= pkg.name %>/js/modules/**',
                'dist/assets/<%= pkg.name %>/js/plugins/**',
                'dist/includes/**',
                'dist/**/*.php'
            ]
        },

        /**
         * Shell Task
         */
        shell: {
            options: {
                stderr: false
            },
            sass: {
                command: 'sass --update _scss:dist/assets/<%= pkg.name %>/css'
            },
            scsslint: {
                command: 'scss-lint _scss/'
            }
        },

        /**
         * Sync Task
         */
        sync: {
            main: {
                files: [
                    { expand: true, cwd: '_templates', src: ['**/*'], dest: 'dist/'},
                    { expand: true, cwd: '_images',  src: ['**'], dest: 'dist/assets/<%= pkg.name %>/images' }
                ],
                pretend: false,
                verbose: true
            }
        },

        /**
         * Watch task
         */
        watch: {
            js:{
                files: [
                    '_scripts/**/*.js', '_script/plugins/**/*', '_script/vendor/**/*'
                ],
                tasks:['concat', 'copy:mainjs'],
                options: {
                    livereload: true
                }
            },
            scss:{
                files: [
                    '_scss/**/*.scss'
                ],
                tasks:['shell:sass', 'sync'],
                options: {
                    livereload: true
                }
            },
            css: {
                files: [
                    'dist/**/*.css'
                ],
                tasks:['sync'],
                options: {
                    livereload: true
                }
            },
            img: {
                files: [
                    '_images/**'
                ],
                tasks:['sync'],
                options: {
                    livereload: true
                }
            },
            template: {
                files: [
                    '_templates/**'
                ],
                tasks:['sync'],
                options: {
                    livereload: true
                }
            }
        },

        /**
         * Optimise image task
         */
        imagemin: {
            options: {
                cache: false,
                optimizationLevel: 4,
                pngquant: true
            },
            target: {
                files: [{
                    expand: true,
                    cwd: '_images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/assets/<%= pkg.name %>/images'
                }]
            }
        },

        /**
         * Replaces CSS/JS with min
         */
        processhtml: {
            dist: {
                files: {
                    'dist/includes/header.php': ['dist/includes/header.php'],
                    'dist/includes/footer.php': ['dist/includes/footer.php']
                }
            }
        },

        /**
         * Converts PHP to HTML
         */
        php2html: {
            all: {
                options: {
                    // relative links should be renamed from .php to .html
                    processLinks: true,
                    htmlhint: false,
                    docroot: 'dist'
                },
                files: [
                    { expand: true, cwd: 'dist', src: ['**/*.php'], dest: 'www', ext: '.html' }
                ]
            }
        }
    });

    /**
     * Load Grunt Plugins
     */
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-processhtml');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-sync');
    grunt.loadNpmTasks('grunt-php2html');

    /**
     * Default task
     */
    grunt.registerTask('default', [
        'clean',
        'concat:modules',
        'concat:plugins',
        'copy',
        'shell:sass',
        'concat:css',
        'watch'
    ]);

    grunt.registerTask('validate', [
        'jshint',
        'shell:scsslint'
    ]);

    grunt.registerTask('dist', [
        'clean',
        'concat:modules',
        'concat:plugins',
        'copy',
        'shell:sass',
        'concat:css',
        'cssmin',
        'concat:mainjs',
        'uglify',
        'imagemin',
        'processhtml'
    ]);

    grunt.registerTask('www', [
        'clean',
        'concat:modules',
        'concat:plugins',
        'copy',
        'shell:sass',
        'concat:css',
        'cssmin',
        'concat:mainjs',
        'uglify',
        'imagemin',
        'processhtml',
        'php2html'
    ]);
};