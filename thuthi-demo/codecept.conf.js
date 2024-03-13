exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost',
      show: true
    }
  },
  include: {
    I: './steps_file.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js', './step_definitions/calculator.steps.js', './step_definitions/dynamicID.js', './step_definitions/AJAX.js', './step_definitions/scrollbar.js','./step_definitions/visibility.js','./step_definitions/overlapped.js','./step_definitions/clientdelay.js','./step_definitions/app.js','./step_definitions/dom.js','./step_definitions/hidden.js', './step_definitions/click.js','./step_definitions/textinput.js', './step_definitions/nonspace.js','./step_definitions/table.js']
},
  plugins: {
    screenshotOnFail: {
      enabled: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './*_test.js',
  name: 'thuthi-demo'
}