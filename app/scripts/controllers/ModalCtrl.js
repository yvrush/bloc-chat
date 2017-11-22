(function() {
    function ModalCtrl(Room, $uibModalInstance, $scope) {
        this.submit = function() {
            
            Room.add($scope.roomName);
            $scope.roomName.$setPristine();
            
        };
        this.dismiss = function(){
            $uibModalInstance.close();
        };
        
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room','$uibModalInstance', '$scope',ModalCtrl]);
})();