const gulp = require('gulp')
const ts = require('gulp-typescript')
const clean = require('gulp-clean')

const tsProject = ts.createProject('tsconfig.json')

gulp.task('clean', () => gulp.src('dist').pipe(clean()) )

gulp.task('static', () => gulp.src(['src/**/*.json']).pipe(gulp.dest('dist')) )

gulp.task('scripts', () => {
    const tsResult = tsProject.src().pipe(tsProject())
    return tsResult.js.pipe(gulp.dest('dist'))
})

const watchFiles = () => {
    return gulp.watch(['src/**/*.ts', 'src/**/*.json'], gulp.series('clean', 'static', 'scripts'))
}

exports.default = watchFiles