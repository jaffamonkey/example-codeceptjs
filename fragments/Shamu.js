'use strict'

let I

module.exports = {

  _init () {
    I = actor()
  },

  // Element getters
  shamuWidgetToggle: {css: '#sfe-widget-toggle'},
  shamuAttentionGrabberImage: {css: '#sfe-attention-grabber-image'},

  // Expectations
  hasAttentionGrabberImage () {
    I.waitForVisible(this.shamuAttentionGrabberImage)
    I.seeElement(this.shamuAttentionGrabberImage)
  },

  hasShamuWidget () {
    I.waitForVisible(this.shamuWidgetToggle)
    I.seeElement(this.shamuWidgetToggle)
  }
}
