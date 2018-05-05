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
        version: '8',
        platform: 'OS X 10.10'
      },
      sl_mac_safari: {
        base: 'SauceLabs',
        browserName: 'safari',
        platform: 'macOS 10.13'
      }
    },
    {
      sl_ie_8: {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 7',
        version: '8'
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
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'dist/*.js',
      'test/*spec.js'
    ],
    reporters: ['dots', 'saucelabs'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    sauceLabs: {
      testName: 'Day.js'
    },
    captureTimeout: 120000,
    customLaunchers: batch,
    browsers: Object.keys(batch),
    singleRun: true
  });
};
