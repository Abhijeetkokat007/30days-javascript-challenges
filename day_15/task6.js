function createItemManager() {
    
    let items = [];
  
    function addItem(item) {
      items.push(item);
    }
  
    function removeItem(item) {
      const index = items.indexOf(item);
      if (index !== -1) {
        items.splice(index, 1);
      }
    }
  
    function listItems() {
      return items.slice(); 
    }
  
    return {
      addItem,
      removeItem,
      listItems
    };
  }
  

  const itemManager = createItemManager();
  

  itemManager.addItem('Item 1');
  itemManager.addItem('Item 2');
  itemManager.addItem('Item 3');
  
  console.log(itemManager.listItems()); 
  

  itemManager.removeItem('Item 2');
  
  
  console.log(itemManager.listItems()); 
  