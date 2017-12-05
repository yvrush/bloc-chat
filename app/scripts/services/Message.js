(function () {
    function Message($firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        
        Message.getByRoomId = function (roomIdinput) {
            // Filter the messages by their room ID.
           return $firebaseArray(ref.orderByChild('roomId').equalTo(roomIdinput));
            
        };

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
