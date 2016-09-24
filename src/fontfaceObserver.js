"use strict";

var FontFaceObserver = require('fontfaceobserver/fontfaceobserver');
var modernizr = require("modernizr");

(function(window) {
    window.customFonts.forEach(function(font){
        var observer = new FontFaceObserver(font.name, font.props);
        var className = 'font-' + font.name.replace(/ /g,'-') + '-' + font.props.style + '-' + font.props.weight;
        observer.check(font.testString).then(function () {
            modernizr.addTest(className, true);
        }, function () {
            modernizr.addTest(className, false);
        });
    });
})(global);
