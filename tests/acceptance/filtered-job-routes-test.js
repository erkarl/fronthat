import { test } from 'qunit';
import moduleForAcceptance from 'fronthat/tests/helpers/module-for-acceptance';
import { fillIn, keyEvent } from 'ember-native-dom-helpers';

moduleForAcceptance('Acceptance | filtered job routes');

const getJobsCount = () => {
  return parseInt(find('.jobs-count').text(), 10);
};

test('frontend search only shows frontend category listings', async function(assert) {
  await visit('/frontend');
  await waitFor(500);
  assert.equal(getJobsCount(), 70);
  const searchQuery = 'frontend';
  await fillIn('.search-box', searchQuery);
  await keyEvent('.search-box', 'keyup', 40);
  await waitFor(500);
  assert.equal(getJobsCount(), 35);
});
