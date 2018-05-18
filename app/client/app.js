import angular from 'angular';

import demoController from './demo-controller.js';
import demoDirective from './demo-directive.js';

angular.module('DemoApp', [])
    .controller('demoController', demoController)
    .directive('demoDirective', demoDirective);
