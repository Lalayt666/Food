(function() {
    var moduleId = "FoodController";
    angular.module("super_food").controller(moduleId, ['$routeParams', Food]);

    function Food($routeParams) {

        var fd = this;
        fd.selectedFood=null;

        fd.foodList = [];
        fd.foodListTwo = [];

       


        fd.isViewEditing = false;
        fd.editedFood = null;
        

        fd.edit = edit;
        fd.remove = remove;
        fd.cancel = cancel;
        fd.save = save;
        fd.add = add;
        fd.summ = summ;
      


        init();

        function init() {


            fd.data = [{

            		id:1,
                    name: 'Про помидорчик',
                    imagePath: 'client/content/image/1.png',
                    items: [{

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
                    }]
                }, {
                	id:2,
                    name: 'Про огурчик',
                    imagePath: 'client/content/image/2.png',
                    items: [{
                        name: 'Дыня',
                        kkal: 100,
                        checkK: false
                    }, {
                        name: 'Хлеб',
                        kkal: 200,
                        checkK: false
                    }, {
                        name: 'Морковь',
                        kkal: 150,
                        checkK: false
                    }]

                }

            ];

            for (var i = 0; i < fd.data.length; i++) {
            	var cur = fd.data[i];
            	if(cur.id == $routeParams.idFood) {

            		fd.selectedFood=cur;
            		break;
            	}
            }
        }

        function add() {
            console.log("Разработка add");
            fd.isViewEditing = true;
            fd.editedFood = { id:-1, name: '0', kkal: '0', checkK: false };

        }

        function edit(row) {
            console.log('Разработка edit', row);

            fd.editedFood = angular.copy(row);
            fd.isViewEditing = true;

        }

        function remove() {
            console.log('Разработка remove');
            fd.isViewEditing = false;
            fd.editedFood = null;
        }

        function cancel(row) {
            console.log('Разработка cancel');

        }

        function save() {
            console.log('Разработка save');
            if(fd.editedFood.id==-1){
                fd.date.push(fd.editedFood);
            } else {

            }
            remove();
        }

        function summ() {

            var sum = 0;
            for (var i = 0, l = fd.selectedFood.items.length; i < l; i += 1) {
                var cm = fd.selectedFood.items[i];
                if (cm.checkK) {
                    sum += cm.kkal;
                }
            }
            return sum;

        }

       
       
    }
})();
