"use strict";

var script = require('../script');

if((isDevMode() && !isStatsDisabled()) || (!isDevMode() && isStatsEnabled())) {
    loadStatsScript();
}

function isDevMode() {
    return /^\/dev\//.test(window.location.pathname);
}

function isStatsDisabled() {
    return /stats\=false/.test(window.location.search);
}

function isStatsEnabled() {
    return /stats\=true/.test(window.location.search);
}

function loadStatsScript() {
    script.load('//rawgit.com/mrdoob/stats.js/master/build/stats.min.js', function() {
        var stats = new global.Stats();
        stats.dom.style.left = 'auto';
        stats.dom.style.right = '0';
        document.body.appendChild(stats.dom);
        requestAnimationFrame(function loop(){
            stats.update();
            global.requestAnimationFrame(loop);
        });
    });
}
