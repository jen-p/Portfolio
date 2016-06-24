module.exports = {
	dev: {
		options: {
			style: 'expanded'
		},
		files: [
	        {
	            expand: true,
	            cwd: 'assets/scss',
	            src: ['site.scss'],
	            dest: 'assets/css',
	            ext: '.css'
	        }
        ]
	}
}