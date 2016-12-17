/*
*	Task Automation to make my life easier.
*	Author: Jean-Pierre Sierens
*	===========================================================================
*/

// declarations, dependencies
// ----------------------------------------------------------------------------
const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const gutil = require('gulp-util');
const babelify = require('babelify');

// External dependencies you do not want to rebundle while developing,
// but include in your application deployment
const dependencies = [
  'react',
  'react-dom',
  'redux',
  'react-redux',
];
// keep a count of the times a task refires
let scriptsCount = 0;

// Gulp tasks
// ----------------------------------------------------------------------------
gulp.task('scripts', () => {
  bundleApp(false);
});

gulp.task('deploy', () => {
  bundleApp(true);
});

gulp.task('watch', () => {
  gulp.watch(['./app/landing/*.js', './app/landing/*.jsx'], ['scripts']);
});

// When running 'gulp' on the terminal this task will fire.
// It will start watching for changes in every .js file.
// If there's a change, the task 'scripts' defined above will fire.
gulp.task('default', ['scripts', 'watch']);

// Private Functions
// ----------------------------------------------------------------------------
function bundleApp(isProduction) {
  scriptsCount += 1;
  // Browserify will bundle all our js files together in to one and will let
  // us use modules in the front end.
  const appBundler = browserify({
    entries: './app/main.js',
    debug: true,
  });

  // If it's not for production, a separate vendors.js file will be created
  // the first time gulp is run so that we don't have to rebundle things like
  // react everytime there's a change in the js file
  if (!isProduction && scriptsCount === 1) {
    // create vendors.js for dev environment.
    browserify({
      require: dependencies,
      debug: true,
    })
      .bundle()
      .on('error', gutil.log)
      .pipe(source('vendors.js'))
      .pipe(gulp.dest('./web/js/'));
  }
  if (!isProduction) {
    // make the dependencies external so they dont get bundled by the
    // app bundler. Dependencies are already bundled in vendor.js for
    // development environments.
    dependencies.forEach((dep) => {
      appBundler.external(dep);
    });
  }
  appBundler
    // transform ES6 and JSX to ES5 with babelify
    .transform('babelify', { presets: ['es2015', 'react', 'stage-2'] })
    .bundle()
    .on('error', gutil.log)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./web/js/'));
}
