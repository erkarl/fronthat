import Component from '@ember/component';
import { computed } from '@ember/object';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({
  message: "Oops, the page you're looking for wasn't found.",

  notFoundTitle: computed('titleText', function() {
    const slug = this.get('slug');
    if (slug) {
      return `Not Found - ${slug} | FrontHAT`;
    }
    return 'Not Found | FrontHAT';
  }),

  layout: hbs`
    {{title notFoundTitle}}
    <div class="simple-message">
      <p>{{message}}</p>
      <p>
        {{#link-to 'index'
          class="nav-button ripple"
        }}
          View Jobs List
        {{/link-to}}
      </p>
    </div>
  `
});
