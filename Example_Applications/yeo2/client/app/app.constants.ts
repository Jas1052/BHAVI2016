'use strict';
const angular = require('angular');

export default angular.module('yeo2App.constants', [])
  .constant('appConfig', require('../../server/config/environment/shared'))
  .name;
