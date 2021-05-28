import { modifier } from 'ember-modifier';

export default modifier(function prop(element, _, named) {
  for (let key in named) {
    element[key] = named[key];
  }
});
