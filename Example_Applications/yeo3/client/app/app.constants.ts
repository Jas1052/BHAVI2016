'use strict';
const angular = require('angular');

export default angular.module('yeo3App.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
