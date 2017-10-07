import Mixin from '@ember/object/mixin';

export default Mixin.create({
  actions: {
    firstVisibleChanged(object, index) {
      this.set('scrollPosition', index.toString());
    },
  },

});
