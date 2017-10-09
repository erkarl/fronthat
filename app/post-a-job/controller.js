import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['PROMOCODE'],
  PROMOCODE: null,

  freePost: Ember.computed('PROMOCODE', function() {
    return this.get('PROMOCODE') === 'LjzjPydx';
  })
});
