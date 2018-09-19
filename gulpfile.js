'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const eslint = require('gulp-eslint');

gulp.task('sass',  () => {
    return gulp.src('./sass/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('basic', () => {
	return gulp.src('./js/*.js')
		.pipe(eslint())
		.pipe(eslint.format());
});

/**
 * 
 * @returns {stream} 
 */
gulp.task('inline-config', () => {
	return gulp.src('./js/*.js')
		.pipe(eslint({
			rules: {
				'no-alert': 0,
				'no-bitwise': 0,
				'camelcase': 1,
				'curly': 1,
				'eqeqeq': 0,
				'no-eq-null': 0,
				'guard-for-in': 1,
				'no-empty': 1,
				'no-use-before-define': 0,
				'no-obj-calls': 2,
				'no-unused-vars': 0,
				'new-cap': 1,
				'no-shadow': 0,
				'strict': 2,
				'no-invalid-regexp': 2,
				'comma-dangle': 2,
				'no-undef': 1,
				'no-new': 1,
				'no-extra-semi': 1,
				'no-debugger': 2,
				'no-caller': 1,
				'semi': 1,
				'quotes': 0,
				'no-unreachable': 2
			},

			globals: ['$'],

			envs: ['node']
		}))
		.pipe(eslint.format());
});

gulp.task('default', [
	'inline-config',
	'basic'
	

], () => {
	console.log('All tasks completed successfully.');
});


gulp.task('sass:watch',  () => {
    gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('serve', ['sass'], () => {

    browserSync.init({
        server: "../slider"
    });

    gulp.watch("../slider/scss/*.scss", ['sass']);
	gulp.watch("../slider/*.html").on('change', browserSync.reload);
	gulp.watch("../slider/*.css").on('change', browserSync.reload);
});

