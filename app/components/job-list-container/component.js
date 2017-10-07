import { reads } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
import { connect } from 'ember-redux';
import hbs from 'htmlbars-inline-precompile';

const stateToComputed = (state) => {
  return {
    jobs: state.jobs.all,
    fetching: state.jobs.fetching,
  };
};

const dispatchToActions = () => {
  return {};
};

const JobListComponent = Component.extend({
  fastboot: service(),
  isFastBoot: reads('fastboot.isFastBoot'),
  redux: service(),

  layout: hbs`
    {{yield jobs fetching}}
  `

});

export default connect(stateToComputed, dispatchToActions)(JobListComponent);
