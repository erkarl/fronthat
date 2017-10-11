import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({
  classNames: ['first-eye-contact-area-container'],

  layout: hbs`
    <div class="first-eye-contact-area">
      <h1>REMOTE DEVELOPMENT AND DESIGN JOBS</h1>
      <p class="mail-paragraph">Want to stay updated with newly posted jobs? Join our <a href="https://www.getdrip.com/forms/64302472/submissions/new" rel="noopener noreferrer" target="_blank">mailing list</a>! </p>
    </div>
    <div class="category-bulleted">
    <ul>
    <li><a href="/frontend" id="ember345" class="show-all ember-view">
• Frontend</a></li>
    <li><a href="/backend" id="ember355" class="show-all ember-view">• Backend
</a></li>
    <li><a href="/full-stack" id="ember365" class="show-all ember-view">• Full-stack
</a></li>
    <li><a href="/design" id="ember375" class="show-all ember-view">• Design
</a></li>
    <li><a href="/ios-and-android" id="ember385" class="show-all ember-view">• iOS & Android
</a></li>
    <li><a href="/other" id="ember395" class="show-all ember-view">• Other
</a> </li>
    </ul>
    </div>
  `
});
