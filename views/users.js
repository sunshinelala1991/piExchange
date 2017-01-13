var myUsers=angular.module('myUsers',[]);

myUsers.controller('mainController', function($scope,$http) {



	
   $scope.users=[];

	





	$http.get('/all_users').success(function(data){

		for(i =0;i<data.length;i++){

			if(data[i].status==true)
				$scope.users.push({email:data[i].local.email,status:"online"});
			else
				$scope.users.push({email:data[i].local.email,status:"offline"})


		}
		

		console.log(data);
	}).error(function(data){
		console.log('error'+data);
	});




});