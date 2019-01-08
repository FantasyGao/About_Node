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

let task = Promise.resolve()
for (let i = 0; i < promises.length; i++) {
  task = task.then(() => promises[i]).then(()=>{
    console.log('load finish %d', i)
  })
}

promises.reduce((task, asyncLoad) => {
  return task.then(() =>  asyncLoad).then(()=>{
    console.log('load finish -')
  })
}, Promise.resolve())