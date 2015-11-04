var extend = require('xtend')
var createClassName = require('data-field-classname')
var Emitter = require('component-emitter')

/**
* Create a virtual-dom string data-field for use with [data-ui](https://github.com/editdata/data-ui).
* @param {Object} options an options object, including any properties you can pass to virtual-dom/h
* @param {Boolean} options.display true for display mode, default is false for input mode
* @returns field
* @name createStringField
* @example
* var createStringField = require('data-field-string')
* var field = createStringField()
* var vtree = field.render(h, {}, 'example string')
*/
module.exports = function createStringField (options) {
  options = extend({
    tagName: 'textarea',
    display: false,
    size: 'normal',
    fieldType: 'input',
    attributes: {}
  }, options)

  var field = {}
  Emitter(field)
  options.dataType = 'string'

  options.oninput = function (e) {
    field.emit('update', e, e.target.value)
  }

  /**
  * Create a virtual-dom string data-field for use with [data-ui](https://github.com/editdata/data-ui).
  * @param {function} h virtual-dom `h` function
  * @param {Object} properties an options object, including any properties you can pass to virtual-dom/h
  * @param {Boolean} properties.display true for display mode, default is false for input mode
  * @param {String} properties.value any string
  * @param {String} value any string
  * @returns virtual-dom tree
  * @name createStringField
  * @example
  * var createStringField = require('data-field-string')
  * var field = createStringField()
  * var vtree = field.render(h, {}, 'example string')
  */
  field.render = function (h, properties, value) {
    properties = extend(options, properties)
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

  return field
}
