import { registerAsyncHelper } from '@ember/test';
import Ember from 'ember';

export default registerAsyncHelper(
  'waitFor', (app, delay) => {
    Ember.Test.promise((resolve) => {
      setTimeout(function() {
        resolve();
      }, delay);
    });
});
