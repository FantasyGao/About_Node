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

const promises = urls.map(asyncLoad)
Promise.all(promises)
  .then(imgs => {
    imgs.forEach(o => {
      console.log(o)
    })
  })
  .catch(err => {
    console.error(err, 'Promise.all 当其中一个出现错误，就会reject。')
  })