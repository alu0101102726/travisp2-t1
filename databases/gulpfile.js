var gulp = require('gulp');
var shell = require('gulp-shell');

/********************* CHAPTER 5 *********************/
// Chapter 5: Transforming Data and Testing Continuously
gulp.task("c5-get-guttenberg", shell.task(
    
    'cd ../data && ' +
    'curl -O https://www.gutenberg.org/cache/epub/feeds/rdf-files.tar.bz2 &&' +
    
    'tar -xvjf rdf-files.tar.bz2'
));

gulp.task("pre-install", shell.task([
  "npm i -g gulp static-server",
  "npm install -g gulp-shell",
  "npm install",
]));

gulp.task("default", shell.task("npm test"));
gulp.task("watch", shell.task("npm run test:watch"));
