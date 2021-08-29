
function defaultTask(cb) {
    // place code for your default task here
    cb();
}
exports.default = defaultTask

const log = (done) => {
    console.log("Hello Gulp!");
    done();
}
exports.log = log 

const { src, dest } = require('gulp');

exports.searchJS = function() {
  return src('*.js')
    .pipe(dest('output/'));
}


