let gulp = require("gulp");
let clean = require("gulp-clean");
let less = require("gulp-less");
let cssmin = require("gulp-cssmin");
let app = {
	src : "src",
	dist : "dist"
}
gulp.task("copy",function(){
	//console.log("aaaa");
	gulp.src(app.src)
		.pipe(gulp.dest(app.dist));
	gulp.src(["!"+app.src+"/d.txt",app.src+"/**"])
	.pipe(gulp.dest(app.dist+"/"+app.src));
});
gulp.task("clean",function(){
	gulp.src(app.dist)
		.pipe(clean());
});
gulp.task("less",function (){
	gulp.src(app.src+"/less/bootstrap.less")
		.pipe(less())
		.pipe(cssmin())
		.pipe(gulp.dest(app.dist));
});
gulp.task("default",["clean","copy"]);