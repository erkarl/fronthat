import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('job', { path: '/jobs/:day/:month/:year/:slug' });
  this.route('frontend');
  this.route('backend');
  this.route('full-stack');
  this.route('design');
  this.route('ios-and-android');
  this.route('other');
  this.route('loading');
  this.route('about');
  this.route('not-found');
  this.route('post-a-job');
  this.route('post-a-job-success', { path: '/post-a-job/success' });
  this.route('not-found', { path: '/*path' });
});

export default Router;
