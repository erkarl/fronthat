import EmberObject from '@ember/object';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('job-details', 'Integration | Component | job details', {
  integration: true
});

test('it displays the title', function(assert) {

  const job = EmberObject.create({
    attributes: {
      title: 'Random Title'
    }
  });
  this.set('job', job);

  this.render(hbs`{{job-details job=job}}`);

  assert.equal(this.$('.job-details-main-toolbar').first().text().trim(), job.attributes.title);
});
