import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import jobs from 'fronthat/mirage/json/jobs';
import _ from 'lodash';

moduleForComponent('job-list', 'Integration | Component | job list', {
  integration: true
});

const fastbootEnabled = {
  isFastBoot: true
};

test('it does not render anything given empty jobs', function(assert) {

  this.render(hbs`{{job-list}}`);
  assert.equal(this.$().text().trim(), '');
});

test('it does render everything in FastBoot mode', function(assert) {
  this.set('jobs', jobs.all.data);
  this.set('fastboot', fastbootEnabled);
  this.render(hbs`{{job-list jobs=jobs fastboot=fastboot}}`);

  assert.equal(this.$('.job-item').length > 197, true, 'Job list is greater than 197');
});

test('it sorts jobs by timestamp in FastBoot mode', function(assert) {

  this.set('jobs', jobs.all.data);
  this.set('fastboot', fastbootEnabled);
  this.render(hbs`{{job-list jobs=jobs fastboot=fastboot}}`);

  assert.equal(_.includes(this.$('.job-item').last().text(), '15 May'), false);
});

test('it shows loading when fetching new', function(assert) {

  this.set('fetching', true);

  this.render(hbs`{{job-list fetching=fetching}}`);
  const loadingIndicatorExist = () => {
    return this.$('.loading-indicator').length === 1;
  };
  assert.equal(loadingIndicatorExist(), true);
});

test('it shows error when fetching failed', function(assert) {

  this.set('fetching', 'error');

  this.render(hbs`{{job-list fetching=fetching}}`);
  const errorTextExists = () => {
    return this.$('.job-load-error-text').length === 1;
  };
  assert.equal(errorTextExists(), true);
});
