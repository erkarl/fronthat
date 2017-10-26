import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({
  layout: hbs`
    {{#service-worker-update-notify}}
      <div class="service-worker-notifier">
        <a class="service-worker-update-notify" href="">
          A new version of FrontHAT is available, click here to update.
        </a>
      </div>
    {{/service-worker-update-notify}}
  `
});
