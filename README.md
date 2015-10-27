# data-field-url

## API

### createStringField

Create a virtual-dom string data-field for use with [data-ui](https://github.com/editdata/data-ui).


**Parameters**

-   `h` **function** virtual-dom `h` function

-   `properties` **Object** an options object, including any properties you can pass to virtual-dom/h
    -   `properties.display` **Boolean** true for display mode, default is false for input mode

    -   `properties.value` **String** any string

-   `value` **String** any string



**Examples**

```javascript
var createStringField = require('data-field-string')

createStringField(h, { onclick: function (e){} }, 'example string')
```




## See also

-   [data-fields](https://github.com/editdata/data-fields) – all data fields packaged together.
-   [data-ui](https://github.com/editdata/data-ui) – a collection of modules for managing data.

## License

[MIT](LICENSE.md)
