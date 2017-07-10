var gulp=require("gulp");

gulp.task("copyallfile",function(){
	gulp.src("./**/*")
	.pipe(gulp.dest("E:/PHPstudy/WWW/Walmart"))
})

gulp.task("copyallfilephp",function(){
	gulp.src("*.php")
	.pipe(gulp.dest("E:/PHPstudy/WWW/Walmart"))
})


gulp.task("watchAll",function(){
	gulp.watch("./**/*",["copyallfile"]);
	gulp.watch("*.php",["copyallfilephp"]);
})









