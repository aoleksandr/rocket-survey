'use strict';

import angular from 'angular';
import ngMessages from 'angular-messages';
import AppComponent from './components/app.component';
import StageComponent from './components/stage.component';
import QuestionDirective from './directives/question.directive';
import QuestionsListComponent from './components/questions/questions-list.component';
import NameInputComponent from './components/inputs/name-input.component';
import EmailInputComponent from './components/inputs/email-input.component';
import PhoneInputComponent from './components/inputs/phone-input.component';
import ApiService from './services/api.service';
import StateService from './services/state.service';
import PhoneDirective from './directives/validators/phone.directive';
import './index.scss';

angular.module('rocketSurvey', [ngMessages])
  .component('app', AppComponent)
  .component('stage', StageComponent)
  .directive('question', QuestionDirective)
  .component('questionsList', QuestionsListComponent)
  .component('nameInput', NameInputComponent)
  .component('emailInput', EmailInputComponent)
  .component('phoneInput', PhoneInputComponent)
  .factory('ApiService', ApiService)
  .factory('StateService', StateService)
  .directive('phone', PhoneDirective);
