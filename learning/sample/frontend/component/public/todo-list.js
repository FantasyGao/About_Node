import TodoItem from './todo-item.js'

export default class TodoList extends HTMLElement {
  constructor() {
    super()

    this.$shadow = this.attachShadow({ mode: 'open' })
    this.$style = document.createElement('style')
    this.$wrap = document.createElement('div')
    this.$op = document.createElement('div')
    this.$input = document.createElement('input')
    this.$button = document.createElement('button')

    this.data = [
      {
        msg: 'Things 3',
        state: true
      },
      {
        msg: 'Things 1',
        state: false
      },
      {
        msg: 'Things 2',
        state: false
      }
    ]
    this.finish = this.finish.bind(this)
    this.undo = this.undo.bind(this)
    this.delete = this.delete.bind(this)
  }

  connectedCallback() {
    let { data, $shadow, $style, $wrap, $op, $input, $button } = this

    $wrap.className = 'todo-list'

    $style.textContent = `
      .todo-list { width: 200px; margin: 0 auto; }
    `

    $button.innerHTML = 'Add'
    $input.placeholder = 'add new msg'

    $wrap.appendChild($op)

    data.forEach((item, index) => {
      let $todoItem = new TodoItem()

      $todoItem.setAttribute('msg', item.msg)
      $todoItem.setAttribute('state', item.state)

      $wrap.appendChild($todoItem)
    })

    $wrap.addEventListener('finish', this.finish)
    $wrap.addEventListener('undo', this.undo)
    $wrap.addEventListener('delete', this.delete)
    $button.addEventListener('click', _ => {
      if ($input.value) {
        this.add($input.value)
      }
    })

    $op.appendChild($input)
    $op.appendChild($button)

    $shadow.appendChild($style)
    $shadow.appendChild($wrap)
  }

  finish({ target: $item }) {
    let { $wrap, data } = this

    let index = Array.from($wrap.children).indexOf($item)

    data[index].state = true
    $item.setAttribute('state', true)
  }

  undo({ target: $item }) {
    let { $wrap, data } = this

    let index = Array.from($wrap.children).indexOf($item)

    data[index].state = false
    $item.setAttribute('state', false)
  }

  add(msg) {
    let { $wrap, data } = this

    data.push({
      msg,
      state: false
    })

    let $newItem = new TodoItem()

    $newItem.setAttribute('msg', msg)
    $newItem.setAttribute('state', false)
    $wrap.appendChild($newItem)
  }

  delete({ target: $item }) {
    let { $wrap, data } = this

    let index = Array.from($wrap.children).indexOf($item)

    this.data.splice(index, 1)
    $wrap.removeChild($item)
  }
}

customElements.define('todo-list', TodoList)