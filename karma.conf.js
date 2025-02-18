module.exports = function(config) {
    config.set({
      basePath: '',
      frameworks: ['jasmine'],
      files: [
        'src/test.ts'
      ],
      preprocessors: {
        'src/test.ts': ['@angular-devkit/build-angular/src/karma/karma-preprocessor']
      },
      browsers: ['ChromeHeadless'],  // Runs Chrome in headless mode (no UI)
      customLaunchers: {
        ChromeHeadless: {
          base: 'Chrome',
          flags: [
            '--headless',
            '--no-sandbox',
            '--disable-gpu',
            '--remote-debugging-port=9222'
          ]
        }
      },
      plugins: [
        'karma-chrome-launcher',
        'karma-jasmine',
        'karma-jasmine-html-reporter',
        '@angular-devkit/build-angular'
      ],
      reporters: ['progress', 'kjhtml'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      singleRun: true,  // Ensures tests run only once during CI/CD
      restartOnFileChange: true
    });
  };
  