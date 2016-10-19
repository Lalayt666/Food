(function() {
    var moduleId = "Foo";
    angular.module("super_food").controller(moduleId, [Foo]);

    function Foo() {

        var fd1 = this;

        fd1.fodlist = [];

        init();

        function init() {
            fd1.fodlist = [{
                image: 'qq',
                name: 'Помидор',
                description: 'Плоды томата отличаются высокими питательными вкусовыми и диетическими качествами',
                chek: '1'
            }, {
                image: 'sss',
                name: 'Огурец',
                description: 'Огурцы богаты сложными органическими веществами которые играют важную роль в обмене веществ',
                chek: '1'
            }, {
                image: 'qqq',
                name: 'Шампиньон',
                description: 'В пищевых шампиньонах содержатся 20 аминокислот в том числе все незаменимые для человека',
                chek: '1'
            }, {
                image: 'qqq',
                name: 'Редис',
                description: 'Содержит ряд необходимых человеку витаминов нужных человеку для восстанавления иммунитета',
                chek: '1'
            }];
        }
    }
})();
