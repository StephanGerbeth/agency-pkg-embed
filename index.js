/**
 * Use relative root path for require.
 * require('./src-pkg/module'); -> false
 * require('./module'); -> true
 */

"use strict";

require('classlist-polyfill');
require('./fontfaceObserver');
require('./performance/stats');
require('./performance/perfbar');
