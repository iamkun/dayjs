module.exports = function (config) {

  var batches = [
    {
      sl_chrome_26: {
        base: 'SauceLabs',
        browserName: 'chrome',
        version: '26'
      },
      sl_chrome: {
        base: 'SauceLabs',
        browserName: 'chrome'
      },
      sl_firefox_4: {
        base: 'SauceLabs',
        browserName: 'firefox',
        version: '4'
      },
      sl_firefox: {
        base: 'SauceLabs',
        browserName: 'firefox'
      },
      sl_mac_safari_8: {
        base: 'SauceLabs',
        browserName: 'safari',
        version: '8'
      },
      sl_mac_safari: {
        base: 'SauceLabs',
        browserName: 'safari'
      }
    },
    {
      sl_ie_9: {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 7',
        version: '9'
      },
      sl_ie: {
        base: 'SauceLabs',
        browserName: 'internet explorer'
      },
      sl_edge_13: {
        base: 'SauceLabs',
        browserName: 'MicrosoftEdge',
        platform: 'Windows 10',
        version: '13'
      },
      sl_edge: {
        base: 'SauceLabs',
        browserName: 'MicrosoftEdge'
      }
    },
    {
      sl_ios_safari_9: {
        base: 'SauceLabs',
        browserName: 'iphone',
        version: '9.3'
      },
      sl_ios_safari: {
        base: 'SauceLabs',
        browserName: 'iphone'
      },
      sl_android_4_4: {
        base: 'SauceLabs',
        browserName: 'android',
        version: '4.4'
      },
      sl_android: {
        base: 'SauceLabs',
        browserName: 'android'
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
      testName: 'Day.js'
    },
    captureTimeout: 120000,
    customLaunchers: batch,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: Object.keys(batch),
    singleRun: true
  });
};
