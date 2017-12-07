(function () {
    function HomeCtrl(Room, Message, User, $uibModal, $scope ) {
        this.rooms = Room.all;
        this.activeRoom = null;
        this.messages = null;

        this.activateRoom = function (activeRoom) {
            this.activeRoom = activeRoom;
            this.messages = Message.getByRoomId(activeRoom.$id);
        };
        this.addRoom = function () {

            $uibModal.open({

                controller: "ModalCtrl as modal",
                templateUrl: "/templates/addRoom.html"
            });

        }

    }


    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', 'User', '$uibModal', '$scope', HomeCtrl]);
})();
