import Component from '@ember/component';

export default Component.extend({
  classNames: ['job-item'],
  itemscope: '',
  itemtype: 'http://schema.org/JobPosting',
  attributeBindings: ['itemscope', 'itemtype'],
  classNameBindings: ['job.attributes.highlighted'],
});
