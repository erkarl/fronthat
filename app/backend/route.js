import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    if (params.q) {
      this.transitionTo('remote-jobs', params.q, { queryParams: { q: 'null' }});
    }
  },
  actions: {
    filterBySearch(searchQuery) {
      this.transitionTo('remote-jobs', searchQuery);
    }
  },
  afterModel: function(model) {
    this.setHeadTags(model);
  },
  setHeadTags: function() {
    const description = 'Curated collection of 100% remote frontend development and design jobs.';
    var headTags = [
      {
        type: 'meta',
        tagId: 'meta-og-title',
        attrs: {
          name: 'og:title',
          content: 'Remote Frontend Jobs',
        }
      },
      {
        type: 'meta',
        tagId: 'meta-twitter-title',
        attrs: {
          name: 'twitter:title',
          content: 'Remote Frontend Jobs',
        }
      },
      {
        type: 'meta',
        tagId: 'description',
        attrs: {
          name: 'description',
          content: description
        }
      },
      {
        type: 'meta',
        tagId: 'meta-og-description',
        attrs: {
          name: 'og:description',
          content: description
        }
      },
      {
        type: 'meta',
        tagId: 'meta-twitter-description',
        attrs: {
          name: 'twitter:description',
          content: description
        }
      },
      {
        type: 'meta',
        tagId: 'meta-og-url',
        attrs: {
          name: 'og:url',
          content: 'https://fronthat.com'
        }
      },
      {
        type: 'meta',
        tagId: 'meta-og-siteName',
        attrs: {
          name: 'og:site_name',
          content: 'FrontHAT'
        }
      },
      {
        type: 'meta',
        tagId: 'meta-twitter-site',
        attrs: {
          name: 'twitter:site',
          content: '@thefronthat'
        }
      },
      {
        type: 'meta',
        tagId: 'meta-twitter-card',
        attrs: {
          name: 'twitter:card',
          content: 'summary',
        }
      },
      {
        type: 'meta',
        tagId: 'meta-og-image',
        attrs: {
          name: 'og:image',
          content: 'https://fronthat.com/assets/images/icons/touch-icon-256x256.png',
        }
      },
      {
        type: 'meta',
        tagId: 'meta-twitter-image',
        attrs: {
          name: 'twitter:image',
          content: 'https://fronthat.com/assets/images/icons/touch-icon-256x256.png',
        }
      },
    ];

    this.set('headTags', headTags);
  },
});
