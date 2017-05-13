myApp.controller('empController',function($scope,$route,$routeParams,$http){
  $scope.getEmployees=function(){
    $http.get('/api/employees').then(function(response){
      console.log(response);
      $scope.employees=response.data;
    });
  };
  $scope.showEmployee=function(){
    var id=$routeParams.id;
    $http.get('/api/employees/'+id).then(function(response){
      console.log(1, JSON.stringify(response.data, null, 2));
      $scope.employee=response.data;
    });
  };
});
