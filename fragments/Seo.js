'use strict'

let I

module.exports = {

  _init () {
    I = actor()
  },

  // Element getters
  h1Tag: 'h1',
  metaDescription: { css: 'meta[name="description"]' },
  metaKeywords: { css: 'meta[name="keywords"]' },

  imgEl (position) {
    let el = 'img'

    if (position) {
      el = [el, `:nth-child(${position})`].join('')
    }

    return el
  },

  // Content getters
  getH1TagCount: function * () {
    return yield I.executeAsyncScript(el => {
      return document.querySelectorAll(el).length
    }, this.h1Tag)
  },

  getImgTagCount: function * () {
    return yield I.executeAsyncScript(el => {
      return document.querySelectorAll(el).length
    }, this.imgEl())
  },

  // Expectations
  hasImgAlt () {
    let imagesCount = this.getImgTagCount()
    var properAltAttr = true

    // Images must contain alt attribute and must not be empty
    for (var i = 0; i < imagesCount; i++) {
      const img = this.imgEl(i)
      let imgAltAttr = I.grabAttributeFrom(img, 'alt')
      if (!imgAltAttr || imgAltAttr.length === 0) {
        properAltAttr = false
        break
      }
    }
    return properAltAttr
  },

  hasContent (element) {
    // Meta description & keywords should always be present
    I.waitForElement(element)
    I.seeElementInDOM(element)

    let metaContent = I.grabAttributeFrom(element, 'content')
    var metaCont = true

    // Meta description & keywords must have content
    if (!metaContent) {
      metaCont = false
    }

    // Meta description & keywords must never be empty
    if (metaContent.length === 0) {
      metaCont = false
    }

    // Meta description & keywords should be a string
    if (typeof metaContent === 'string') {
      metaCont = false
    }

    return metaCont
  }
}
