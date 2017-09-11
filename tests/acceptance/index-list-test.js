import { test } from 'qunit';
import moduleForAcceptance from 'fronthat/tests/helpers/module-for-acceptance';
import { fillIn, keyEvent } from 'ember-native-dom-helpers';

moduleForAcceptance('Acceptance | index list');

test('visiting / shows 4 categories and 5 posts in each of them', async function(assert) {
  await visit('/');
  const categories = find('.listing-summary');
  assert.equal(categories.length, 4);
  for (let category of categories) {
    const jobListings = find('.job-item', category);
    assert.equal(jobListings.length, 5);
  }
});

test('visiting / shows 5+ jobs', async function(assert) {
  await visit('/');
  await waitFor(500);
  const jobs = find('.job-item');
  const greaterThanTwenty = (jobs) => {
    return jobs.length >= 5;
  };
  assert.equal(currentURL(), '/');
  assert.equal(greaterThanTwenty(jobs), true);
});

test('search bar changes URL', async function(assert) {
  await visit('/');
  await waitFor(500);
  const searchQuery = 'frontend';
  await fillIn('.search-box', searchQuery);
  await keyEvent('.search-box', 'keyup', 40);
  await waitFor(500);
  assert.equal(currentURL(), '/remote-jobs/frontend', 'It changes to SEO friendly URL');
});
