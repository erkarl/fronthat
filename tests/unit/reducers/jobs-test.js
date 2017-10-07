import { assign } from '@ember/polyfills';
import jobsReducer from 'fronthat/reducers/jobs';
import { module, test } from 'qunit';
import jobs from 'fronthat/mirage/json/jobs';
import deepFreeze from 'fronthat/tests/helpers/deep-freeze';

module('Unit | Reducers | jobs');

const initialState = {
  all: [],
  fetching: false,
};

test('the initial state is empty', function(assert) {
  const result = jobsReducer(undefined, {});
  assert.deepEqual(result, initialState);
});

test('deserialize jobs actions parses fetched API response', function(assert) {
  const result = jobsReducer(initialState, {
    type: 'DESERIALIZE_JOBS',
    response: [jobs.job1, jobs.job2, jobs.job3]
  });
  const expected = assign({}, initialState, {all: [jobs.job1, jobs.job2, jobs.job3]});
  assert.deepEqual(result, expected);
});

test('fetching jobs action sets a true flag', function(assert) {
  const result = jobsReducer(initialState, {
    type: 'FETCHING_JOBS',
  });
  const expected = assign({}, initialState, {fetching: true});
  assert.deepEqual(result, expected);
});

test('fetching complete action sets a false flag', function(assert) {
  const previous = jobsReducer(initialState, {
    type: 'FETCHING_JOBS',
  });

  deepFreeze(previous);

  const result = jobsReducer(previous, {
    type: 'FETCHING_COMPLETE',
  });

  const expected = assign({}, previous, {fetching: false});
  assert.deepEqual(result, expected);
});

test('fetching error action sets an error flag', function(assert) {
  const previous = jobsReducer(initialState, {
    type: 'FETCHING_JOBS',
  });

  deepFreeze(previous);

  const result = jobsReducer(previous, {
    type: 'FETCHING_ERROR',
  });

  const expected = assign({}, previous, {fetching: 'error'});
  assert.deepEqual(result, expected);
});
