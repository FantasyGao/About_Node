class Notifier {
  apply(compiler) {
    compiler.hooks.compilation.tap("compilation", function(compilation) {
        //主要的编译实例
        //随后所有的方法都从 compilation.plugin 上得来
        
    });
    console.log(compiler.hooks)
    compiler.hooks.done.tap('a',(stats) => {
      console.log("Notifier plugin done finish")
    });
    compiler.hooks.done.tap('a',(stats) => {
      console.log("Notifier plugin done finish")
    });
  }
}

module.exports = Notifier;
