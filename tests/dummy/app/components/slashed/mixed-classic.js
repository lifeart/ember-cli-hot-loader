import Component from '@ember/component';
import layout from '../../templates/components/slashed/mixed-classic';

export default Component.extend({
  layout,
  actions: {
    componentInfo() {
      console.log('slashed/mixed-classic'); // eslint-disable-line
    }
  }
});
