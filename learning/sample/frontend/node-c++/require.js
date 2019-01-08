exports.name = 'asd'
module.exports = {
  obj: 123
}
Reflect.deleteProperty(module, 'id') 
console.log(module.id)