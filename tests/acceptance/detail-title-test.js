import { test } from 'qunit';
import moduleForAcceptance from 'fronthat/tests/helpers/module-for-acceptance';
import _ from 'lodash';

moduleForAcceptance('Acceptance | detail title');

const openFirstJobFromRoute = async (url) => {
  await visit(url);
  await waitFor(500);
  const firstJob = find('a', '.job-item').first();
  await click(firstJob);
};

const assertDetailViewSimilarLinksToCategoryIndex = async (categoryListRoute, assert) => {
  await openFirstJobFromRoute(categoryListRoute);
  const viewSimilarLink = find('.view-similar-link')
    .attr('href');
  assert.equal(_.includes(viewSimilarLink, categoryListRoute), true);
}

test('detail routes have title and company in the title', async function(assert) {
  await openFirstJobFromRoute('/');
  assert.equal(_.includes(currentURL(), '/jobs'), true);

  const actualTitle = document.title;
  const displayTitle = find('h1', '.job-details-main-toolbar').text().trim();
  const displayCompany = find('.job-company').text().trim();

  assert.equal(_.includes(actualTitle, displayTitle), true);
  assert.equal(_.includes(actualTitle, displayCompany), true);
});

test('frontend category detail page links back to frontend category list', async function(assert) {
  await assertDetailViewSimilarLinksToCategoryIndex('/frontend', assert);
});

test('backend category detail page links back to backend category list', async function(assert) {
  await assertDetailViewSimilarLinksToCategoryIndex('/backend', assert);
});

test('full-stack category detail page links back to full-stack category list', async function(assert) {
  await assertDetailViewSimilarLinksToCategoryIndex('/full-stack', assert);
});

test('design category detail page links back to design category list', async function(assert) {
  await assertDetailViewSimilarLinksToCategoryIndex('/design', assert);
});
