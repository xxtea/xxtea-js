var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    del = require('del');

gulp.task('clear', function() {
    del(['dist/xxtea.min.js']);
});

gulp.task('default', function() {
    return gulp.src('src/xxtea.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});