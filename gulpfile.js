'use strict';

const gulp = require('gulp')
const sass = require('gulp-sass')
const cleanCSS = require('gulp-clean-css')
const browserSync = require('browser-sync').create()

const cssSources = [
  'src/css/*.scss'
]

gulp.task('sass', () => {
  return gulp.src(cssSources)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./assets/css'))
})

gulp.task('build', [])

gulp.task('watch', ['build'], () => {
  browserSync.init({
    server: {
      baseDir: './',
      open: 'external',
      port: 3000,
    }
  })
  gulp.watch('src/css/*.scss', ['sass'])
  gulp.watch('src/js/*.ts', ['tscript'])
})

gulp.task('default', ['watch'])
