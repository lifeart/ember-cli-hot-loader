import Service from '@ember/service';
import Evented from '@ember/object/evented';
import config from 'ember-get-config';

/**
  The `willLiveReload` event is fired when we have any JS or HBS changes
  detected by Ember CLI. This gives you an opportunity to cancel the
  regular liveReload in case we need .

  The event fires 10ms *after* liveReload, if you want to prevent
  liveReloading, you need to handle the cancelable event `willLiveReload`.

  ```javascript
  Ember.Something.extend({
    hotReload: service(),
    init () {
      this.get('hotReload').on('willLiveReload', (event)=>{
        if (event.modulePath.match('foo')) {
          event.cancel = true;
        }
      })
    }
  });
  ```

  @event willLiveReload
  @param {Object} [event] A cancelable event with the modulePath
    modulePath: {String}
    cancel: {Boolean} indicates if we should cancel liveReloading
  @public
*/

/**
  The `willHotReload` event is fired when we have any JS or HBS changes
  detected by Ember CLI. This gives you an opportunity to handle
  the event.

  The event fires 10ms *after* liveReload, if you want to prevent
  liveReloading, you need to handle the cancelable event `willLiveReload`.

  ```javascript
  Component.extend({
    hotReload: service(),
    init () {
      this.get('hotReload').on('willHotReload', (modulePath)=>{
        if (modulePath.match('foo')) {
          window.alert('bar');
        }
      })
    },

    willDestroy () {
      this.get('hotReload').off('willHotReload');
    }
  });
  ```

  @event willHotReload
  @param {String} modulePath
  @public
*/

export default Service.extend(Evented, {
  tagNameForComponent(baseComponentName) {
    return this._defaultTagNameForComponent(baseComponentName);
  },
  _htmlTagNameForComponentByName(baseComponentName) {
    return baseComponentName.replace(/\//gi,'--');
  },
  _defaultTagNameForComponent(baseComponentName) {
    const configuration = config['ember-cli-hot-loader'];
    const tagless = configuration && configuration['tagless'];
    const namedTags = configuration && configuration['named-tags'];
    if (tagless) {
      return '';
    }
    if (namedTags) {
      return this._htmlTagNameForComponentByName(baseComponentName);
    } else {
      return 'div';
    }
  }
});
