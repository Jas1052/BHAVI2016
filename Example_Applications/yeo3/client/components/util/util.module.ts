'use strict';
import {UtilService} from './util.service';

export default angular.module('yeo3App.util', [])
  .factory('Util', UtilService)
  .name;
