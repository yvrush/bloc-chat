(function() {
    function UserCtrl(User, $cookies, $uibModalInstance, $scope) {
        
        this.submit = function() {
            
            $cookies.put('blocChatCurrentUser', $scope.userName);
            $uibModalInstance.close();
                   
    }
    }

    angular
        .module('blocChat')
        .controller('UserCtrl', ['User', '$cookies', '$uibModalInstance', '$scope', UserCtrl]);
})();