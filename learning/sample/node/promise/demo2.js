
const urls = [1,2, 3,4,5, 6,7, 8,9]

function asyncLoad (url) {
  console.log('loading ', url)
  return new Promise((resolve, reject) => {
    if (url !=5) {
      setTimeout(()=>{
        resolve(url)
      }, 1000)
    } else {
      reject(url)
    }
  })
}

let promise = Promise.resolve()
for (let i = 0; i < urls.length; i++) {
	promise = promise
    .then(()=>asyncLoad(urls[i]))
    .then(()=>{
      console.log('%d loading finish', i)
    })
    .catch(e => {
      console.log('err', e)
    })
}
