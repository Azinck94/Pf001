var gulp = require('gulp');
var sass = require('gulp-ruby-sass')
var connect = require('gulp-connect')

gulp.task('connect', function () {
  connect.server({
    root: 'app',
    port: 4000
  })
})

gulp.task('default', function () { console.log('Hello Gulp!') });