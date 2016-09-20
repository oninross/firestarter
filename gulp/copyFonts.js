'use strict';

import path from 'path';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;
  let dest = path.join(taskTarget, dirs.fonts.replace(/^_/, ''));

  // Copy
  // gulp.task('copyFonts', () => {
  //   return gulp.src(path.join(dirs.source, '**/*.{ttf,woff,eof,svg}'))
  //   .pipe(plugins.changed(dest))
  //   .pipe(gulp.dest(dest));
  // });

  gulp.task('copyFonts', function() {
    gulp.src(path.join(dirs.source, '_assets/firestarter/css/fonts/**/*.*'))
      .pipe(gulp.dest(dest))
});
}
