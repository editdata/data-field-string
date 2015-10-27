var vraf = require('virtual-raf')
var h = require('virtual-dom/h')
var stringField = require('../index')

function render (state) {
  var elements = []

  elements.push(stringField(h, {
    display: true,
    value: state.message,
    onclick: function (e) { console.log('display', e.target.value) }
  }))

  elements.push(stringField(h, {
    value: state.message,
    oninput: function (e) {
      tree.update({ message: e.target.value })
    }
  }))

  return h('div.fields', elements)
}

var tree = vraf({ message: 'hi' }, render, require('virtual-dom'))
document.body.appendChild(tree())
