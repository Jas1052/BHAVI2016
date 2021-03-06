'use strict';

import xml2js = require('xml2js');
import xml2js from 'xml2js';
// @flow
interface User {
  name: string;
  email: string;
  password: string;
  jsonObject: string;
}

export default class SignupController {
  user: User = {
    name: '',
    email: '',
    password: '',
    jsonObject: ''
  };
  errors = {};
  submitted = false;
  Auth;
  $state;

  /*@ngInject*/
  constructor(Auth, $state) {
    this.Auth = Auth;
    this.$state = $state;
  }

  register(form) {
    var parseString = require('xml2js').parseString;
    this.submitted = true;
    if (form.$valid) {
      return this.Auth.createUser({
        name: this.user.name,
        email: this.user.email,
        password: this.user.password,
        jsonObject: this.user.jsonObject
      })
        .then(() => {
          // Account created, redirect to home
          this.$state.go('main');
        })
        .catch(err => {
          err = err.data;
          this.errors = {};
          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, (error, field) => {
            form[field].$setValidity('mongoose', false);
            this.errors[field] = error.message;
          });

        });
    }
  }

}

