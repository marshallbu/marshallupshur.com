// Paths relative to 'gulpfile.js'
var sourceRootDir = './app/';
var buildRootDir = './build/';

module.exports = {
    sourceRoot: sourceRootDir,
    src: {
        dir: {
            scripts: './app/scripts/',
            styles: './app/styles/',
            fonts: './app/fonts/',
            config: './config/',
            images: './app/images/'
        },
        glob: {
            scripts: [
                './app/scripts/*.js',
                './app/scripts/**/*.js',
                '!./app/scripts/vendor/**'
            ],
            styles: [
                './app/styles/less/main.less',
                // '!./app/styles/**/*.less',
                '!./app/styles/base/_sprite.less'
            ],
            images: [
                './app/images/**/*'
            ],
            fonts: [
                './app/fonts/**/*.{eot,svg,ttf,woff}',
                './bower_modules/font-awesome/fonts/*.{eot,svg,ttf,woff}'
            ],
            json: ['./app/json/**/*.json'],
            html: ['./app/*.html', './app/*.php'],
            sprite: './app/images/sprite/*.{png,jpg}',
            extras: ['./app/*.*', '!app/*.html'],
            projectJSON: ['./*.json', '!./codekit-config.json']
        },
        file: {
            app: './app/scripts/main.js',
            lib: './gulp/utils/lib.js',
            testConfig: './test/config/karma.config.js',
            text: [
                './app/.htaccess',
                './app/favicon.ico',
                './app/robots.txt',
                './app/humans.txt'
            ],
        }
    },
    vendorRoot: './bower_modules/',
    buildRoot: buildRootDir,
    build: {
        dir: {
            root: buildRootDir,
            styles: buildRootDir + 'mincss/',
            font: buildRootDir + 'fonts/',
            scripts: buildRootDir + 'minjs/',
            json: buildRootDir + 'json/',
            config: buildRootDir + 'config/',
            images: buildRootDir + 'images/'
        },
        file: {
            app: 'app.min.js',
            libs: 'libs.min.js'
        }
    },

    test: {
        unitTestSetup: './test/unitSpec/unitTestSetup.js',
        dir: {
            src: './test/',
            unit: './test/unitSpec/',
            component: './test/componentSpec/',
            integration: './test/integrationSpec/'
        },
        glob: {
            unit: ['./test/unitSpec/**/*.js'],
            karmaUnit: ['../unitSpec/**/*.js'],
            component: ['./test/componentSpec/**/*.js'],
            integration: ['./test/integrationSpec/**/*.js']
        }
    }
};