'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const eslint = require('gulp-eslint');

gulp.task('sass',  () => {
    return gulp.src('./sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch',  () => {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('serve', ['sass', 'lint'], () => {

    browserSync.init({
        server: "../slider"
    });

    gulp.watch("../slider/scss/*.scss", ['sass']);
	gulp.watch("../slider/*.html").on('change');
	gulp.watch("../slider/*.css").on('change');
});

gulp.task('lint', () => {
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


