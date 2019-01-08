module.exports = class {
  apply(compiler){
    console.info('start entry mystest plungin...')
    for (let x in compiler) {
      console.log('%s, %s', x, compiler[x])
    }
    // compiler.plugin("run", compilation => {
    //   console.log("compiler.plugin run")
    //   console.log(compilation)
    // })
    compiler.plugin("done", compilation => {
      console.log("mytest plugin done")
      console.log(compilation)
    })
  }
}