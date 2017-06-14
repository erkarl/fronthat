import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('header-area', 'Integration | Component | header area', {
  integration: true
});

test('it has 3 navigation buttons', function(assert) {
  this.render(hbs`{{header-area}}`);
  assert.equal(this.$('.nav-button', '.navigation-container').length, 3);
});

test('it has a logo', function(assert) {
  this.render(hbs`{{header-area}}`);
  assert.equal(this.$('.logo-container').length, 1);
});
