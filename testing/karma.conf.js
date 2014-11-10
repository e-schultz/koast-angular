module.exports = function (config) {

  console.log(process.cwd());
  config.set({
    basePath: 'src/',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [],
    exclude: [],
    reporters: ['progress'],
    port: 9999,
    colors: true,
    logLevel: config.LOG_VERBOSE,
    autoWatch: true,
    browsers: ['Chrome'], // Alternatively: 'PhantomJS'
    captureTimeout: 6000,
    singleRun: true
  });
};