import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({
  classNames: ['first-eye-contact-area-container'],

  layout: hbs`
    <div class="first-eye-contact-area">
      <h1>REMOTE DEVELOPMENT AND DESIGN JOBS</h1>
      <p class="mail-paragraph">Want to stay updated with newly posted jobs? Join our <a href="https://www.getdrip.com/forms/64302472/submissions/new" rel="noopener noreferrer" target="_blank">mailing list</a>! </p>
    </div>
    <div class="category-list">
      <div class="list-item ripple">
        {{#link-to 'frontend'
          class="category-item-link"
        }}
          Frontend
        {{/link-to}}
      </div>
      <div class="list-item ripple">
        {{#link-to 'backend'
          class="category-item-link"
        }}
          Backend
        {{/link-to}}
      </div>
      <div class="list-item ripple">
        {{#link-to 'full-stack'
          class="category-item-link"
        }}
          Full-Stack
        {{/link-to}}
      </div>
      <div class="list-item ripple">
        {{#link-to 'design'
          class="category-item-link"
        }}
          Design
        {{/link-to}}
      </div>
      <div class="list-item ripple">
        {{#link-to 'ios-and-android'
          class="category-item-link"
        }}
          iOS & Android
        {{/link-to}}
      </div>
      <div class="list-item ripple">
        {{#link-to 'other'
          class="category-item-link"
        }}
          Other
        {{/link-to}}
      </div>
    </div>
  `
});
