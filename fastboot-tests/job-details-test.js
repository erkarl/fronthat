'use strict';

const expect = require('chai').expect;

describe('job details route', function() {

  it('renders', function() {
    return this.visit('/jobs/07/09/2017/ui-mobile-app-design')
      .then(function(res) {
        let $ = res.jQuery;
        let response = res.response;

        // add your real tests here
        expect(response.statusCode).to.equal(200);
        expect($('body').length).to.equal(1);
      });
  });

  it('has a title tag', function() {
    return this.visit('/jobs/07/09/2017/ui-mobile-app-design')
      .then(function(res) {
        let $ = res.jQuery;
        let response = res.response;

        expect($('title').text()).to.equal("UI mobile app design  | tabasco games | FrontHAT");

      });
  });

  it('has meta tags', function() {
    return this.visit('/jobs/07/09/2017/ui-mobile-app-design/')
      .then(function(res) {
        let $ = res.jQuery;
        let response = res.response;

        const metaName = (name) => {
          return `meta[name="${name}"]`
        };

        const title = `UI mobile app design `;
        const description = `UI Mobile app design showcasing chat story app. Main screen:
showcase a list of stories similar to Netflix or Spotify (Top picks, best category, Best new, etc)`;
        expect($(metaName('og:title')).attr('content')).to.equal(title);
        expect($(metaName('twitter:title')).attr('content')).to.equal(title);
        expect($(metaName('description')).attr('content')).to.equal(description);
        expect($(metaName('og:description')).attr('content')).to.equal(description);
        expect($(metaName('twitter:description')).attr('content')).to.equal(description);
        expect($(metaName('og:url')).attr('content')).to.equal('https://fronthat.com/jobs/07/09/2017/ui-mobile-app-design');
        expect($(metaName('og:site_name')).attr('content')).to.equal('FrontHAT');
        expect($(metaName('twitter:site')).attr('content')).to.equal('@thefronthat');
        expect($(metaName('twitter:card')).attr('content')).to.equal('summary');
        expect($(metaName('og:image')).attr('content')).to.equal('https://fronthat.com/assets/images/icons/touch-icon-256x256.png');
        expect($(metaName('twitter:image')).attr('content')).to.equal('https://fronthat.com/assets/images/icons/touch-icon-256x256.png');
      });
  });

});
