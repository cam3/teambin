/* Setup blank page controller */
angular.module('MetronicApp').controller('ModuleController', ['$rootScope', '$scope', 'settings', function($rootScope, $scope, settings) {
    $scope.$on('$viewContentLoaded', function() {   
        // initialize core components
        App.initAjax();

        // set default layout mode
        $rootScope.settings.layout.pageContentWhite = true;
        $rootScope.settings.layout.pageBodySolid = false;
        $rootScope.settings.layout.pageSidebarClosed = false;

        $scope.training = [
    			{name:'Module 1', subtitle:'subtitle', uid:"1a", icon:'fa fa-comments', color:'blue'},
    			{name:'Module 2', subtitle:'subtitle', uid:"2a", icon:'fa fa-bar-chart-o', color: 'red'},
    			{name:'Module 3', subtitle:'subtitle', uid:"3a", icon:'fa fa-shopping-cart', color:'green'},
    			{name:'Module 4', subtitle:'subtitle', uid:"4a", icon:'fa fa-globe', color:'purple'}

      		];
        $scope.newModule = {};
        $scope.newModule.id = genUID();
        function genUID() {
            function s4() {
              return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
            }
            return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
              s4() + '-' + s4() + s4() + s4();
          }
         function getByValue(arr, value) {

          for (var i=0, iLen=arr.length; i<iLen; i++) {

            if (arr[i].id == value) return arr[i];
          } 
        };
          function getIndexValue(arr, value) {

          for (var i=0, iLen=arr.length; i<iLen; i++) {

            if (arr[i].id == value) return i;
          }
        };
        $scope.newModule.stepUIDS = [];
        $scope.steps = [];
        $scope.savedSteps = [];
        $scope.editingStep = {};
        $scope.createStep = function() {
          $scope.newstep = {};
          $scope.newstep.id = genUID();
          $scope.steps.push($scope.newstep);
        };
        $scope.addStep = function(id) {
          var stepobj = getByValue($scope.steps, id);
          if (stepobj.name == null || stepobj.type == null) {
            $scope.allFields = true;
          } else {
            $scope.allFields = false;
            var stepobj = getByValue($scope.steps, id);
            stepobj.quiz = [];
            stepobj.textInput = '';

            $scope.newModule.stepUIDS.push(id);
            $scope.steps.splice(stepobj, 1);
            $scope.savedSteps.push(stepobj);
          }
        };
        $scope.discardStep = function(id) {
          var stepobj = getByValue($scope.steps, id);
          console.log("Trying to discard: "+stepobj);
          $scope.newModule.stepUIDS.splice(stepobj, 1);
          $scope.steps.splice(stepobj, 1);
        };
        $scope.deleteStep = function(id) {
          var stepobj = getByValue($scope.savedSteps, id);
          console.log("Trying to delete: "+stepobj);
          $scope.newModule.stepUIDS.splice(stepobj, 1);
          $scope.savedSteps.splice(stepobj, 1);
        };
        $scope.addQuestion = function(id) {
          console.log($scope.savedSteps);
          var stepobj = getByValue($scope.savedSteps, id);
          var i = getIndexValue($scope.savedSteps, id);
          var newItemNo = genUID();
          
          stepobj.quiz.push({'id':'question'+newItemNo,'answers':[]});
          
        };
        $scope.addAnswer = function(id, qid) {
          
          var stepobj = getByValue($scope.savedSteps, id);
          var quizobj = getByValue(stepobj.quiz, qid);
          $scope.currentquestion = quizobj;
          var newItemNo = genUID();

          $scope.currentquestion.answers.push({'id':'answer'+newItemNo});

        };
        $scope.discardAnswer = function(index, id, qid, aid) {       
          var stepobj = getByValue($scope.savedSteps, id);
          var quizobj = getByValue(stepobj.quiz, qid);
          var answerobj = getByValue(quizobj.answers, aid);
          console.log(stepobj);
          console.log(quizobj);
          console.log(answerobj);
          quizobj.answers.splice(index, 1);

        };
        $scope.editStep = function(id) {
          var stepobj = getByValue($scope.savedSteps, id);
          $scope.editingStep = stepobj;
          if ($scope.editingStep.type == 'text') {

          } else if ($scope.editingStep.type == 'video') { 

          } else if ($scope.editingStep.type == 'quiz') {
  
          }
        };
        $scope.saveStep = function(id) {
          var stepobj = getByValue($scope.editingSteps, id);
          $scope.stepUIDS.push(id);
          $scope.steps.splice(stepobj, 1);
          $scope.savedSteps.push(stepobj);

        };
    });
}]);
