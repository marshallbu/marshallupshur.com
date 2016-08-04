// Paths relative to 'gulpfile.js'
var sourceRootDir = './app/';
var tmpRootDir = './tmp/';
var distRootDir = './dist/';

module.exports = {
    sourceRoot: sourceRootDir,
    src: {
        dir: {
            scripts: './app/scripts/',
            styles: './app/styles/',
            fonts: './app/fonts/',
            config: './config/',
            images: './app/images/',
            partials: './app/partials/',
            downloads: './app/downloads/'
        },
        glob: {
            scripts: [
                './app/scripts/*.{js,jsx}',
                './app/scripts/**/*.{js,jsx}',
                '!./app/scripts/vendor/**'
            ],
            vendorScripts: [
                './app/scripts/vendor/**'
            ],
            styles: [
                './app/styles/less/main.less',
                // '!./app/styles/**/*.less'
            ],
            watchstyles: [
                './app/styles/**/*.less'
            ],
            images: [
                './app/images/**/*'
            ],
            fonts: [
                './app/fonts/**/*.{eot,svg,ttf,woff,woff2}',
                './node_modules/font-awesome/fonts/*.{eot,svg,ttf,woff,woff2}'
            ],
            json: ['./app/json/**/*.json'],
            html: ['./app/*.html', './app/*.php'],
            partials: ['./app/partials/**/*.html'],
            sprite: './app/images/sprite/*.{png,jpg}',
            extras: ['./app/*.*', '!app/*.html'],
            downloads: ['./app/downloads/*.*'],
            projectJSON: ['./*.json', '!./codekit-config.json']
        },
        file: {
            app: './app/scripts/main.js',
            lib: './app/scripts/libs/libs.js',
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

    tmpRoot: tmpRootDir,
    tmp: {
        dir: {
            partials: tmpRootDir + 'partials/',
            componentPartials: tmpRootDir + 'partials/components/'
        }
    },

    distRoot: distRootDir,
    dist: {
        dir: {
            root: distRootDir,
            styles: distRootDir + 'mincss/',
            font: distRootDir + 'fonts/',
            scripts: distRootDir + 'minjs/',
            vendorScripts: distRootDir + 'vendor/',
            images: distRootDir + 'images/',
            downloads: distRootDir + 'downloads/'
        },
        file: {
            app: 'app.min.js',
            libs: 'libs.min.js',
            bundle: '[name].min.js',
            boxResumeUrl: 'https://app.box.com/embed/preview/7uaub4pvc0dvhlh0nk7xccx093l80cms?direction=ASC&theme=dark',
            resume: 'downloads/Marshall_Upshur_2015c.pdf'
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
