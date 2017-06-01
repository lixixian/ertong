var gulp=require('gulp');
var minifyHtml=require('gulp-minify-html');
var cssmin=require('gulp-clean-css');

gulp.task('hello', function () {
console.log('hello');
});

gulp.task('myminifyhtml', function () {
gulp.src('*.html') // 要压缩的html文件
.pipe(minifyHtml()) //压缩
.pipe(gulp.dest('./'));
});


gulp.task('myminifycss', function () {
gulp.src('css/*.css')
.pipe(cssmin())
.pipe(gulp.dest('css'));
});


gulp.task('default',['hello','myminifyhtml','myminifycss']);