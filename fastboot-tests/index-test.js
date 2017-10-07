'use strict';

const expect = require('chai').expect;

describe('index', function() {

  it('renders', function() {
    return this.visit('/')
      .then(function(res) {
        let $ = res.jQuery;
        let response = res.response;

        expect(response.statusCode).to.equal(200);
        expect($('body').length).to.equal(1);
      });
  });

  it('has a title tag', function() {
    return this.visit('/')
      .then(function(res) {
        let $ = res.jQuery;
        let response = res.response;

        expect($('title').text()).to.equal("Remote development and design jobs | FrontHAT");
      });
  });

  it('has meta tags', function() {
    return this.visit('/')
      .then(function(res) {
        let $ = res.jQuery;
        let response = res.response;

        const metaName = (name) => {
          return `meta[name="${name}"]`
        };

        const description = "Curated collection of 100% remote development and design jobs.";
        expect($(metaName('description')).attr('content')).to.equal(description);
        expect($(metaName('og:description')).attr('content')).to.equal(description);
        expect($(metaName('twitter:description')).attr('content')).to.equal(description);
        expect($(metaName('og:url')).attr('content')).to.equal('https://fronthat.com');
        expect($(metaName('og:site_name')).attr('content')).to.equal('FrontHAT');
        expect($(metaName('twitter:site')).attr('content')).to.equal('@thefronthat');
        expect($(metaName('twitter:card')).attr('content')).to.equal('summary');
        expect($(metaName('og:image')).attr('content')).to.equal('https://fronthat.com/assets/images/icons/touch-icon-256x256.png');
        expect($(metaName('twitter:image')).attr('content')).to.equal('https://fronthat.com/assets/images/icons/touch-icon-256x256.png');
      });
  });

});
