var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat');
 
gulp.task('js', function() {
  return gulp.src('./js4dist/*.js')
    .pipe(uglify('app.min.js'))
    .pipe(gulp.dest('dist/js/'))
});

// gulp.task('minify-css', function() {
//   return gulp.src('css/*.css')
//     .pipe(minifyCss({compatibility: 'ie8'}))
//     .pipe(gulp.dest('dist'));
// });

gulp.task('css', function(){
    // return gulp.src('css/**/*.css')
    return gulp.src(['css/bootstrap.min.css',
            'css/animate.min.css',
            // 'font-awesome/css/font-awesome.css',
            'css/style.css'])
        .pipe(minifyCss())
        // .pipe(rename('style.min.css'))
        // .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('dist/css/'))
});

gulp.task('copy', function(){
  return gulp.src('img/**/*', {base: './img'})
    .pipe(gulp.dest('dist/img'));
})


gulp.task('build', ['css','js','copy'])