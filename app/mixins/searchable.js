import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    firstVisibleChanged(object, index) {
      this.set('scrollPosition', index.toString());
    },
  },

});
