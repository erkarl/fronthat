import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
const { computed } = Ember;

export default Ember.Component.extend({
  filteredJobs: computed('jobs', 'filter', function() {
    return this.get('jobs')
      .filter((job) => job.attributes.category === this.get('filter'));
  }),

  layout: hbs`
    <div>{{filter}} jobs <span class="jobs-count">{{filteredJobs.length}}</span></div>
    {{job-list
      jobs=filteredJobs
      search=search
      fetching=fetching
      scrollPosition=scrollPosition
      firstVisibleChanged=firstVisibleChanged
      filterBySearch=filterBySearch
    }}
  `
});
