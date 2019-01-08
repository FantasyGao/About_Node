(function(){
  const sample = document.querySelector('#sample1')
  const input = document.querySelector('#input1')
  const btn = document.querySelector('#btn1')

  const model = {}

  const _obj = {}  
  Object.defineProperty(_obj, 'text', {
    get() {
      console.log('get')
    },
    set(value) {
      console.log('set', value)
      model.text = value
      value && (sample.innerText = value)
    }
  })
  
  input.addEventListener('input', function(){
    _obj.text = this.value
    console.log('view change', sample1.innerText)
    console.log('model', model)
  }, false)
  
  btn.addEventListener('click', function(){
    setTimeout(()=>{
      _obj.text = (Math.random()* 1000).toFixed(4)
      console.log('model change', model)
      console.log('view text', sample1.innerText)
    }, 3000)
  })
})()
