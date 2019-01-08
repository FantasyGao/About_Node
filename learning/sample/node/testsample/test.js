const expect = require('chai').expect
const assert = require('assert')

assert.throws(
  function() {
    throw new Error("Nothing to see here");
  },
  /here/,
  '预期不抛出错误'
);
describe('arrInclude1', ()=>{
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      // assert.equal([1,2,3].indexOf(4), 1); // node 自带的断言库
      expect([1,2,3].indexOf(0)).to.equal(-1); // Chai expect 形式断言语句
    });
  });
})