var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babel = require('gulp-babel');


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
  Task to bundle and browserify script
*/

gulp.task('bundle', function() {
  return browserify('javascript/dev/app.js')
   .bundle()
   .pipe(source('app.min.js'))
   .pipe(gulp.dest('javascript/min'));
});

/*
  Task to concat and minify js script
*/
gulp.task('bundle-script', function() {
  return gulp.src([
    'node_modules/angular/angular.js',
    'node_modules/angular-route/angular-route.min.js',
    'javascript/min/app.min.js']
  )
  .pipe(concat('script.min.js'))
  // .pipe(uglify('script.min.js'))
  .pipe(gulp.dest('javascript/min'))
});



/*
  Task to watch for changes
*/
gulp.task('watch', ['browserSync','bundle', 'bundle-script'], function(){
  gulp.watch('javascript/dev/**/*.js', ['bundle']);
  gulp.watch('javascript/dev/**/*.js', ['bundle-script']);
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('pages/**/*.html', browserSync.reload);
  gulp.watch('javascript/dev/**/*.js', browserSync.reload);
});

gulp.task('default', ['watch']);
