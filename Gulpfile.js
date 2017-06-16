const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-minify-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const babel = require('gulp-babel');


/*
  Browser reloading task
*/
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
})

/*
  Task to covert sass files to css
*/
gulp.task('sass', function(){
  return gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css/dev'))
});

/*
  Task to concat and minify css
*/
gulp.task('minifyConcatCSS', ['sass'], function(){
  return gulp.src('css/dev/*.css')
    .pipe(concat('style.min.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('css/min'))
});

/*
  Task to bundle and browserify script
*/

gulp.task('bundle', function() {
  return browserify('javascript/dev/app.js')
   .bundle()
   .pipe(source('combined-app.js'))
   .pipe(gulp.dest('javascript/dev'));
});

gulp.task('babel', () => {
  return gulp.src('javascript/dev/combined-app.js')
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest('javascript/dev'));
});

/*
  Task to concat and minify js script
*/
gulp.task('bundle-all-scripts', function() {
  return gulp.src([
    'node_modules/angular/angular.js',
    'node_modules/angular-route/angular-route.min.js',
    'javascript/dev/combined-app.js']
  )
  .pipe(concat('script.min.js'))
  // .pipe(uglify('script.min.js'))
  .pipe(gulp.dest('javascript/min'))
});





/*
  Task to watch for changes
*/
gulp.task('watch', ['browserSync','sass','minifyConcatCSS','bundle', 'babel', 'bundle-all-scripts', ], function(){
  gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch('css/dev/*.css', ['minifyConcatCSS']);
  gulp.watch('javascript/dev/**/*.js', ['bundle']);
  gulp.watch('javascript/dev/**/*.js', ['bundle-all-scripts']);
  gulp.watch('javascript/dev/**/*.js', ['babel']);
  gulp.watch('javascript/dev/**/*.html', ['bundle']);
  gulp.watch('javascript/dev/**/*.html', ['bundle-all-scripts']);
  gulp.watch('javascript/dev/**/*.html', ['babel'])
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('pages/*.html', browserSync.reload);
  gulp.watch('javascript/dev/**/*.js', browserSync.reload);
  gulp.watch('css/min/*.css', browserSync.reload);
});

gulp.task('default', ['watch']);
