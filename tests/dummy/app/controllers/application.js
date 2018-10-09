import Ember from 'ember';
import $ from 'jquery';
export default Ember.Controller.extend({
  actions: {
    routeAction () {
      console.log('Action handled by the application controller'); // eslint-disable-line
    },
    allButtonsClick() {
      $('[data-ember-action]').click();
    }
  }
});
