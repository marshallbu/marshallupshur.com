module.exports = {
    jquery: { exports: '$' },
    scrollTo: { 
        // exports: null, 
        depends: { 'jquery': '$' }
    },
    lodash: { exports: '_' },
    bootstrap: { 
        depends: { 'jquery': '$' } 
    },
    angular: { exports: 'angular' },
    angularResource: { 
        exports: null,
        depends: { 'angular': null }
    },
    angularRoute: { 
        exports: null,
        depends: { 'angular': 'angular' }
    },
    angularSanitize: { 
        exports: null,
        depends: { 'angular': null }
    },
    angularTranslate: { 
        exports: null,
        depends: { 'angular': null }
    },
    angularAdaptiveSpeech: {
        exports: null,
        depends: { 'angular': null }
    },
};
