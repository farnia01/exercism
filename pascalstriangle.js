export const rows = (input) => {
    var myArray = [];
    var temp1 = [] , temp2 = [1];
    for(let row = 1 ; row <= input ;row++) {
        temp1 = temp2.slice();
      for(let col = 0;col <= row ; col++) {
          if(col === 0 || col === row) {
              temp2[col] = 1;    
          } else {
              temp2[col] = temp1[col] + temp1[col - 1];
          }
      }
      
   myArray.push(temp1);
  }
  return myArray;
  };