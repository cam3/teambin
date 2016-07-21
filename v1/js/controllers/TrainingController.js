/* Setup blank page controller */
angular.module('MetronicApp').controller('TrainingController', ['$rootScope', '$scope', 'settings', function($rootScope, $scope, settings) {
    $scope.$on('$viewContentLoaded', function() {   
        // initialize core components
        App.initAjax();

        // set default layout mode
        $rootScope.settings.layout.pageContentWhite = true;
        $rootScope.settings.layout.pageBodySolid = false;
        $rootScope.settings.layout.pageSidebarClosed = false;

          $scope.training = [
			{name:'Module 1', subtitle:'subtitle', id:'1', icon:'fa fa-comments', color:'blue'},
			{name:'Module 2', subtitle:'subtitle', id:'2', icon:'fa fa-bar-chart-o', color: 'red'},
			{name:'Module 3', subtitle:'subtitle', id:'3', icon:'fa fa-shopping-cart', color:'green'},
			{name:'Module 4', subtitle:'subtitle', id:'4', icon:'fa fa-globe', color:'purple'}

  		];
    });
}]);
