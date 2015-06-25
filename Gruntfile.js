module.exports = function(grunt) {

    grunt.initConfig ({
    	pkg: grunt.file.readJSON('package.json'),
    	watch: {
    		options: {
				livereload: true,
				interrupt: true
			},
			sass: {
			    files: ['assets/scss/*.scss'],
			    tasks: ['sass'],
			    options: {
			        spawn: false
			    }
			}
    	},
    	sass: {
		    dev: {
		        options: {
		            style: 'expanded'
		        },
		        files: {
		            'assets/css/site.css': 'assets/scss/site.scss'
		        }
		    },
		    build: {
		        options: {
		            style: 'compressed'
		        },
		        files: {
		            'assets/css/build/site.css': 'assets/scss/site.scss'
		        }
		    } 
		},
      connect: {
        server: {
          options: {
            port: 8080,
            hostname: '*',
            livereload: true
          }
        }
      }, concat: {
			options: {
				separator: ';\n',
			},
			build: {
				src: ['assets/js/mustache.js', 'assets/js/jquery-1.11.3.min.js', 'assets/js/index.js'],
				dest: 'assets/js/site.js'
			}
		}, uglify: {
		    options: {
		      mangle: false
		    },
		    my_target: {
		      files: {
		        'assets/js/site.min.js': ['assets/js/site.js']
		      }
		    }
		  }

    });

    // Load dependencies
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', [ 'sass:dev', 'connect', 'watch' ]);
	grunt.registerTask('build', [ 'sass:build', 'concat:build', 'uglify' ]);
};
