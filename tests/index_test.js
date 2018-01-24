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

Scenario('Header Menu Should Be Displayed Properly', (I, indexPage) => {
  I.amOnPage('/')
  I.waitForVisible(indexPage.header.berandaMenu)

  I.seeElement(indexPage.header.berandaMenu)
  I.seeElement(indexPage.header.fiturMenu)
  I.seeElement(indexPage.header.pricingMenu)
  I.seeElement(indexPage.header.caraKerjaMenu)
  I.seeElement(indexPage.header.ceritaSuksesMenu)
  I.seeElement(indexPage.header.freeTrialButton)
})

Scenario('Section Intro Should Be Displayed Properly', function * (I, indexPage) {
  I.amOnPage('/')
  I.waitForVisible(indexPage.body.intro.intro)

  const descCount = yield * indexPage.getElementCount(indexPage.body.intro.description.css)
  assert.equal(descCount, 1)

  I.seeElement(indexPage.body.intro.intro)
  I.seeElement(indexPage.body.intro.title)
  I.seeElement(indexPage.body.intro.description)
  I.seeElement(indexPage.body.intro.chatButton)
  I.seeElement(indexPage.body.intro.image)
})

Scenario('Section Cara Kerja 1 Should Be Displayed Properly', function * (I, indexPage) {
  I.amOnPage('/')
  I.waitForVisible(indexPage.body.caraKerja1.caraKerja1)

  const descCount = yield * indexPage.getElementCount(indexPage.body.caraKerja1.description.css)
  assert.equal(descCount, 4)

  I.seeElement(indexPage.body.caraKerja1.caraKerja1)
  I.seeElement(indexPage.body.caraKerja1.title)
  I.seeElement(indexPage.body.caraKerja1.description)
  I.seeElement(indexPage.body.caraKerja1.linkStartVideo)
  I.seeElement(indexPage.body.caraKerja1.video)
})

Scenario('Section Cara Kerja 2 Should Be Displayed Properly', function * (I, indexPage) {
  I.amOnPage('/')
  I.waitForVisible(indexPage.body.caraKerja2.caraKerja2)

  const descCount = yield * indexPage.getElementCount(indexPage.body.caraKerja2.description.css)
  assert.equal(descCount, 2)

  I.seeElement(indexPage.body.caraKerja2.caraKerja2)
  I.seeElement(indexPage.body.caraKerja2.title)
  I.seeElement(indexPage.body.caraKerja2.description)
  I.seeElement(indexPage.body.caraKerja2.image)
})

Scenario('Footer Should Be Displayed Properly', (I, indexPage) => {
  I.amOnPage('/')
  I.waitForVisible(indexPage.footer.logo)

  I.seeElement(indexPage.footer.logo)
  I.seeElement(indexPage.footer.copyright)
})

Scenario('Footer Menu Should Be Displayed Properly', (I, indexPage) => {
  I.amOnPage('/')
  I.waitForVisible(indexPage.footer.product)

  I.seeElement(indexPage.footer.product)
  I.seeElement(indexPage.footer.features)
  I.seeElement(indexPage.footer.pricing)
  I.seeElement(indexPage.footer.tutorial)
  I.seeElement(indexPage.footer.developers)
  I.seeElement(indexPage.footer.docs)
  I.seeElement(indexPage.footer.company)
  I.seeElement(indexPage.footer.blog)
  I.seeElement(indexPage.footer.careers)
  I.seeElement(indexPage.footer.legal)
  I.seeElement(indexPage.footer.termOfService)
  I.seeElement(indexPage.footer.privacyPolicy)
  I.seeElement(indexPage.footer.socialMedia.facebook)
  I.seeElement(indexPage.footer.socialMedia.instagram)
  I.seeElement(indexPage.footer.socialMedia.youtube)
  I.seeElement(indexPage.footer.socialMedia.linkedin)
})
