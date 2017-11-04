(function () {
    function RoomCtrl(Room, $scope)
    
    $scope.rooms = Room;

    angular
        .module('blocChat')
        .controller('RoomCtrl', [RoomCtrl, 'Room', '$scope']);
})();
