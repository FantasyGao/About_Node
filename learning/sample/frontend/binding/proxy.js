const sample = document.querySelector('#sample')
const input = document.querySelector('#input')
const btn = document.querySelector('#btn')

const model = {
  text: 'some thing'
}

const proxy = new Proxy(model, {
  get(target, key, receiver) {
    return Reflect.get(target, key, receiver)
  },
  set(target, key, value, receiver) {
    value && (sample.innerText = value)
    return Reflect.set(target, key, value, receiver)
  }
})

input.addEventListener('input', function(){
  proxy.text = this.value
  console.log('view change', sample.innerText)
  console.log('model', model)
}, false)

btn.addEventListener('click', function(){
  setTimeout(()=>{
    proxy.text = (Math.random()* 1000).toFixed(4)
    console.log('model change', model)
    console.log('view text', sample.innerText)
  }, 3000)
})
