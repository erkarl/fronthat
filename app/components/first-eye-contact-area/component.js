import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({
  classNames: ['first-eye-contact-area-container'],

  layout: hbs`
    <div class="first-eye-contact-area">
      <h1>REMOTE DEVELOPMENT AND DESIGN JOBS</h1>
      <p class="mail-paragraph">Want to stay updated with newly posted jobs? Join our <a href="https://www.getdrip.com/forms/64302472/submissions/new" rel="noopener noreferrer" target="_blank">mailing list</a>! </p>
    </div>
  `
});
