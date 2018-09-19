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

gulp.task('default', ['sass', 'lint'], () => {

    gulp.watch("../slider/scss/*.scss", ['sass']);
    gulp.watch("../slider/*.html").on('change');
    gulp.watch("../slider/*.css").on('change');
});

gulp.task('lint', () => {
    return gulp.src(['js/*.js'])  
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});


