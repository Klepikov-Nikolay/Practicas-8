let objects = [
    { name: 'Андрей',
      surname: 'Андреевич' },
    { name: 'Николай',
      surname: 'Николаев' },
    { name: 'Данил',
      surname: 'Данилов' }
  ];
  
  function filterObjValues(objects, key, value) {
   
    const result = [];
  
    
    for (let i = 0; i < objects.length; i++) {
      
      const obj = objects[i];
  
     
      if (obj[key] === value) result.push(obj);
    }
  
    
    return result;
  }
  
  const filteredArray = filterObjValues(objects, 'name', 'Данил');
  
  console.log(filteredArray);