/**
 * only require other specs here
 */

 const req = require.context('.', false, /\.spec\.js(x)?$/);
 req.keys().forEach(req);
 