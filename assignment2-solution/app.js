(function() {
  'use strict';
  angular.module('ShoppingListApp',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListService',ShoppingListService);

  ToBuyController.$inject = ['ShoppingListService'];
  function ToBuyController(ShoppingListService){
     var tobuy = this;
     tobuy.items = ShoppingListService.getToBuyList();
     tobuy.checkoff = function(index){
       ShoppingListService.checkoffItem(index);
     }
  }

  AlreadyBoughtController.$inject = ['ShoppingListService'];
  function AlreadyBoughtController(ShoppingListService){
    var alreadybought = this;
    alreadybought.items = ShoppingListService.getAlreadyBoughtList();

  }

  function ShoppingListService(){
    var service = this;

    service.tobuy = [ { name: "cookies", quantity: 10 },
                      { name: "milk", quantity: 11 },
                      { name: "apples", quantity: 10 },
                      { name: "bananas", quantity: 15 },
                      { name: "icecreams", quantity: 10 }

                    ];
    service.alreadybought = [];

    service.checkoffItem = function (itemIdex){
      var deleted = service.tobuy.splice(itemIdex,1);
      service.alreadybought.push(deleted[0]);
    }

    service.getToBuyList = function(){
      return service.tobuy;
    }

    service.getAlreadyBoughtList = function(){
      return service.alreadybought;
    }

  }


})();
