import Component from '@ember/component';
import ScrollToTop from '../../mixins/scroll-to-top';

export default Component.extend(ScrollToTop, {
  classNames: ['about-page'],
  tagName: 'about'
});
