import { test } from 'qunit';
import moduleForAcceptance from 'fronthat/tests/helpers/module-for-acceptance';
import _ from 'lodash';

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

const assertShowMoreCategory = async function(category, url, assert) {
  await click(find('.show-all', category));
  assert.equal(currentURL(), url);
  await click(find('.logo-link'));
  assert.equal(currentURL(), '/');
};

const getCategory = (categoryURL) => {
  const categories = find('.listing-summary');
  for (let category of categories) {
    const categoryLinks = find('a', category);
    for (let categoryLink of categoryLinks) {
      if (_.includes(categoryLink.href, categoryURL)) {
        return category;
      }
    }
  }
  throw new Error('Could not find category by URL', categoryURL);
};

test('visiting / and clicking on show more frontend category', async function(assert) {
  await visit('/');
  const url = '/frontend';
  assertShowMoreCategory(getCategory(url), url, assert);
});

test('visiting / and clicking on show more backend category', async function(assert) {
  await visit('/');
  const url = '/backend';
  assertShowMoreCategory(getCategory(url), url, assert);
});

test('visiting / and clicking on show more full stack category', async function(assert) {
  await visit('/');
  const url = '/full-stack';
  assertShowMoreCategory(getCategory(url), url, assert);
});

test('visiting / and clicking on show more design category', async function(assert) {
  await visit('/');
  const url = '/design';
  assertShowMoreCategory(getCategory(url), url, assert);
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
