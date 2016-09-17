(function(){
'use strict';

angular.module('LunchCheck',[])
  .controller('LunchCheckController',function($scope){
    $scope.menu = "";
    $scope.status = "";
    $scope.statuscolor = "";
    $scope.show = false;
    $scope.check = function(){
      $scope.show = true;
      var array = $scope.menu.split(",");
      if ($scope.menu == ""){
        $scope.status="Please enter data first";
        $scope.statuscolor = "red";
      }else if (array.length <= 3){
        $scope.status="Enjoy!";
        $scope.statuscolor = "green";
      }else{
        $scope.status="Too Much!";
        $scope.statuscolor = "green";
      }
    };

  });

})();
