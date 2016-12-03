
angular.module("myApp",[])
	   .controller("test",["$scope",function($scope)
	   {
	   	$scope.num=0;
	   	$scope.add=function()
	   	{
	   		$scope.num++;
	   		$scope.sum=$scope.num*99.9;
	   	}
	   	$scope.del=function()
	   	{
	   		$scope.num--;
	   		$scope.sum=$scope.num*99.9;
	   	}
	   	$scope.sum=$scope.num*99.9;
	   }])