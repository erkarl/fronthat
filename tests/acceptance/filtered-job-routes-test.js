import { test } from 'qunit';
import moduleForAcceptance from 'fronthat/tests/helpers/module-for-acceptance';
import { fillIn, keyEvent } from 'ember-native-dom-helpers';

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

const assertFilteredRoute = async (searchQuery, allCount, filteredCount, assert) => {
  assert.equal(getJobsCount(), allCount);
  await fillIn('.search-box', searchQuery);
  await keyEvent('.search-box', 'keyup', 40);
  assert.equal(getSearchResultsCount(), filteredCount);
};

test('frontend search only shows frontend category listings', async function(assert) {
  await visit('/frontend');
  assertFilteredRoute('frontend', 70, 17, assert);
});

test('backend search only shows backend category listings', async function(assert) {
  await visit('/backend');
  assertFilteredRoute('backend', 62, 7, assert);
});

test('fullstack search only shows fullstack category listings', async function(assert) {
  await visit('/full-stack');
  assertFilteredRoute('full', 37, 15, assert);
});

test('design search only shows design category listings', async function(assert) {
  await visit('/design');
  assertFilteredRoute('photo', 28, 5, assert);
});
