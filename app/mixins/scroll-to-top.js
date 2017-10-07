import $ from 'jquery';
import Mixin from '@ember/object/mixin';

export default Mixin.create({
  didInsertElement() {
    this._super(...arguments);
    $(document).scrollTop(0);
  }
});
