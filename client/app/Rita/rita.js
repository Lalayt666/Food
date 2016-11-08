(function() {
    var moduleId = "FoodController";
    angular.module("super_food").controller(moduleId, [Food]);

    function Food() {

        var fd = this;

        fd.foodList = [];




        fd.isViewEditing = false;
        fd.editedFood = null;

        fd.edit = edit;
        fd.remove = remove;
        fd.cancel = cancel;
        fd.save = save;
        fd.add = add;
       


        init();

        function init() {
            fd.foodList = [{
                name: 'Курица отварная',
                kkal: 225,
                checkK: false
            }, {
                name: 'Томаты',
                kkal: 40,
                checkK: false
            }, {
                name: 'Огурец',
                kkal: 10,
                checkK: false
            }];
        }

        function temp() {
            console.log('hello world!');
        }


        function add() {
            console.log("Разработка add");
            fd.isViewEditing = true;
            fd.editedFood = { name: ' ', kkal: ' ', checkK: false };

        }

        function edit(item) {
            console.log('Разработка edit');

        }

        function remove() {
            console.log('Разработка remove');
            fd.isViewEditing = false;
            fd.editedFood = null;
        }

        function cancel(item) {
            console.log('Разработка cancel');
            
        }

        function save(item) {
            console.log('Разработка save');
        }





    }
})();
