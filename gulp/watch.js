var config = require('./conf.js');
var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    browserSync = browserSync.create();

gulp.task('init-browser', function() {
  browserSync.init({
    server: {
      baseDir: './client',
      index: 'dev.html'
    }
  });

});

function injectChanges(event) {
  console.log('change', arguments);
  return gulp.src(event.path)
    .pipe(browserSync.stream());
}

// WATCH
gulp.task('watch', function() {

  // Watch .css files
  gulp.watch('./'+config.paths.src.css, injectChanges);

  // Watch .js files
  gulp.watch('./'+config.paths.src.js, injectChanges);

  // Watch tmpls html files
  gulp.watch('./'+config.paths.src.tmpls, function () {
    return gulp.run('tmpls');
  });

  // Watch tmpls html files
  gulp.watch('./conf.js', ['default']);
});