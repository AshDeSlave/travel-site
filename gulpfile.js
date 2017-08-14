// Here we add the packages we are requiring
var gulp = require('gulp'),
	// gulp-watch plugin
	watch = require('gulp-watch'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested')
	cssImport = require('postcss-import'),
	sass = require('gulp-sass'),
	notify = require('gulp-notify');

//  gulp.task('task to be named', 'what we want to happen when task runs')
gulp.task('default', function() {
	console.log('hooray - you created a gulp task');
});

gulp.task('html', function() {
	console.log('something useful being done to your html');
});
gulp.task('styles', function() {
	return	gulp.src('./app/assets/styles/styles.css')
		// postcss() expects an array
		//.pipe(sass().on('error', sass.logError)) // not working, errors cssImport
		.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles'));
});
// Utilizing the gulp-watch plugin
gulp.task('watch', function() {
	// watch('file on our computer we want to watch for changes to', 'what we want to happen')
	watch('./app/index.html', function() {
		gulp.start('html');
	});
});
// New task for css file
gulp.task('watch', function() {
	// [**] - any future hypothetical folders, [*] - any file that has a  css extension
	watch('./app/assets/styles/**/*.css', function() { 
		gulp.start('styles');
	});
});