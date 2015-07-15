

module.exports = (grunt)->


	pkg = grunt.file.readJSON('package.json')

	grunt.initConfig 

		watch: 
			css:
				files: ['./css/*.css']
				tasks: []
				options:
					livereload: true

			html:
				files: ['**/*.html']
				tasks: []
				options:
					livereload: true

			js:
				files: ['./js/*.js']
				tasks: []
				options:
					livereload: true
			


		connect:
			options:
				base: './'
				livereload: true
			dev:
				options:
					base: './'

		# rsync:
		# 	deploy:
		# 		options:
		# 			ssh: true
		# 			exclude: ["node_modules", ".git*", "src", "Gruntfile.coffee", "package.json"]
		# 			recursive: true
		# 			src: "./"
		# 			dest: "/var/www/html/"
		# 			host: "ec2-user@52.27.239.88"
		# 			delete: false



	for taskName of pkg.devDependencies when taskName.substring(0,6) is 'grunt-' 
		grunt.loadNpmTasks taskName


	grunt.registerTask('dev', [ 'connect', 'watch' ])
	# grunt.registerTask('deploy', [ 'rsync:deploy' ])




