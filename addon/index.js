import modifier from 'ember-functional-modifiers';

export default modifier(function prop(element, positional, named) {
  for (let key in named) {
    element[key] = named[key];
  }
});
