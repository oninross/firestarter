'use strict';

import path from 'path';

export default function (gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;
  let dest = path.join(dirs.assets, dirs.fonts.replace(/^_/, ''));
  dest = path.join(taskTarget, dest);

  // Copy fonts
  gulp.task('copyFonts', () => {
    return gulp.src(path.join(dirs.source, dirs.fonts, '**/*.*'))
      .pipe(gulp.dest(dest))
  });
}
