import Ember from 'ember';
import SearchableMixin from 'fronthat/mixins/searchable';
const { computed } = Ember;
import { capitalizeFirstLetter } from 'fronthat/utils/string-manipulation';

export default Ember.Controller.extend(SearchableMixin, {
  formattedTitle: computed('model', function() {
    return `${capitalizeFirstLetter(this.get('model'))} Remote Jobs | FrontHAT`;
  }),
});
