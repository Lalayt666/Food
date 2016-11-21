(function() {
    var moduleId = "Foo";
    angular.module("super_food").controller(moduleId, [Foo]);

    function Foo() {

        var fd1 = this;

        fd1.fodlist = [];

        init();

        function init() {
            fd1.fodlist = [{
                id:1,
                image: 'client/content/image/1.png',
                name: 'Помидор',
                description: 'Плоды томата отличаются высокими питательными вкусовыми и диетическими качествами',
                
            }, {
                id:2,
                image: 'client/content/image/2.png',
                name: 'Огурец',
                description: 'Огурцы богаты сложными органическими веществами которые играют важную роль в обмене веществ',
                
            }, {
                id:3,
                image: 'client/content/image/tomat.png',
                name: 'Шампиньон',
                description: 'В пищевых шампиньонах содержатся 20 аминокислот в том числе все незаменимые для человека',
                
            }, {
                id:4,
                image: 'client/content/image/tomat.png',
                name: 'Редис',
                description: 'Содержит ряд необходимых человеку витаминов нужных человеку для восстанавления иммунитета',
                
            }];
        }


    }
})();
