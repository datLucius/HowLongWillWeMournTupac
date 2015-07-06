(function() {var app = angular.module('tuPacApp', ['tupac-directives']);

  app.controller('MournController', ['$http', function($http){
    var mourn = this;
    mourn.post = [];
    $http.get('http://tiy-fee-rest.herokuapp.com/collections/tupac').success(function(data){
      mourn.posts = data;
    });
    this.mourn = {};

    this.addEulogy = function(eulogy) {
      mourn.post.push(this.eulogy);
      this.eulogy = {};
    };
  }]);

  app.controller('remController', ['$http', function($http){
    var rem = this;
    rem.videos = [];
    $http.get('./tupacvideos.json').success(function(data){
      rem.videos = data;
    });
  }]);

})();
