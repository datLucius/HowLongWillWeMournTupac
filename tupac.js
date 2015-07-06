(function(){
   var app = angular.module('tupac-directives', []);

    app.directive("tupacTabs", function() {
      return {
        restrict: "E",
        templateUrl: "tupac-tabs.html",
        controller: function() {
          this.tab = 1;

          this.isSet = function(checkTab) {
            return this.tab === checkTab;
          };

          this.setTab = function(activeTab) {
            this.tab = activeTab;
          };
        },
        controllerAs: "tab"
      };
    });

    app.directive("tupacMourn", function() {
      return {
        restrict: 'E',
        templateUrl: "tupac-mourn.html"
      };
    });

    app.directive("tupacTimer", function() {
      return {
        restrict: "E",
        templateUrl: "tupac-timer.html",
      };
    });

    app.controller('TimeController', function(){
      this.tupacDeath = moment("19960713", "YYYYMMDD").fromNow();
      return this.tupacDeath;
    });

    app.directive("tupacReminisce", function() {
      return {
        restrict: "E",
        templateUrl: "tupac-reminisce.html",
        controller: function() {
          this.current = 0;
          this.setCurrent = function(coverNumber){
            this.current = coverNumber || 0;
          };
        },
        controllerAs: "rem"
      };
    });
  })();
