module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		postcss: {
			options: {
				map: false,
				processors: [require('autoprefixer')()],
			},
			dist: {
				src: [
					'dist/hydra.css'
				],
			},
		},
		sass: {
			options: {
				'no-source-map': 'off',
			},
			dist: {
				options: {
					style: 'compressed',
				},
				files: {
					'dist/hydra.css': 'packages/styles/main.scss'
				},
			},
		},
		concat: {
			'dist/hydra.css': ['packages/styles/header.css', 'dist/hydra.css'],
		},
		watch: {
			compile_css: {
				files: ['packages/**/*.scss'],
				tasks: ['sass'],
			},
		},
	});

	grunt.loadNpmTasks('@lodder/grunt-postcss');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', [
		'postcss',
		'sass',
		'watch',
		'concat',
	]);
};
