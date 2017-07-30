angular.module('myApp').controller('mainCtrl', function($scope, mainSrvc){

  //The getMessages function will call the getMessages method on the messageService object.
  //You'll then save the result of that request to your controller's $scope as messages ($scope.messages)

$scope.getMessages = function(){
  mainSrvc.getMessages().then(function(response){
    console.log(response)
    $scope.messages = response.data;

  })
}




  //The postMessage function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box),
  //pass that text to the postMessage method on the messageService object which will
  //then post it to the backend.




  //uncomment this code when your getMessages function is finished
  //This goes and gets new data every second, which mimicking a chat room experience.

})
