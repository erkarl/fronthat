import { inject as service } from '@ember/service';
import Mixin from '@ember/object/mixin';
import { Promise } from 'rsvp';
import fetch from 'fetch';
import ENV from 'fronthat/config/environment';

export default Mixin.create({
  redux: service(),

  fetchJobsList() {
    return new Promise((resolve, reject) => {
      const jobsJson = (json) => {
        return resolve(json.data);
      };
      const jobsFetched = (response) => {
        if (response.status === 200) {
          return response.json();
        }
        return reject('failed to get a response');
      };
      fetch(`${ENV.apiURL}/jobs`)
        .then(jobsFetched, reject)
        .then(jobsJson, reject)
    });
  },

  dispatchDerializeJobs(jobs) {
    const dispatch = this.get('redux').store.dispatch;
    dispatch({
      type: 'DESERIALIZE_JOBS',
      response: jobs,
    });
  },

  dispatchFetchError() {
    const dispatch = this.get('redux').store.dispatch;
    dispatch({
      type: 'FETCHING_ERROR'
    });
  },

  dispatchFetchingJobs() {
    const dispatch = this.get('redux').store.dispatch;
    dispatch({
      type: 'FETCHING_JOBS'
    });
  },

  dispatchFetchComplete() {
    const dispatch = this.get('redux').store.dispatch;
    dispatch({
      type: 'FETCHING_COMPLETE'
    });
  }

});
