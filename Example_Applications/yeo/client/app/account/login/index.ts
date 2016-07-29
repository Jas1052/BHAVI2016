'use strict';
import LoginController from './login.controller';

export default angular.module('yeoApp.login', [])
  .controller('LoginController', LoginController)
  .name;
