import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['PROMOCODE'],
  PROMOCODE: null,

  freePost: computed('PROMOCODE', function() {
    return this.get('PROMOCODE') === 'LjzjPydx';
  })
});
