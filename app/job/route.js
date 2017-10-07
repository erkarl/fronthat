import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import { Promise } from 'rsvp';
import fetch from 'fetch';
import ENV from 'fronthat/config/environment';

export default Route.extend({
  redux: service(),
  fastboot: service(),

  model(params) {
    const jobs = this.get('redux.store').getState().jobs.all;
    let fullSlug = params.day + "/" + params.month + "/" + params.year + "/" + params.slug;
    const job = jobs
      .filter((job) => {
        return job.attributes.slug === fullSlug;
      });
    if (job.length > 0) {
      return job[0];
    } else {
      return new Promise((resolve, reject) => {
        const jobDetailURL = `${ENV.apiURL}/jobs?slug=${fullSlug}`;
        const detailsFetched = (response) => {
          if (response.status === 200) {
            return response.json();
          }
          return reject();
        };
        const detailsJson = (job) => {
          if (job.data.length > 0) {
            try {
              const dispatch = this.get('redux.store.dispatch');
              dispatch({
                type: 'DESERIALIZE_JOBS',
                response: job.data,
              });
              return resolve(job.data[0]);
            } catch(e) {
              return reject();
            }
          }
          return reject();
        };
        return fetch(jobDetailURL)
          .then(detailsFetched)
          .then(detailsJson)
      }).catch(() => {
        if (this.get('fastboot.isFastBoot')) {
          this.set('fastboot.response.statusCode', 404);
        }
        return {notFound: true, slug: fullSlug};
      });
    }
  },

  afterModel: function(model) {
    if (!model.notFound) {
      this.setHeadTags(model);
    }
  },

  setHeadTags: function(model) {
    var headTags = [
      {
        type: 'meta',
        tagId: 'meta-twitter-title',
        attrs: {
          name: 'twitter:title',
          content: model.attributes.title,
        }
      },
      {
        type: 'meta',
        tagId: 'meta-og-title',
        attrs: {
          name: 'og:title',
          content: model.attributes.title,
        }
      },
      {
        type: 'meta',
        tagId: 'description',
        attrs: {
          name: 'description',
          content: model.attributes['seo-description']
        }
      },
      {
        type: 'meta',
        tagId: 'meta-og-description',
        attrs: {
          name: 'og:description',
          content: model.attributes['seo-description']
        }
      },
      {
        type: 'meta',
        tagId: 'meta-twitter-description',
        attrs: {
          name: 'twitter:description',
          content: model.attributes['seo-description']
        }
      },
      {
        type: 'meta',
        tagId: 'meta-og-url',
        attrs: {
          name: 'og:url',
          content: 'https://fronthat.com/jobs/' + model.attributes.slug
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
  }
});
