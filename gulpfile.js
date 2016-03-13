var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    uglify = require('gulp-uglify'),
    jshint = require('gulp-jshint'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    ngAnnotate = require('gulp-ng-annotate'),
    watch = require('gulp-watch'),
    livereload = require('gulp-livereload');


gulp.task('js-deps', function () {
    gulp.src([
            './app/bower_components/jquery/dist/jquery.js',
            './app/bower_components/lodash/lodash.js',
            './app/bower_components/angular/angular.js',
            './app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js'
        ])
        .pipe(concat('deps.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./app/public/resources/js'));
});


gulp.task('css-deps', function () {
    gulp.src([
            "./app/bower_components/bootstrap/dist/css/bootstrap.min.css",
            "./app/bower_components/font-awesome/css/font-awesome.min.css"
        ])
        .pipe(concat('css-deps.css'))
        .pipe(gulp.dest('./app/public/css'));

    gulp.src('./app/bower_components/font-awesome/fonts/*')
        .pipe(gulp.dest('./app/public/fonts'));
});

gulp.task('js', function () {
    var baseDir = __dirname + '/app/resources/js',
        outputDir = __dirname + '/app/public/js',
        outputFilename = 'app.js';

    gulp.src([
            baseDir + "/*module.js",
            baseDir + "/**/*module.js",
            baseDir + "/**/*.js"
        ])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(sourcemaps.init())
        .pipe(concat(outputFilename))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(outputDir))
        .pipe(livereload());
});

gulp.task('sass', function () {
    gulp.src([
            './app/resources/styles/styles.sass'
        ])
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./app/public/css'))
        .pipe(livereload());
});

gulp.task('watch', function () {
    livereload.listen({port: 35730});
    watch(['./app/resources/js/*.js', './app/resources/js/**/*.js'], function () {
        gulp.start('js');
    });

    watch('./app/resources/sass/*.sass', function () {
        gulp.start('sass');
    });

    watch(['./app/resources/views/*.html', './app/resources/views/**/*.html'], function () {
        gulp.start('partials');
    });
});

gulp.task('default', ['js-deps', 'partials', 'css-deps', 'js', 'sass', 'watch']);