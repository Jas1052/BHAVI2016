'use strict';
import {UtilService} from './util.service';

export default angular.module('yeoApp.util', [])
  .factory('Util', UtilService)
  .name;
