import Component from '@ember/component';

export default Component.extend({
  tagName: 'div',
  classNames: ['excluded-slashed-pod__js-only'],
  click() {
    console.log(this.get('classNames')[0]); // eslint-disable-line
  },
  didRender() {
    this.element.innerHTML = '<button>excluded- JS-only component</button>';
  }
});
