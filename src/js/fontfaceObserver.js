"use strict";

var FontFaceObserver = require('fontfaceobserver/fontfaceobserver');
var modernizr = require("modernizr");

(function(window) {
    window.customFonts.forEach(function(font){
        var observer = new FontFaceObserver(font.name, font.props);
        observer.check(font.testString).then(function () {
            modernizr.addTest('font-' + font.name, true);
        }, function () {
            modernizr.addTest('font-' + font.name, false);
        });
    });
})(global);
