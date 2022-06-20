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
    getItems: function(){
        return data.items;
    },
     
    logData: function(){
        return data;
    }
   }
})();


//UI controller
const UICtrl = (function(){
    const UISelectors = {
        itemList: '#item-list'
    }
  return {
    populateItemList: function(items) {
        let html = ``;

        items.forEach(function(item){
            html += `<li class="collection-item" id="item-${item.id}">
            <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
              <i class="edit-item fa fa-pencil"></i>
            </a>
          </li>`;
        });

        //insert lis
        document.querySelector(UISelectors.itemList).innerHTML = html;

    }
  }
})();


//App controller
const App = (function(ItemCtrl, UICtrl){
    
    return{
        init: function(){
            //fetching items
            const items = ItemCtrl.getItems();

            //populate list with items
            UICtrl.populateItemList(items);
        }
    }
})(ItemCtrl, UICtrl);

//initialize app
App.init();