angular

  .module("ladderApp")

  .controller('loginController', ['$scope', '$resource', '$state', '$stateParams', 'myAuthService',  function($scope, $resource, $state, $stateParams, myAuthService) {
      console.log("loginController called");
      
      $scope.username = $stateParams.username;
                                  
      $scope.password = $stateParams.password;
        
      $scope.loggedIn = false;
      
      $scope.login = function(username, password) {
        
        $scope.loggedIn = myAuthService.login($scope.username, $scope.password);
          
        console.log("loggedIn " + $scope.loggedIn);
          
        if ($scope.loggedIn) {
          if ($scope.username == "John")
            $state.go('coach');
          else ($scope.username === "Andy")
            $state.go('student');
           
        }
        
      }
      
      
      
    
  }]);