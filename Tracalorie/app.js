//Item controller
const ItemCtrl = (function(){
   //item constructor

   const Item = function(id, name, calories){
    this.id = id;
    this.name=name;
    this.calories=calories;
   }
   //Data structure / state

   const data = {
        items:[
            {id:0, name: 'Steak dinner', calories:1200},
            {id:1, name: 'Oreo', calories:400},
            {id:2, name: 'Ugali', calories:900},
        ],
        currentItem:null,
        totalCalories:0
   }

   return {
    logData: function(){
        return data;
    }
   }
})();


//UI controller
const UICtrl = (function(){
    console.log('ui controller');
})();


//App controller
const App = (function(ItemCtrl, UICtrl){
    
    return{
        init: function(){
            console.log('Initializing App');
        }
    }
})(ItemCtrl, UICtrl);

//initialize app
App.init();