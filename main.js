
const numberArray = [1,2,4,59,91,392,391,2,5,10,2,1,1,1,20,20].sort();


//function sort
const sortNumbers =  numberArray.sort( (a,b) =>{
   return a-b;
});





//returns all 1 from numberArray
 const numberOne = sortNumbers.filter(function (one) {
      return one === 1;
  });
  for(let i = 0; i < numberOne.length; i++);

  
  
//returns all 2 from numberArray
  const numberTwo = sortNumbers.filter(function (two) {
      return two === 2;
  });

  //returns all 20 from numberArray
  const numberTwenty = sortNumbers.filter(function (Twenty) {
      return Twenty === 20;
  }); 

  
//new Array
const newArray = [
      [numberOne],  
      [numberTwo], 
      numberArray[7],
       numberArray[8] , 
       numberArray[9], 
       [numberTwenty],
       numberArray[12],
       numberArray[13],
       numberArray[14],
       numberArray[15]
];



console.log(newArray);
console.log(numberArray);
console.log(numberOne);
console.log(numberTwo);
console.log(numberTwenty);
console.log(sortNumbers);


//   for(let i = 0; i < sortNumbers.length; i++){
//       if(sortNumbers[0] === 1){
//            oneNumber.push(sortNumbers[i]);
//            console.log(sortNumbers[i]);
//       }
// }
// const sortNumbers = numberArray.map( (numberOne) => {
//     if(numberOne === sort){
//           console.log(sort);
//     }
// });
// for(let i = 0; i < numberArray.length; i++){
//       if(numberArray[i] > 0){
//             const max = Math.max(numberArray[i]);
//             console.log(max);
//       }
// }


//       for(let i = 0; i < numberArray.length; i++){
//             if(numberArray[i] != 1 || numberArray[i] != 2 || numberArray[i] != 20){
//                   console.log(Math.max(numberArray[i]));
//             }
//       }

      



      