module.exports = function(config) {
  config.set({
    basePath: 'app',
    
    files: [
      'common.coffee',
      'tests/unit/runner.coffee',
      {pattern: '**/*.coffee', included: false}
    ],
   
    preprocessors: {
      '**/*.coffee': ['coffee']
    },

    frameworks: [
      'requirejs',
      'mocha',
      'chai-jquery',
      'sinon-chai'
    ],

    browsers: ['PhantomJS']

  });
};
