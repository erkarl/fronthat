import Ember from 'ember';

export default Ember.Mixin.create({
  didInsertElement() {
    this._super(...arguments);
    Ember.$(document).scrollTop(0);
  }
});
