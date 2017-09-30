import Ember from 'ember';
import ScrollToTop from '../../mixins/scroll-to-top';
import hbs from 'htmlbars-inline-precompile';

export default Ember.Component.extend(ScrollToTop, {
  classNames: ['job-details', 'fadeIn'],
  tagName: 'job-posting',
  itemscope: '',
  itemtype: 'http://schema.org/JobPosting',
  attributeBindings: ['itemscope', 'itemtype'],

  layout: hbs`
    <div class="job-details-main-toolbar">
      <h1 itemprop="title">{{job.attributes.title}}</h1>
    </div>
    <div class="job-details-secondary-toolbar">
      <div class="job-company" itemprop="hiringOrganization" itemscope itemtype="http://schema.org/Organization">
        <h2 itemprop="name">{{job.attributes.company}}</h2>
      </div>
      <time class="job-date" itemprop="datePosted">{{job.attributes.prettydate}}</time>
    </div>
    <div class="job-details-content" itemprop="description">
      {{{job.attributes.description}}}
    </div>
    {{subscribe-area}}
    <div class="job-details-main-toolbar">
      {{job.attributes.category}}
      {{#link-to job.attributes.category class="nav-button view-similar-link"}}
        View Similar
      {{/link-to}}
      <a href={{job.attributes.url}} target="_blank" class="nav-button" itemprop="url">
        Apply
      </a>
    </div>
  `
});
