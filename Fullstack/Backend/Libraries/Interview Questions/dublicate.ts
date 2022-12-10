const arr = [
    {id: 1, name: 'Tom'},
    {id: 1, name: 'Tom'},
    {id: 2, name: 'Nick'},
    {id: 2, name: 'Nick'},
  ];
  
  const uniqueIds:any = [];
  
  const unique = arr.filter(element => {
    const isDuplicate = uniqueIds.includes(element.id);
  
    if (!isDuplicate) {
      uniqueIds.push(element.id);
  
      return true;
    }
  
    return false;
  });
  
  // 👇️ [{id: 1, name: 'Tom'}, {id: 2, name: 'Nick'}]
  console.log(unique);