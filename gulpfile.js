

// require gulp
var gulp = require('gulp'); 

// require other packages
var concat = require('gulp-concat');
var cssmin = require('gulp-minify-css');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');


// // default task
// gulp.task('default', gulp.parallel(
//         'scripts',
//         'styles',
//         'watch')
//         );


// gulp.task('default', function() {
// });


// styles task
gulp.task('styles', function() {
    return gulp.src('./src/css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dest/css/'))
        .pipe(cssmin())
        .pipe(gulp.dest('./dest/css/'));
});

// scripts task
gulp.task('scripts', function() {
    return gulp.src('./src/js/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./dest/js/'))
        .pipe(uglify())
        .pipe(rename({
        suffix: '.min'
    }))
        .pipe(gulp.dest('./dest/js/'));
    });
    
// watch task / "mira " si se modifican los archivos.
    gulp.task('watch', function() {
        gulp.watch('./src/js/*.js', gulp.series('scripts'));
        gulp.watch('./src/css/*.scss', gulp.series('scripts'));
    });
    

// default task
gulp.task('default', gulp.parallel(
    'scripts',
    'styles',
    'watch'
    )
);
    