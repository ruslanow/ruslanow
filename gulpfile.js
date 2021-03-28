
const {src, dest, parallel, series, watch} = require('gulp');
const browserSync 	= require ('browser-sync').create();
const concat  			= require ('gulp-concat');
const uglify 				= require ('gulp-uglify-es').default;
const sass 					= require ('gulp-sass');
const scss					= require ('gulp-scss')
const cleancss  = require ('gulp-clean-css');
const autoprefixer  = require ('gulp-autoprefixer');
const imagemin			= require ('gulp-imagemin');
const newer					= require ('gulp-newer');


function styles() {
	return src('src/sass/style.sass')
	.pipe (sass())
	.pipe (concat('app.min.css'))
	.pipe (autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true}))
	//.pipe (cleancss(({ level: { 1: {specialComments: 0} }	} )))
	.pipe (dest('src/'))
	.pipe (browserSync.stream())
}




function images() {
	return src('src/sass/**/*')
	.pipe(newer('app/img/'))
	.pipe(imagemin())
	.pipe(dest('app/img/'))

}


function startwatch(){
	watch (['app/**/*.js', '!app/**/*.min.js'], scripts);
	watch (['app/**/*.sass'], styles);
	watch (['app/**/*.scss'], styles);
	watch ('app/**/*.html').on('change', browserSync.reload);
}


exports.styles			= styles;
exports.images			= images;

exports.default  	 	= parallel (styles, scripts);
