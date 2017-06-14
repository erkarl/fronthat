import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('first-eye-contact-area', 'Integration | Component | first eye contact area', {
  integration: true
});

test('it has first eye contact area', function(assert) {
  this.render(hbs`{{first-eye-contact-area}}`);
  assert.equal(this.$('.first-eye-contact-area').length, 1);
});
