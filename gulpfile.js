var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var notify = require('gulp-notify');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var config = {
  sassPath: './css',
  bowerDir: './vendor'
};

gulp.task('css', function(){
  return sass(config.sassPath + '/style.scss', {
      style : 'compressed',
      loadPath: [
        './vendor/bootstrap-sass/assets/stylesheets/',
      ]
    })
      .on("error", notify.onError(function(error){
        return "Error : " + error.message;
      }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./css'));
});

gulp.task('compress', function(){
  gulp.src([
    'js/app.js',
    'js/controllers/*.js',
    'js/directives/*.js',
    'js/services/*.js'
  ])
  .pipe(concat('app.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('js'));
})

gulp.task('watch', function() {
  gulp.watch(config.sassPath + '/*.scss', ['css']);
});

gulp.task('default', ['css', 'watch']);
