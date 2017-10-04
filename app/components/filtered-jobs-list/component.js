import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
const { computed } = Ember;

export default Ember.Component.extend({
  filteredJobs: computed('jobs', 'filter', function() {
    return this.get('jobs')
      .filter((job) => job.attributes.category === this.get('filter'));
  }),

  layout: hbs`
    <div class="header"><span class="jobs-count">{{filteredJobs.length}}</span> {{filter}} jobs </div>
    {{job-list
      jobs=filteredJobs
      search=search
      fetching=fetching
      scrollPosition=scrollPosition
      firstVisibleChanged=firstVisibleChanged
    }}
  `
});
