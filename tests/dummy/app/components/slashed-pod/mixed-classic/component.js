import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout,
  actions: {
    componentInfo() {
      console.log('slashed-pod/mixed-classic'); // eslint-disable-line
    }
  }
});
