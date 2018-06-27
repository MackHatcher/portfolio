let sass = require('gulp-sass');
let gulp = require('gulp');
let autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', (done) => {
    gulp.src('./css/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
        }))
        .pipe(gulp.dest('./css'));
        done();
    });

gulp.task('watch', () => {
    gulp.watch('./css/*.scss', ['styles'])
})