(function() {
    function ModalCtrl(Room, $uibModalInstance, $scope) {
        this.submit = function() {
            
            Room.add($scope.roomName);
            $uibModalInstance.close();
            
        };
        this.dismiss = function(){
            $uibModalInstance.close();
        };
        
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room','$uibModalInstance', '$scope', ModalCtrl]);
})();