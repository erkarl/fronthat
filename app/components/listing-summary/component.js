import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

export default Ember.Component.extend({
  classNames: ['listing-summary'],
  layout: hbs`
    <div class="shadow-container">
      <div class="listing-summary-header">
        {{header}}
      </div>
      {{#each jobs as |job|}}
        {{job-item job=job}}
      {{/each}}
      {{#link-to url class="show-all"}}
        Show {{totalCount}} more
      {{/link-to}}
    </div>
  `
});
