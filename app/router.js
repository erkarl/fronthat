import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('job', { path: '/jobs/:day/:month/:year/:slug' });
  this.route('frontend');
  this.route('loading');
  this.route('about');
  this.route('not-found');
  this.route('post-a-job');
  this.route('post-a-job-success', { path: '/post-a-job/success' });
  this.route('remote-jobs', { path: '/remote-jobs/:query' });
  this.route('not-found', { path: '/*path' });
});

export default Router;
