var firstApp = angular.module('firstApp', []);

firstApp.controller('firstController', function($scope){
    $scope.msg = 'hello world';
});

firstApp.controller('controller-150726', function($scope){
    $scope.counter = 1;
    $scope.add = function(count){
        $scope.counter += count;
    };
    $scope.subtract = function(count){
        $scope.counter -= count;
    }
});


firstApp.controller('controller-150726-2', function($scope){
    $scope.person = {
        name : 'qyb',
        age : 23
    };
    $scope.mark = "啊沙发发生发的发送方式";
});

firstApp.controller('controller-150726-3', function($scope, $parse){
    $scope.$watch('expr', function(newVal, oldVal, scope){
        if(newVal != oldVal){
            var parseFun = $parse(newVal);
            scope.value = parseFun(scope);
        }
        scope.newVal = newVal;
        scope.oldVal = oldVal;
    });
});

firstApp.controller('controller-150726-4', function($scope, $interpolate) {
    $scope.to = 'ari@fullssssssssack.io';
    $scope.emailBody = 'Hello {{ to }},\n\nMy name is Ari too!';
    // Set up a watch
    $scope.$watch('emailBody', function(body) {
        if (body) {
            var template = $interpolate(body);
            $scope.previewText =
                template({to: $scope.to});
        }
    });
    $scope.isUppercase = function(str){
        return str[0] == str[0].toUpperCase()
    }
});

angular.module('filter', []).filter('capitalize', function() {
    return function(input) {
        // input是我们传入的字符串
        if (input) {
            return input[0].toUpperCase() + input.slice(1);
        }
    };
});

firstApp.directive('ensureUnique', ['$http', function($http) {
        return {
            require: 'ngModel',
            link: function(scope, ele, attrs, c) {
                scope.$watch(attrs.ngModel, function() {
                    $http({
                        method: 'POST',
                        url: '/api/check/' + attrs.ensureUnique,
                        data: {'field': attrs.ensureUnique}
                    }).success(function(data, status, headers, cfg) {
                        c.$setValidity('unique', data.isUnique);
                    }).error(function(data, status, headers, cfg) {
                        c.$setValidity('unique', false);
                    });
                });
            }
        };
}]);

//其中字符串是这个指令的名字，指令名应该是驼峰命名风格的，函数应该返回一个对象。
firstApp.directive('myDirective', function() {
    return {
        restrict: 'EACM',
        replace: 'true',
        template: '<a target="_blank" href="http://google.com">Click me to go to Google</a>'
    };
});

firstApp.controller('controller-150730-1', function(){});
firstApp.controller('controller-150730-2', function(){});


firstApp.run(function($rootScope) {
    // 使用.run访问$rootScope
    $rootScope.rootProperty = 'root scope';
})
.controller('controller-150730-1', function($scope) {
    // 使用.controller访问`ng-controller`内部的属性
    // 在DOM忽略的$scope中，根据当前控制器进行推断
    $scope.parentProperty = 'parent scope';
})
.controller('controller-150730-2', function($scope) {
    $scope.childProperty = 'child scope';
    // 同在DOM中一样，我们可以通过当前$scope直接访问原型中的任意属性
    $scope.fullSentenceFromChild = 'Same $scope: We can access: ' +
    $scope.rootProperty + ' and ' +
    $scope.parentProperty + ' and ' +
    $scope.childProperty
});

firstApp.controller('controller-150731-1', function($scope, $timeout){
    $scope.isDisabled = true;
    $timeout(function(){
        $scope.isDisabled = false;
    },3000);
});

firstApp.controller('controller-150731-2', function($scope){
    $scope.list = ['dfd1', 'dsadsad2', 'dsaadff3', 'sdarefc4', 'dqwewq5'];
});

firstApp.controller('controller-150731-3', function ($scope) {
    $scope.model = {
        'name' : 'qyb',
        'age' : 23,
        'height' : 163
    }
});

firstApp.controller('controller-150731-4', function ($scope) {
    $scope.model = {};
    $scope.model.change = function () {
        $scope.model.val = $scope.model.x;
    }
});

firstApp.directive('d150803Directive1', function () {
    return {
        restrict: 'A',
        replace: 'true',
        template: '<p>' +
                        '<a ng-href="">LINK</a>' +
                  '</p>'
    }
});

firstApp.controller('controller-150803-1', function ($scope) {
    $scope.refresh = function(){
        window.location.reload();
    }
});

firstApp.controller('controller-150803-2', function ($scope) {
    $scope.val = 'value is come from parent scope'
}).directive('d150803Directive2', function () {
    return {
        restrict: 'A',
        scope: true,
        replace: 'true',
        template: '<p><b>scope is true : </b>{{val ? val : "can not inherit from parent"}}</p>'
    }
}).directive('d150803Directive3', function () {
    return {
        restrict: 'A',
        scope: {},
        replace: 'true',
        template: '<p><b>scope is {} : </b>{{val ? val : "can not inherit from parent"}}</p>'
    }
});

firstApp.factory('D150804greeter1', function () {
    return {
        greet: function (msg) {
            alert(msg);
        }
    }
});

firstApp.controller('controller-150804-1', function ($scope, D150804greeter1) {
    $scope.showMsg = function (msg) {
        D150804greeter1.greet(msg);
    }
});




