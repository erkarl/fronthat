import Component from '@ember/component';
import { computed } from '@ember/object';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({
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

  mobileJobs: computed('jobs', function() {
    return this.get('jobs')
      .filter((job) => job.attributes.category === 'ios-and-android');
  }),

  mobileJobsShort: computed('mobileJobs', function() {
    return this.get('mobileJobs').slice(0, 5);
  }),

  otherJobs: computed('jobs', function() {
    return this.get('jobs')
      .filter((job) => job.attributes.category === 'other');
  }),

  otherJobsShort: computed('otherJobs', function() {
    return this.get('otherJobs').slice(0, 5);
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
    {{listing-summary
      url='ios-and-android'
      header="iOS and Android"
      jobs=mobileJobsShort
      totalCount=mobileJobs.length
    }}
    {{listing-summary
      url='other'
      header="Other"
      jobs=otherJobsShort
      totalCount=otherJobs.length
    }}
  `
});
