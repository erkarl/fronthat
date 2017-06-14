import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

export default Ember.Component.extend({

  actions: {
    updateSearchQuery(searchQuery) {
      this.get('searchChanged')(searchQuery);
    }
  },

  layout: hbs`
    <form method="GET" action="">
      <div class="search-area">
          {{input
            value=searchQuery
            name="q"
            key-up='updateSearchQuery'
            class="search-box"
            placeholder="Search: 'JavaScript', 'Design', 'React'..."
          }}
      </div>
    </form>
  `
});
