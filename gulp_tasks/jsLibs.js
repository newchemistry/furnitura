module.exports = function(gulp, plugins) {
  return function() {
    gulp.src([ // Берем все необходимые библиотеки
        'app/libs/jquery/dist/jquery.min.js', // Берем jQuery
        'app/libs/jquery.easing/js/jquery.easing.min.js',
        'app/libs/bootstrap/dist/js/bootstrap.min.js',
        'app/libs/bootstrap/dist/js/bootstrap.bundle.min.js',
        'app/libs/paroller.js/dist/jquery.paroller.min.js',
        'app/libs/wow/dist/wow.min.js'

      ])
      .pipe(plugins.concat('libs.min.js'))
      .pipe(plugins.uglify())
      .pipe(gulp.dest('app/js'))
      .pipe(plugins.browserSync.reload({
        stream: true
      }));
  };
};