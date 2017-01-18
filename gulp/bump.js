'use strict';

// dependencies
import gulp from 'gulp';
import bump from 'gulp-bump';

/**
 * Bumping version number and tagging the repository with it.
 * Please read http://semver.org/
 *
 * You can use the commands
 *
 *     gulp patch     # makes v0.1.0 → v0.1.1
 *     gulp feature   # makes v0.1.1 → v0.2.0
 *     gulp release   # makes v0.2.1 → v1.0.0
 *
 * To bump the version numbers accordingly after you did a patch,
 * introduced a feature or made a backwards-incompatible release.
 */

export default function(gulp, plugins, args, config, taskTarget, browserSync) {

    function inc(importance) {
        // get all the files to bump version in
        return gulp.src(['./package.json', './src/service-worker.js'])
            // bump the version number in those files
            .pipe(bump({type: importance}))

            // save it back to filesystem
            .pipe(gulp.dest('./'));
    }

    gulp.task('patch', function() { return inc('patch'); });
    gulp.task('feature', function() { return inc('minor'); });
    gulp.task('release', function() { return inc('major'); });

}
