const assert = require('assert')

Feature('Index Page')

Scenario('Shamu is visible', (I, shamu) => {
  I.amOnPage('/')
  I.waitForVisible(shamu.shamuWidgetToggle)

  shamu.hasShamuWidget()
  shamu.hasAttentionGrabberImage()
})

Scenario('Only Have 5 H1 Tag', function * (I, seo) {
  I.amOnPage('/')
  I.waitForVisible(seo.h1Tag)

  const h1Count = yield * seo.getH1TagCount()
  assert.equal(h1Count, 5)
})

Scenario('Images Alt Attributes Not Empty', (I, seo) => {
  I.amOnPage('/')
  I.waitForVisible(seo.imgEl())

  assert.ok(seo.hasImgAlt())
})

Scenario('Meta Description Should Not Be Empty', (I, seo) => {
  I.amOnPage('/')
  I.waitForElement(seo.metaDescription)

  assert.ok(seo.hasContent(seo.metaDescription))
})

Scenario('Meta Keywords Should Not Be Empty', (I, seo) => {
  I.amOnPage('/')
  I.waitForElement(seo.metaKeywords)

  assert.ok(seo.hasContent(seo.metaKeywords))
})

Scenario('Header Should Be Displayed Properly', (I, indexPage) => {
  I.amOnPage('/')
  I.waitForVisible(indexPage.header.logo)
  I.seeElement(indexPage.header.logo)
})

