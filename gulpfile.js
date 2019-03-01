var gulp = require('gulp'), // Подключаем Gulp
  plugins = require('gulp-load-plugins')({
    pattern: '*'
  });


function getTask(task) {
  return require('./gulp_tasks/' + task)(gulp, plugins);
}

gulp.task('server', getTask('server'));
gulp.task('pug', getTask('pug'));
gulp.task('sass', getTask('sass'));
gulp.task('cssLibs', getTask('cssLibs'));
gulp.task('jsLibs', getTask('jsLibs'));
gulp.task('jsMain', getTask('jsMain'));
gulp.task('build', getTask('build'));

gulp.task('watch', gulp.series('server', function() {
  gulp.watch('app/pug/**/*.pug', gulp.series('pug'));
  gulp.watch('app/sass/**/*.sass', gulp.series('sass'));
  gulp.watch('app/js/src/*.js',gulp.series('jsMain'));

}));


gulp.task('default', gulp.series('watch'));
