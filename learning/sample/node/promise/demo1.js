
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


asyncLoad(urls[0])
  .then(()=>{
    console.log('0 loading finish')
    return asyncLoad(urls[1])
  })
  .then(()=>{
    console.log('1 loading finish')
    return asyncLoad(urls[2])
  })
  .then(()=>{
    console.log('2 loading finish')
    return asyncLoad(urls[3])
  })
  .then(()=>{
    console.log('3 loading finish')
    return asyncLoad(urls[4])
  })
  .then(()=>{
    console.log('4 loading finish')
    return asyncLoad(urls[5])
  })
  .then(()=>{
    console.log('5 loading finish')
    return asyncLoad(urls[6])
  })
  .then(()=>{
    console.log('6 loading finish')
    return asyncLoad(urls[7])
  })
  .then(()=>{
    console.log('7 loading finish')
    return asyncLoad(urls[8])
  })
  .catch(e => {console.log('err', e)})