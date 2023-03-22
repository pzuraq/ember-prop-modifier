import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | prop', function (hooks) {
  setupRenderingTest(hooks);

  test('it works', async function (assert) {
    assert.expect(1);

    this.handleClick = () => {
      assert.ok('button clicked!');
    };

    await render(hbs`
      <button type="button" {{prop onclick=this.handleClick}}>Click</button>
    `);
    await click('button');
  });

  test('it updates', async function (assert) {
    assert.expect(2);

    let count = 0;

    this.handleClick = () => {
      assert.strictEqual(count, 0, 'button clicked!');
      count++;
    };

    await render(hbs`
      <button type="button" {{prop onclick=this.handleClick}}>Click</button>
    `);
    await click('button');

    this.set('handleClick', () => {
      assert.strictEqual(count, 1, 'function updated properly');
    });

    await click('button');
  });
});
