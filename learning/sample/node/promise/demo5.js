const http = require('http')

function getURL(URL) {
  return new Promise(function (resolve, reject) {
    console.log(URL)
    http.request(URL, (err, res) => {
      console.log(res)
      if (err) reject(new Error('error'));
      if(res.statusCode === 200) {
        resolve(req.responseText);
      } else {
        reject(new Error(res.statusText));
      }
    }).on('error', (e)=>{
      console.log('error', e)
      reject(new Error('Error'));
    })
  });
}
var request = {
      comment: function getComment() {
          return getURL('http://azu.github.io/promises-book/json/comment.json').then(JSON.parse);
      },
      people: function getPeople() {
          return getURL('http://azu.github.io/promises-book/json/people.json').then(JSON.parse);
      }
  };
function main() {
  function recordValue(results, value) {
      results.push(value);
      return results;
  }
  // [] 用来保存初始化的值
  var pushValue = recordValue.bind(null, []);
  return request.comment().then(pushValue).then(request.people).then(pushValue);
}
// 运行的例子
main().then(function (value) {
  console.log(value);
}).catch(function(error){
  console.error(error);
});