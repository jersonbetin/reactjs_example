var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('server', function(){
    gulp.src('./dist')
        .pipe(webserver({
            host : '0.0.0.0',
            port : 3000,
            fallback : 'index.html',
            livereload : true
        }));
});

gulp.task('dev', ['server']);