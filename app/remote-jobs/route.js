import Ember from 'ember';
import { capitalizeFirstLetter } from 'fronthat/utils/string-manipulation';

export default Ember.Route.extend({
  model(params) {
    if (params && params.q && params.query && params.q === params.query) {
      return params.query;
    }
    if (params.q) {
      this.transitionTo('remote-jobs', params.q, { queryParams: { q: 'null' }});
    }
    if (!params.query) {
      this.transitionTo('index');
    }
    return params.query;
  },
  setupController(controller, model) {
    this._super(controller, model);
    controller.setSearch(model);
  },
  actions: {
    filterBySearch(searchQuery) {
      if (!searchQuery) {
        this.transitionTo('index');
      } else {
        this.transitionTo('remote-jobs', searchQuery
          .replace(/\s+/g, '-').toLowerCase()
        );
      }
    }
  },
  afterModel: function(model) {
    this.setHeadTags(model);
  },
  setHeadTags: function(model) {
    const title = `${capitalizeFirstLetter(model)} Remote Jobs`;
    const description = `Curated collection of ${title}. Last updated 1 day ago.`;
    var headTags = [
      {
        type: 'meta',
        tagId: 'meta-og-title',
        attrs: {
          name: 'og:title',
          content: title,
        }
      },
      {
        type: 'meta',
        tagId: 'meta-twitter-title',
        attrs: {
          name: 'twitter:title',
          content: title,
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
