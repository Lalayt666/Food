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
                description: 'Совместим с овощами и фруктами'
                
            
            },{
                name: 'Огурец',
                description: 'Совместим с овощами и фруктами'
                
            },{
                name: 'Курица',
                description: 'Совместим с блаблабла'
                
            }]
    	}
        

    }
})();
