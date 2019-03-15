# ember-prop-modifier

This addon provides a `{{prop}}` modifier which can be used to set properties
directly on the element it is applied to:

```js
import Component from '@glimmer/component';

export default class MyVideo extends Component {
  mediaSource = new MediaSource();
}
```

```hbs
<video {{prop srcObject=this.mediaSource}}/>
```

## Compatibility

- Ember.js v2.12 or above
- Ember CLI v3.0 or above

## Installation

```
ember install ember-prop-modifier
```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.

## License

This project is licensed under the [MIT License](LICENSE.md).
