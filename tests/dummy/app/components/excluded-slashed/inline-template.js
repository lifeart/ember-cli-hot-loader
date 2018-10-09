import Component from '@ember/component';
import hbs from 'htmlbars-inline-precompile';

export default Component.extend({
  layout:  hbs`
    <p>Inline slashed component rendering test <span>{{myName}}</span> <button {{action 'sayHello'}}>{{myName}}</button></p>
  `,
  myName: 'excluded-slashed/inline-template',
  actions: {
    sayHello() {
      console.log(this.get('myName')); // eslint-disable-line
    }
  }
});