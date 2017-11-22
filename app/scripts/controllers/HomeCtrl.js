(function() {
    function HomeCtrl(Room, $uibModal) {
        this.rooms = Room.all;
        this.addRoom = function(){
            
            $uibModal.open({
                
                controller: "ModalCtrl as modal",
                templateUrl: "/templates/addRoom.html"
            });
            
        }
        
    }
    


    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room','$uibModal',HomeCtrl]);
})();