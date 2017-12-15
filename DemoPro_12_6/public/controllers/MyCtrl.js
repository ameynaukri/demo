myApp.controller("MyCtrl", function($scope,$http,$location,localStorageService,$rootScope,Upload,$window){
    $scope.uData = window.localStorage['storageName'];
    var userData = JSON.parse($scope.uData);
    $scope.username = userData.result.username; 
    $http.get($rootScope.serviceURL+"allcustomer").then(function(response) {
        $scope.allUser = response.data.result;
    });

    var vm = this;
 //   vm.cricket=false;
 //   vm.hockey=false;
 //    vm.football=false;
    vm.submit = function(){ //function to call on form submit
        if (vm.upload_form.file.$valid && vm.file) { //check if from is valid
            vm.upload(vm.file,vm.cricket,vm.football,vm.hockey,vm.name); //call upload function
        }
    }

    //alert("Hello");
    
    vm.upload = function (file,cricket,football,hockey,name) {
        //alert(file);
        console.log("=========================================");
        console.log(file.name);
        //$scope.formData
        /*$http.post($rootScope.serviceURL+"add", $scope.up).then(function(response){
            var data = response.data;
            if(data.StatusCode == 200){
                swal({   
                    title: "Success",   
                    text: data.ResponseMessage,   
                    type: "success",   
                    confirmButtonText: "Ok",
                }).then(function (isConfirm) {
                    window.location.reload();
                });
            } else {
                swal({   
                    title: "Error",   
                    text: data.ResponseMessage,   
                    type: "error",   
                    confirmButtonText: "Ok",
                }).then(function (isConfirm) {
                    window.location.reload();
                });
            }
        }).catch(function(error){
            console.log(error);
        });*/
        //alert("File name "+data.file.name);
        //alert("Amey "+$scope.file);
        /*console.log($scope.up.file);
        console.log(data.file.name);*/
        console.log("=========================================");
        //alert("Hello");
        Upload.upload({

            url: 'http://localhost:3016/add', //webAPI exposed to upload the file
            data:{file:file,"cricket":cricket,"football":football,"hockey":hockey,"name":name} //pass file as data, should be user ng-model
        }).then(function (resp) { //upload function returns a promise
            console.log("resp.config.data.file.name "+resp.config.data.file.name);
            if(resp.data.error_code === 0||!resp.data.error_code){ //validate success
                //$window.alert('Success ' + resp.config.data.file.name + 'uploaded. Response: ');
;                 
            } else {
                $window.alert(resp.data.error_code);
            }
        }, function (resp) { //catch error
            //console.log('Error status: ' + resp.status);
            $window.alert('Error status: ' + resp.status);
        }, function (evt) { 
            //console.log(evt);
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            //console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            vm.progress = 'progress: ' + progressPercentage + '% '; // capture upload progress
        });
    };
});
    
