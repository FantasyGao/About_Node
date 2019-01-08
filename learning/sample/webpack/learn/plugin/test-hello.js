class HelloWorldPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    console.log(compiler.hooks.done)
    compiler.hooks.done.tap('HelloWorldPlugin', () => {
      console.log('Hello World!');
      console.log(this.options);
    });
  }
}

module.exports = HelloWorldPlugin;