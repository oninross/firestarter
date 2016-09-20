'use strict';

import path from 'path';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;

  // Watch task
  gulp.task('watch', () => {
    if (!args.production) {
      // css
      gulp.watch([
        path.join(dirs.source, dirs.css, '**/*.{scss,sass}'),
        path.join(dirs.source, dirs.modules, '**/*.{scss,sass}')
      ], ['sass']);

      // fonts
      gulp.watch([
        path.join(dirs.source, dirs.fonts, '**/*.{ttf,woff,eof,svg}'),
      ], ['sass']);

      // Jade Templates
      gulp.watch([
        path.join(dirs.source, '**/*.jade'),
        path.join(dirs.source, dirs.data, '**/*.{json,yaml,yml}')
      ], ['jade']);

      // Copy
      gulp.watch([
        path.join(dirs.source, '**/*'),
        path.join(dirs.source, dirs.fonts, '**/*.{ttf,woff,eof,svg}'),
        '!' + path.join(dirs.source, '{**/\_*,**/\_*/**}'),
        '!' + path.join(dirs.source, '**/*.jade')
      ], ['copy']);

      // Images
      gulp.watch([
        path.join(dirs.source, dirs.images, '**/*.{jpg,jpeg,gif,svg,png}')
      ], ['imagemin']);

      // All other files
      gulp.watch([
        path.join(dirs.temporary, '**/*'),
        '!' + path.join(dirs.temporary, '**/*.{css,map,html,js}')
      ]).on('change', browserSync.reload);
    }
  });
}
