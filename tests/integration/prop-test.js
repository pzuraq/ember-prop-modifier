import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | prop', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    this.handleClick = () => {
      assert.ok('button clicked!');
    };

    await render(hbs`<button {{prop onclick=this.handleClick}}>Click</button>`);
    await click('button');
  });
});
