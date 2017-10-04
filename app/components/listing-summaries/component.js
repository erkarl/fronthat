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
      .filter((job) => job.attributes.category === 'full-stack');
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
      url='frontend'
      header="Frontend"
      jobs=frontendJobsShort
      totalCount=frontendJobs.length
    }}
    {{listing-summary
      url='backend'
      header="Backend"
      jobs=backendJobsShort
      totalCount=backendJobs.length
    }}
    {{listing-summary
      url='full-stack'
      header="Full Stack"
      jobs=fullstackJobsShort
      totalCount=fullstackJobs.length
    }}
    {{listing-summary
      url='design'
      header="Design"
      jobs=designJobsShort
      totalCount=designJobs.length
    }}
  `
});
