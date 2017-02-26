'use strict';

import angular from 'angular';
import ngMessages from 'angular-messages';
import AppComponent from './components/app.component';
import StageComponent from './components/stage.component';
import QuestionsListComponent from './components/questions/questions-list.component';
import ApiService from './services/api.service';
import StateService from './services/state.service';
import QuestionDirective from './directives/question.directive';
import CustomInputDirective from './directives/custom-input/custom-input.directive';
import PhoneDirective from './directives/validators/phone.directive';
import ZipDirective from './directives/validators/zip.directive';
import MoneyDirective from './directives/validators/money.directive';
import RangeFilter from './filters/range.filter';
import './index.scss';

angular.module('rocketSurvey', [ngMessages])
  .component('app', AppComponent)
  .component('stage', StageComponent)
  .component('questionsList', QuestionsListComponent)
  .factory('ApiService', ApiService)
  .factory('StateService', StateService)
  .directive('question', QuestionDirective)
  .directive('customInput', CustomInputDirective)
  .directive('phone', PhoneDirective)
  .directive('zip', ZipDirective)
  .directive('money', MoneyDirective)
  .filter('range', RangeFilter);
