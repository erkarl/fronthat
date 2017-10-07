import { test } from 'qunit';
import moduleForAcceptance from 'fronthat/tests/helpers/module-for-acceptance';
import testSelector from 'ember-test-selectors';

moduleForAcceptance('Acceptance | post a job');

const fillInValidForm = async () => {
  await visit('/post-a-job');
  await click(testSelector('job-info-ok'));
  await fillIn('#email-input', 'russ@hanneman.com');
};

test('filling in post a job form', async function(assert) {
  await fillInValidForm();
  const API_DELAY = 400;
  server.timing = API_DELAY;
  await click(testSelector('post-a-job-button-idle'));
  await waitFor(API_DELAY);
  assert.equal(currentURL(), '/post-a-job/success', 'It redirect to success route');
});

test('filling in post a job form fails', async function(assert) {
  server.post('/jobs', () => {
    return {};
  }, 500);
  await visit('/post-a-job');
  await click(testSelector('job-info-ok'));
  await click(testSelector('post-a-job-button-idle'));
  assert.equal(currentURL(), '/post-a-job', 'It stays on the same route upon failure');
  await waitFor(10);
  const generalErrors = await find(testSelector('posting-errors'));
  assert.equal(generalErrors.length, 1, 'It has a general server error');
});
