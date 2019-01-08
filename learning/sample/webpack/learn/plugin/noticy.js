class Notifier {
  apply(compiler) {
    compiler.plugin("done", (stats) => {
      console.log("Notifier plugin done")
      const pkg = require("../package.json");
      const notifier = require("node-notifier");
      const time = ((stats.endTime - stats.startTime) / 1000).toFixed(2);

      notifier.notify({
        title: pkg.name,
        message: `WebPack is done!\n${stats.compilation.errors.length} errors in ${time}s`,
        contentImage: "https://path/to/your/logo.png",
      });
    });
  }
}

module.exports = Notifier;
