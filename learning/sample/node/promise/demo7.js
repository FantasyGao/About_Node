let index = 0
const step1 = [], step2 = []

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

while(index < 10) {
  step1.push(asyncLoad(index))
  index += 1
}

step1.reduce((task, asyncLoad, i) => {
  return task
    .then(() => asyncLoad)
    .then(() => {
      console.log(`第 ${i + 1} 张图片加载完成.`)
    })
}, Promise.resolve())
  .then(() => {
    console.log('>> 前面10张已经加载完！')
  })
  .then(() => {
    while(index < 20) {
      step2.push(asyncLoad(index))
      index += 1
    }
    return step2.reduce((task, asyncLoad, i) => {
      return task
        .then(() => asyncLoad)
        .then(() => {
          console.log(`第 ${i + 11} 张图片加载完成.`)
        })
    }, Promise.resolve())
  })
  .then(() => {
    console.log('>> 后面10张已经加载完')
  })