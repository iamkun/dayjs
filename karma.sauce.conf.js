module.exports = function (config) {

  var batches = [
    {
      sl_chrome: {
        base: 'SauceLabs',
        browserName: 'chrome',
        version: '26'
      },
      sl_firefox: {
        base: 'SauceLabs',
        browserName: 'firefox',
        version: '4'
      },
      sl_mac_safari: {
        base: 'SauceLabs',
        browserName: 'safari',
        version: '8'
      }
    },
    // ie family
    {
      sl_ie_9: {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 7',
        version: '9'
      },
      sl_edge: {
        base: 'SauceLabs',
        browserName: 'MicrosoftEdge',
        platform: 'Windows 10',
        version: '13'
      }
    },
    // mobile
    {
      sl_ios_safari_9: {
        base: 'SauceLabs',
        browserName: 'iphone',
        version: '9.3'
      },
      sl_android_6_0: {
        base: 'SauceLabs',
        browserName: 'android',
        version: '4.4'
      }
    }
  ];

  var batch = batches[process.argv[4] || 0]
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'dist/*.js',
      'test/*spec.js'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots', 'saucelabs'],


    // web server port
    port: 9876,

    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    sauceLabs: {
      testName: 'Day.js',
      "build": "build-0004"
    },
    captureTimeout: 120000,
    customLaunchers: batch,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: Object.keys(batch),
    singleRun: true
  });
};
