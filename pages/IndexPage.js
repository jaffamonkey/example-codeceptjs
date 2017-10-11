'use strict'

let I

module.exports = {

  _init () {
    I = actor()
  },

  // Element getters
  header: {
    logo: { css: 'div[class="logo"]' },
    desktopMenu: { id: 'desktop-menu' },
    berandaMenu: { css: 'ul#desktop-menu li a[href="#intro"]' },
    fiturMenu: { css: 'ul#desktop-menu li a[href="#0"]' },
    pricingMenu: { css: 'ul#desktop-menu li a[href="/pricing"]' },
    caraKerjaMenu: { css: 'ul#desktop-menu li a[href="#caraKerja1"]' },
    ceritaSuksesMenu: { css: 'ul#desktop-menu li a[href="#customer1"]' },
    freeTrialButton: { css: 'ul#desktop-menu li a[href="https://dashboard.prismapp.io/#/register"]' }
  },
  body: {
    intro: {
      intro: { css: 'section#intro' },
      title: { css: 'section#intro h1' },
      description: { css: 'section#intro p' },
      chatButton: { css: 'section#intro a[class*="btn-chat"]' },
      image: { xpath: '//section[@id="intro"]//div[img[@src="/static/assets/images/main-jualan-pakai-chat.svg"]]' }
    },
    caraKerja1: {
      caraKerja1: { css: 'section#caraKerja1' },
      title: { css: 'section#caraKerja1 h2' },
      description: { css: 'section#caraKerja1 p' },
      linkStartVideo: { css: 'section#caraKerja1 a[class*="link start-video-link"]' },
      video: { css: 'section#caraKerja1 a#video-index-cara-buat-invoice' }
    },
    caraKerja2: {
      caraKerja2: { css: 'section#caraKerja2' },
      title: { css: 'section#caraKerja2 h2' },
      description: { css: 'section#caraKerja2 p' },
      image: { css: 'section#caraKerja2 img[alt="Kelola berbagai aplikasi chat dalam satu tempat"]' }
    }
  },
  footer: {
    logo: { css: 'footer a img[class="logo"]' },
    product: { xpath: '//h5[text()="PRODUCT"]' },
    features: { css: 'footer ul li a[href="/features"]' },
    pricing: { css: 'footer ul li a[href="/pricing"]' },
    tutorial: { css: 'footer ul li a[href="https://www.youtube.com/watch?v=lGmHT6dTofo&list=PL4wkbN5S0_WYkFs0_rGIGdtDeiGwjgw05"]' },
    developers: { xpath: '//h5[text()="DEVELOPERS"]' },
    docs: { css: 'footer ul li a[href="https://docs.prismapp.io"]' },
    company: { xpath: '//h5[text()="COMPANY"]' },
    blog: { css: 'footer ul li a[href="/blog"]' },
    careers: { css: 'footer ul li a[href="/career"]' },
    legal: { xpath: '//h5[text()="LEGAL"]' },
    termOfService: { css: 'footer ul li a[href="/terms-of-service"]' },
    privacyPolicy: { css: 'footer ul li a[href="/privacy-policy"]' },
    socialMedia: {
      facebook: { css: 'footer i[class="fa fa-facebook"]' },
      instagram: { css: 'footer i[class="fa fa-instagram"]' },
      youtube: { css: 'footer i[class="fa fa-youtube"]' },
      linkedin: { css: 'footer i[class="fa fa-linkedin"]' }
    },
    copyright: { css: 'div[class="col-md-10 col-md-offset-1 text-center copyright"] p' }
  },

  // Content getters
  getElementCount: function * (elm) {
    return yield I.executeAsyncScript(el => {
      return document.querySelectorAll(el).length
    }, elm)
  }
}
