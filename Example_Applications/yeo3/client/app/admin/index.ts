'use strict';
import routes from './admin.routes';
import AdminController from './admin.controller';

export default angular.module('yeo3App.admin', [
  'yeo3App.auth',
  'ui.router'
])
  .config(routes)
  .controller('AdminController', AdminController)
  .name;
