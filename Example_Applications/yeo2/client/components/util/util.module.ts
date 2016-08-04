'use strict';
import {UtilService} from './util.service';

export default angular.module('yeo2App.util', [])
  .factory('Util', UtilService)
  .name;
