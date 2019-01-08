const urls = [1,2, 3,4,5, 6,7, 8,9]
const erery = 5

function asyncLoad (url) {
  console.log('loading ', url)
  return new Promise((resolve, reject) => {
    if (url !=5) {
      setTimeout(()=>{
        resolve(url)
      }, 1000*url)
    } else {
      resolve(url)
    }
  })
}
let mapLimit = (list, limit, asyncHandle) => {
  let recursion = (arr) => {
      return asyncHandle(arr.shift())
          .then(()=>{
              if (arr.length!==0) return recursion(arr)
              else return 'finish';
          })
  };
  
  let listCopy = [].concat(list);
  let asyncList = [];
  while(limit--) {
      asyncList.push( recursion(listCopy) );
  }
  return Promise.all(asyncList);
}

mapLimit(urls, erery, asyncLoad).then(response => {
  console.log('finish', response)
})

// for(let i=0;i<urls.length/erery;i++) {
//   let pos = i*erery
//   for(let j=pos;i<urls.length;j++) {

//     asyncLoad(j).then(()=>{
//       console.log('url finish', url)
//     }).catch(()=>{
//       console.log('url error', url)
//     })
//   }
// }

// const promises = urls.map(url=>{
//   Promise.resolve().then(()=>asyncLoad)
//   .then(()=>{
//     console.log('url finish', url)
//   }).catch(()=>{
//     console.log('url error', url)
//   })
// })

