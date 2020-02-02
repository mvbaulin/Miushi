const gulp = require('gulp'),
			autoprefixer = require('autoprefixer'),
			less = require('gulp-less'),
			minCss = require('gulp-clean-css'),
			concat = require('gulp-concat'),
			plumber = require('gulp-plumber'),
			postcss = require('gulp-postcss'),
			babel = require('gulp-babel'),
			browserSync = require('browser-sync').create();

// Компиляция less to css

gulp.task('less', () => {
	return gulp.src('source/less/import.less')
					.pipe(plumber())
					.pipe(less())
					.pipe(concat('style.css'))
					.pipe(gulp.dest('source/css/'))
					.pipe(browserSync.stream());
});

// Добавление префиксов

gulp.task('postcss', () => {
	let plugins = [
		autoprefixer()
		];
	return gulp.src('source/css/style.css')
					.pipe(plumber())
					.pipe(postcss(plugins))
					.pipe(gulp.dest('source/css/'));
});

// Минификация CSS

gulp.task('minCss', () => {
	return gulp.src('source/css/style.css')
					.pipe(plumber())
					.pipe(minCss())
					.pipe(gulp.dest('source/min-css/'));
});

// Babel

gulp.task('babel', () => {
	return gulp.src('source/js/*.js')
					.pipe(plumber())
					.pipe(babel({
						'presets': ['@babel/preset-env']
					}))
					.pipe(gulp.dest('source/min-js'));
});

// Отслеживание изменений в файлах

gulp.task('browser-sync', () => {

	browserSync.init({
		server: {
			baseDir: 'source/'
		}
	});

	gulp.watch('source/**/*.html').on('change', browserSync.reload);
	gulp.watch('source/php/*.php').on('change', browserSync.reload);
	gulp.watch('source/less/*.less', gulp.series('less', 'postcss', 'minCss'));
	gulp.watch('source/js/*.js', gulp.series('babel')).on('change', browserSync.reload);

});

// Запуск очереди тасков

gulp.task('default', gulp.series('less', 'postcss', 'minCss', 'babel', 'browser-sync'));