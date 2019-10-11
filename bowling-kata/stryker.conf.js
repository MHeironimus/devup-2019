module.exports = function(config) {
  config.set({
    mutator: "typescript",
    packageManager: "npm",
    reporters: ["html", "clear-text", "progress"],
    htmlReporter: {
      baseDir: "coverage/mutation"
    },
    testRunner: "mocha",
    "mochaOptions": {
      opts: "test/mocha.opts",
      spec: ["build/test/**/*.js"]
    },
    transpilers: ["typescript"],
    testFramework: "mocha",
    coverageAnalysis: "off",
    tsconfigFile: "tsconfig.json",
    mutate: ["src/**/*.ts"],
    "maxConcurrentTestRunners": 1
  });
};
