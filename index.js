var extend = require('xtend')
var createClassName = require('data-field-classname')

/**
Create a virtual-dom string data-field for use with [data-ui](https://github.com/editdata/data-ui).
@param {function} h virtual-dom `h` function
@param {Object} properties an options object, including any properties you can pass to virtual-dom/h
@param {Boolean} properties.display true for display mode, default is false for input mode
@param {String} properties.value any string
@param {String} value any string
@returns virtual-dom tree
@name createStringField
@example
var createStringField = require('data-field-string')

createStringField(h, { onclick: function (e){} }, 'example string')
*/
module.exports = function createStringField (h, properties, value) {
  properties = extend({
    tagName: 'textarea',
    display: false,
    size: 'normal',
    fieldType: 'input',
    attributes: {}
  }, properties)

  properties.dataType = 'string'
  value = value || properties.value

  if (properties.display) {
    properties.tagName = 'div'
    properties.fieldType = 'display'
  }

  if (properties.size === 'small') {
    properties.attributes.rows = 1
  }

  properties.className = createClassName(properties)
  return h(properties.tagName, properties, String(value))
}
