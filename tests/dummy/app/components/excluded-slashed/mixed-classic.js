import Component from '@ember/component';
import layout from '../../templates/components/excluded-slashed/mixed-classic';

export default Component.extend({
  layout,
  actions: {
    componentInfo() {
      console.log('excluded-slashed/mixed-classic'); // eslint-disable-line
    }
  }
});
