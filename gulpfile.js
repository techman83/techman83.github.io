var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    gp_rename = require('gulp-rename'),
    gp_uglify = require('gulp-uglify'),
    gp_cleancss = require('gulp-clean-css'),
    gp_sourcemaps = require('gulp-sourcemaps');
    gp_autoprefixer = require('gulp-autoprefixer');

gulp.task('js-fef', function(){
  return gulp.src([
    'node_modules/jquery/dist/jquery.js', 
    'node_modules/fancybox/dist/js/jquery.fancybox.js'
    ])
    .pipe(gp_sourcemaps.init())
    .pipe(gp_concat("compiled-bundle.js"))
    .pipe(gulp.dest("content/js"))
    .pipe(gp_rename("compiled-bundle.min.js"))
    .pipe(gp_uglify())
    .pipe(gp_sourcemaps.write('./'))
    .pipe(gulp.dest('content/js'));
});

gulp.task('css-fef', function(){
  return gulp.src([
    'node_modules/fancybox/dist/css/jquery.fancybox.css'
  ])
  .pipe(gp_cleancss())
  .pipe(gp_autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
  .pipe(gp_concat('style.min.css'))
  .pipe(gulp.dest('content/css'));
});

gulp.task('default', ['js-fef', 'css-fef'], function(){});
