import Ember from 'ember';
import hbs from 'htmlbars-inline-precompile';

export default Ember.Component.extend({
  layout: hbs`
    <form method="GET" action="">
      <div class="search-area">
          {{input
            value=searchQuery
            name="q"
            class="search-box"
            placeholder="Search..."
          }}
      </div>
    </form>
  `
});
