const gulp = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

gulp.task("build:ts", () => {
    tsProject
        .src()
        .pipe(tsProject())
        .pipe(gulp.dest("dist/"));
});

gulp.task("build:html", () => {
    gulp
        .src("src/**/*.html")
        .pipe(gulp.dest("dist/"));
});

gulp.task("build", ["build:ts", "build:html"]);
