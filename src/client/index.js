'use strict';

import angular from 'angular';
import AppComponent from './components/app.component';
import StageComponent from './components/stage.component';
import QuestionDirective from './components/questions/question.directive';
import QuestionsListComponent from './components/questions/questions-list.component';
import NameInputComponent from './components/inputs/name-input.component';
import EmailInputComponent from './components/inputs/email-input.component';
import PhoneInputComponent from './components/inputs/phone-input.component';
import ApiService from './api.service';
import './index.scss';

angular.module('rocketSurvey', [])
  .component('app', AppComponent)
  .component('stage', StageComponent)
  .directive('question', QuestionDirective)
  .component('questionsList', QuestionsListComponent)
  .component('nameInput', NameInputComponent)
  .component('emailInput', EmailInputComponent)
  .component('phoneInput', PhoneInputComponent)
  .factory('ApiService', ApiService);
