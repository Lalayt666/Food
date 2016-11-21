(function() {
	var moduleId = "Menu";
    angular.module("super_food").controller(moduleId, [Menu]);

    function Menu() {

    	var mn = this;

    	mn.menulist = [];
        

    	init();

    	function init() {
    		mn.menulist = [{
                name: 'Помидор',
                description: 'Совместим с овощами и фруктами',
                ck:true
            
            },{
                name: 'Огурец',
                description: 'Совместим с овощами и фруктами',
                ck:true
            
            },{
                name: 'Курица',
                description: 'Совместим с блаблабла',
                ck:true
            
            }]
    	}
        

    }
})();
