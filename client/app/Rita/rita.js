(function() {
    var moduleId = "Food";
    angular.module("super_food").controller(moduleId, [Food]);

    function Food() {

        var fd = this;

        fd.foodlist = [];

        init();

        function init() {
            fd.foodlist = [{
                name: 'Курица отварная',
                kkal: 225
            }, {
                name: 'Томаты',
                kkal: 40
            }, {
                name: 'Огурец',
                kkal: 0.5
            }];
        }
    }
})();
  

   
