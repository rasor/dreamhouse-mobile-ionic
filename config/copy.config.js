// Copy extra files from /src/ to /www/

// https://forum.ionicframework.com/t/rc0-injecting-custom-scripts/65281/20
var exports = require('@ionic/app-scripts/config/copy.config.js');
exports.copyIndexContent.src.push('{{SRC}}/web.config');

// More info:
// - https://ionicframework.com/docs/developer-resources/app-scripts/
// - https://www.npmjs.com/package/@ionic/app-scripts
