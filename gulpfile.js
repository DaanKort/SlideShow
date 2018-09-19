'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const eslint = require('gulp-eslint');

gulp.task('sass', function() {
    return gulp.src('./sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('serve', function() {
    browserSync.init({
        server: "../slider"
    });

    gulp.watch("../slider/scss/*.scss", ['sass']);
	gulp.watch("../slider/*.html").on('change', browserSync.reload);
	gulp.watch("../slider/*.css").on('change', browserSync.reload);
	gulp.watch("../slider/*.js").on('change', browserSync.reload);
});

gulp.task('lint', function() {
    return gulp.src(['js/*.js'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});

gulp.task('hello', function() {
	console.log('hey')
})

gulp.task('default', ['sass', 'lint']);
