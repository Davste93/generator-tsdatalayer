// Karma configuration
// Generated on Sun Jun 05 2016 10:48:58 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'browserify'],
    files: [
      'app.ts',
      {pattern: '**/*.spec.ts', included: false}
    ],
    exclude: [
    ],
    preprocessors: {
      'app.ts' :  ['browserify'],
      '**/*.spec.ts' :  ['browserify']
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    browserify: {
      debug: true,
      transform: ['brfs'],
	      plugin: ['tsify'],
	      extensions: ['.ts']
    },
    concurrency: Infinity,
    plugins: [
        'karma-jasmine',
        'karma-chrome-launcher',
        'karma-browserify'
    ],
  })
}
