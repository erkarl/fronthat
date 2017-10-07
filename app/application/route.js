import Route from '@ember/routing/route';
import JobListActions from '../mixins/job-list-actions';

export default Route.extend(JobListActions, {
  model() {
    if (typeof FastBoot !== 'undefined') {
      return this.fastbootModel();
    }
    const jobsFetched = (jobs) => {
      this.dispatchDerializeJobs(jobs);
      this.dispatchFetchComplete();
    };
    const fetchError = () => {
      this.dispatchFetchError();
    };
    this.dispatchFetchingJobs();
    this.fetchJobsList().then(jobsFetched, fetchError);
  },

  fastbootModel() {
    return this.fetchJobsList()
      .then(this.dispatchDerializeJobs.bind(this));
  },

});
