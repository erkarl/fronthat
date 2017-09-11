import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
const { computed } = Ember;

export default Ember.Component.extend({
  classNames: ['listing-summaries'],

  frontendJobs: computed('jobs', function() {
    return this.get('jobs')
      .filter((job) => job.attributes.category === 'frontend');
  }),

  frontendJobsShort: computed('frontendJobs', function() {
    return this.get('frontendJobs').slice(0, 5);
  }),

  backendJobs: computed('jobs', function() {
    return this.get('jobs')
      .filter((job) => job.attributes.category === 'backend');
  }),

  backendJobsShort: computed('backendJobs', function() {
    return this.get('backendJobs').slice(0, 5);
  }),

  fullstackJobs: computed('jobs', function() {
    return this.get('jobs')
      .filter((job) => job.attributes.category === 'fullstack');
  }),

  fullstackJobsShort: computed('fullstackJobs', function() {
    return this.get('fullstackJobs').slice(0, 5);
  }),

  designJobs: computed('jobs', function() {
    return this.get('jobs')
      .filter((job) => job.attributes.category === 'design');
  }),

  designJobsShort: computed('designJobs', function() {
    return this.get('designJobs').slice(0, 5);
  }),

  layout: hbs`
    {{listing-summary
      header="Frontend"
      jobs=frontendJobsShort
      totalCount=frontendJobs.length
    }}
    {{listing-summary
      header="Backend"
      jobs=backendJobsShort
      totalCount=backendJobs.length
    }}
    {{listing-summary
      header="Fullstack"
      jobs=fullstackJobsShort
      totalCount=fullstackJobs.length
    }}
    {{listing-summary
      header="Design"
      jobs=designJobsShort
      totalCount=designJobs.length
    }}
  `
});
