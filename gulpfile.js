var gulp = require('gulp');
var browserify = require('browserify');
var uglify = require("gulp-uglify");
var plumber = require("gulp-plumber");
var webserver = require('gulp-webserver');
var through2 = require('through2');
var rename = require('gulp-rename');
var tsify = require('tsify');
var runSequence = require('run-sequence');

gulp.task('react-compile',function () {
	return gulp.src('./tsx/App.tsx')//./jsx/*.jsx
        .pipe(plumber({
            errorHandler: function(err) {
                console.log(err.message);
                this.emit('end');
            }
        }))
        .pipe(through2.obj(function(file,enc,next){
            return browserify(file.path)
            	.plugin(tsify)
                .bundle(function(err,res){
                    if(err){
                        return next(err)
                    }
                    file.contents = res;
                    next(null,file);
                });
        }))
        .pipe(rename({
            basename:"app",
            extname:".js"
         }))
        .pipe(gulp.dest("./js"))
});

gulp.task('uglify', function (cb) {
    return gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('js'))
});

gulp.task('watch', function() {
  return gulp.watch('./tsx/**/*.tsx', ['react-compile'])
});

gulp.task('webserver', function() {
  return gulp.src('./')
    .pipe(webserver({
      host: '127.0.0.1',
      livereload: true
    })
  );
});

gulp.task('default', function(callback){runSequence('react-compile',callback)});
gulp.task('develop', ['react-compile','watch','webserver']);