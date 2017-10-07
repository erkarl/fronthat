import { assign } from '@ember/polyfills';

const initialState = {
  all: [],
  fetching: false,
};

const jobs = ((state, action) => {
  if (action.type === 'DESERIALIZE_JOBS') {
    return assign({}, state, {all: action.response});
  }

  if (action.type === 'FETCHING_JOBS') {
    return assign({}, state, {fetching: true});
  }

  if (action.type === 'FETCHING_COMPLETE') {
    return assign({}, state, {fetching: false});
  }

  if (action.type === 'FETCHING_ERROR') {
    return assign({}, state, {fetching: 'error'});
  }

  return state || initialState;
});

export default {
  jobs
}
