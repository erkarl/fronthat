import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';
import { task, timeout } from 'ember-concurrency';
import fetch from 'fetch';
import ENV from 'fronthat/config/environment';

const { Promise } = Ember.RSVP;

export default Ember.Component.extend({
  infoText: true,

  didRender() {
    this._super(...arguments);
    if (this.shouldSetupEditor()) {
      this.setupEditor();
    }
  },

  shouldSetupEditor() {
    return !this.get('infoText') &&
      !this.get('titleEditor') &&
      !this.get('companyEditor') &&
      !this.get('contentEditor');
  },

  postAJobRequest: (requestBody) => {
    const jobsPostResponse = (response) => {
      return new Promise((resolve, reject) => {
        const generalErrorMessage = 'Sorry, something went wrong on the server side. Please try again or contact us.';
        if (response.status === 200) {
          return resolve();
        }
        else if (response.status === 400) {
          response.json().then((responseJson) => {
            return reject(responseJson.validation.keys
              .map((error) => {
                if (error === 'email') {
                  return 'Please enter a valid email address.';
                }
                else if (error === 'name') {
                  return 'Name can\'t be blank.';
                } else {
                  return generalErrorMessage;
                }
              })
            );
          });
        } else {
          return reject([generalErrorMessage]);
        }
      });
    };
    return new Promise((resolve, reject) => {
      const fetchOptions = {
        method: "POST",
        body: JSON.stringify(requestBody),
      };
      fetch(`${ENV.apiURL}/jobs`, fetchOptions)
        .then(jobsPostResponse, reject)
        .then(resolve, reject);
    });
  },

  postAJobTask: task(function * () {
    this.set('postingErrors', null);
    const postAjobData = {
      email: this.get('email'),
      title: this.get('titleEditor').elements[0].innerHTML,
      name: this.get('companyEditor').elements[0].innerHTML,
      content: this.get('contentEditor').elements[0].innerHTML,
    };
    yield timeout(1000);
    try {
      yield this.postAJobRequest(postAjobData);
      this.get('postAJobSuccess')();
    } catch(postingErrors) {
      this.set('postingErrors', postingErrors);
    }
  }).drop(),

  setupEditor() {
    this.set('titleEditor', new MediumEditor('.job-details-main-toolbar', {
      disableReturn: true,
      toolbar: false,
    }));
    this.set('companyEditor', new MediumEditor('.job-details-secondary-toolbar', {
      disableReturn: true,
      toolbar: false,
    }));
    this.set('contentEditor', new MediumEditor('.job-details-content', {
      toolbar: {
        buttons: ['bold', 'italic', 'underline', 'anchor', 'h1', 'h2'],
      },
      autoLink: true,
      placeholder: false,
      paste: {
          forcePlainText: false,
          cleanPastedHTML: true,
          cleanReplacements: [],
          cleanAttrs: ['class', 'style', 'dir'],
          cleanTags: ['meta'],
          unwrapTags: []
      }
    }));
  },

  actions: {
    continuePosting() {
      this.set('infoText', false);
    },
  },

  layout: hbs`
    {{#if infoText}}
      <div class="job-details">
        <div class="job-details-main-toolbar">
          <h1>Post a Job</h1>
        </div>
        <div class="job-details-content">
          <p>It's free and allows you to reach hundreds of frontend developers and designers.</p>
          <p>By posting directly to FrontHAT your job listing will remain on top of the list for 30 days. Afterwards your job listing will expire and be removed. You can always post the job again.</p>
          <p>All jobs are reviewed within 24 hours before being added to the site in order to ensure quality.</p>
        </div>
        <div class="job-details-secondary-toolbar">
          <a href="#" class="nav-button" {{action 'continuePosting'}} data-test-job-info-ok>
            I understand. Continue posting a job...
          </a>
        </div>
      </div>
    {{else}}
      <div class="job-details">
        <div class="job-details-main-toolbar">
          <h1>Job Title</h1>
        </div>
        <div class="job-details-secondary-toolbar">
          <div class="job-company">
            <h2>Company or Personal Name</h2>
          </div>
        </div>
        <div class="job-details-content">
          <h1>Job Description</h1>
          <p>Click or tap here to start editing.</p>
          <h2>How to Apply</h2>
          <p>Email <a href="mailto:john@company.com">john@company.com</a> or <a href="https://company.com/careers/apply">https://company.com/careers/apply</a></p>
        </div>
        <div class="toolbar email-toolbar">
          {{one-way-input
            email
            id="email-input"
            update=(action (mut email))
            type='email'
            placeholder="Email for confirmation email"
          }}
        </div>
        {{#if postingErrors}}
          <div class="toolbar error-area" data-test-posting-errors>
            <ul>
              {{#each postingErrors as |postingError|}}
                <li>{{postingError}}</li>
              {{/each}}
            </ul>
          </div>
        {{/if}}
        <div class="toolbar bottom-toolbar">
          {{#if postAJobTask.isIdle}}
            <a href="#" class="nav-button" onclick={{perform postAJobTask}} data-test-post-a-job-button-idle>
              Post a Job
            </a>
          {{else}}
            <a href="#" class="nav-button" data-test-post-a-job-button-loading>
              Posting...
            </a>
          {{/if}}
        </div>
      </div>
    {{/if}}
  `
});
