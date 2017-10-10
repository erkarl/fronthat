import { test } from 'qunit';
import moduleForAcceptance from 'fronthat/tests/helpers/module-for-acceptance';
import { fillIn, keyEvent } from 'ember-native-dom-helpers';
import jobs from '../../mirage/json/jobs';

moduleForAcceptance('Acceptance | filtered job routes');

const getCount = (element) => {
  return parseInt(element.text(), 10);
};
const getJobsCount = () => {
  return getCount(find('.jobs-count'));
};

const getSearchResultsCount = () => {
  return getCount(find('.search-results-info-count'));
};

const assertFilteredRoute = async (searchQuery, allCount, assert) => {
  assert.equal(getJobsCount(), allCount);
  await fillIn('.search-box', searchQuery);
  await keyEvent('.search-box', 'keyup', 40);
  assert.equal(getSearchResultsCount() < allCount, true);
};

const findCountByCategory = (category) => {
  return jobs
    .all
    .data
    .filter((job) => job.attributes.category === category)
    .length;
};

test('frontend search only shows frontend category listings', async function(assert) {
  const category = 'frontend';
  await visit(`${category}`);
  assertFilteredRoute('frontend', findCountByCategory(category), assert);
});

test('backend search only shows backend category listings', async function(assert) {
  const category = 'backend';
  await visit(`${category}`);
  assertFilteredRoute('backend', findCountByCategory(category), assert);
});

test('fullstack search only shows fullstack category listings', async function(assert) {
  const category = 'full-stack';
  await visit(`${category}`);
  assertFilteredRoute('full', findCountByCategory(category), assert);
});

test('design search only shows design category listings', async function(assert) {
  const category = 'design';
  await visit(`${category}`);
  assertFilteredRoute('photo', findCountByCategory(category), assert);
});

test('ios-and-android search only shows mobile category listings', async function(assert) {
  const category = 'ios-and-android';
  await visit(`${category}`);
  assertFilteredRoute('ios', findCountByCategory(category), assert);
});

test('other search only shows other category listings', async function(assert) {
  const category = 'other';
  await visit(`${category}`);
  assertFilteredRoute('devops', findCountByCategory(category), assert);
});
