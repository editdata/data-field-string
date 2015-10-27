var test = require('tape')
var h = require('virtual-dom/h')
var createField = require('../index')

test('create an input field', function (t) {
  var field = createField(h, { value: 'example' })
  t.equal(field.tagName, 'TEXTAREA')
  t.end()
})

test('create a display field', function (t) {
  var field = createField(h, {
    value: 'example',
    display: true
  })
  t.equal(field.tagName, 'DIV')
  t.end()
})
