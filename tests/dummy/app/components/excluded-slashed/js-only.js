import Component from '@ember/component';
export default Component.extend({
  tagName: 'div',
  classNames: ['excluded-slashed__js-only'],
  didRender() {
    this.element.innerHTML = '<button>excluded-slashed JS-only component</button>';
  },
  click() {
    console.log('excluded-slashed/js-only'); // eslint-disable-line
  }
});
