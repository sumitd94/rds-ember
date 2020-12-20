import EmberRouter from '@ember/routing/router';
import config from 'ember-learning/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('about');
  this.route('user-registration', {path: '/register'});
});
