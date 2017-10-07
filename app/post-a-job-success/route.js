import Route from '@ember/routing/route';

export default Route.extend({
  afterModel: function(model) {
    this.setHeadTags(model);
  },
  setHeadTags: function() {
    var headTags = [
      {
        type: 'meta',
        tagId: 'meta-noindex',
        attrs: {
          name: 'robots',
          content: 'noindex',
        }
      },
    ];

    this.set('headTags', headTags);
  },
});
