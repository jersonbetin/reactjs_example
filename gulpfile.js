var gulp = require('gulp');
//cargar el servidor
var webserver = require('gulp-webserver');
//convertir de ec6 a ec5 y jsx
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('server', function(){
    gulp.src('./dist')
        .pipe(webserver({
            host : '0.0.0.0',
            port : 3000,
            fallback : 'index.html',
            livereload : true
        }));
});

/*var path = {
    JS: ['src/components/*.js'],
    DEST_BUILD:'./build',
    DEST: 'dist'
};*/

gulp.task('build', function () {
     browserify({
        entries : './src/components/index.jsx',
        extensions : ['.jsx'],
        debug : true
     })
     .transform(babelify, {presets: ['es2015', 'react']})
     .bundle()
     .pipe(source('bundle.js'))
     .pipe(gulp.dest('./dist/js'))
})

gulp.task('watch', ['build'], function () {
    gulp.watch('src/components/**/*.jsx', ['build']);
});


gulp.task('dev', ['server','watch']);