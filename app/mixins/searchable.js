import Ember from 'ember';

export default Ember.Mixin.create({
  queryParams: ['q'],
  q: null,
  applicationController: Ember.inject.controller('application'),
  search: Ember.computed.alias('applicationController.search'),

  setSearch(query) {
    this.set('search', query);
  },

  actions: {
    firstVisibleChanged(object, index) {
      this.set('scrollPosition', index.toString());
    },
  },

});
