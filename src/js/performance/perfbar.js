"use strict";

var script = require('../script');

if(isPerfbarEnabled()) {
    initScript();
}

function isPerfbarEnabled() {
    return /perfbar\=true/.test(window.location.search);
}

function initScript() {
    script.load('//rawgit.com/WPOTools/perfBar/master/build/perfbar.js', function() {
        global.perfBar.init({
            lazy: true,
            budget: {
                // the key is the metric id
                'loadTime': {
                    max: 1250
                },
                'redirectCount': {
                    max: 1
                },
                'globalJS': {
                    min: 2,
                    max: 5
                },
                'cssCount': {
                    max: 3
                },
                'FirstPaint': {
                    max: 500
                },
                'Front End': {
                    max: 1000
                }
            }
        });
    });
}
