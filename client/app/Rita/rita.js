(function() {
    var moduleId = "Food";
    angular.module("super_food").controller(moduleId, [Food]);

    function Food() {

        var fd = this;

        fd.foodlist = [];

        fd.colortext=colortext;
        

       

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
                kkal: 0
            }];
        }

        function colortext(row) {
            if(row.kkal==225) return "normal";
            if (row.kkal==0) return "low";
            if (row.kkal>=40) return "low";


        }

      
    }
})();
  

   
