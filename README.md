# vue-ladda

A vue wrapper for https://github.com/hakimel/Ladda .

## Installation

### Direct Download / CDN

[https://unpkg.com/vue-ladda/dist/vue-ladda.js](https://unpkg.com/vue-ladda/dist/vue-ladda.js)

```html
<script src="https://unpkg.com/vue-ladda"></script>
```

Then you can use it in this way:

```html
<vue-ladda ...>...</vue-ladda>
```

### NPM

```bash
npm install vue-ladda
```

```javascript
// Import the vue single file component, if you set vue-loader and sass preprocessor properly:
import VueLadda from 'vue-ladda'

// or import the prebuilt js file
import VueLadda from 'vue-ladda/dist/vue-ladda.js'

// then register it globally
Vue.component('vue-ladda', VueLadda)

// or locally
var Child = {
  template: '<vue-ladda>Click Me!</vue-ladda>'
}
new Vue({
  // ...
  components: {
    // <my-component> will only be available in parent's template
    'vue-ladda': VueLadda
  }
})
```

## How to use

- Use default slot to give button label: (Default label is "Submit")

    ```html
    <vue-ladda>Confirm</vue-ladda>
    ```

- Use `data-style` prop to specify animation:

    ```html
    <vue-ladda data-style="expand-left|contract|zoom-in|slide-left">
      ...
    </vue-ladda>
    ```
    
    Visit [http://lab.hakim.se/ladda/](http://lab.hakim.se/ladda/) to get a full options of data-style.

- Use `loading` prop to control button status:
    
    ```html
    <vue-ladda loading="true|false">...</vue-ladda>
    ```
    
- Use `progress` prop to control the ladda built-in progress bar. (0 to 1)

See [examples/index.html](examples/index.html) for some example.