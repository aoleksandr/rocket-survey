'use strict';

import angular from 'angular';
import AppComponent from './components/app.component';
import ApiService from './api.service';
import './index.scss';

angular.module('rocketSurvey', [])
  .component('app', AppComponent)
  .factory('ApiService', ApiService);
