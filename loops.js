function forLoop(array) {
<<<<<<< HEAD
   for (let i = 0; i < 25; i++) {
=======
   for (let i = 0; i < 25; i) {
>>>>>>> 03905d1a77bd71981d9be01424d502a017a04952
     if (i === 1) {
       array.push("I am 1 strange loop.");
     }
     else {
       array.push("I am ${i} strange loops.");
     }
   }
<<<<<<< HEAD
   return array
}
   
function whileLoop(countdownFrom) {
  
   while (countdownFrom > 0) {
       console.log(--countdownFrom);
     }
     return "done";
   }

function doWhileLoop(array) {
  
   function maybeTrue() {
     return Math.random() >= 0.5
   }
 
   do {
     array.pop();
     
   } while (array.length > -1 && maybeTrue());
   
     return array;
}
 
=======
   return array;
 }
>>>>>>> 03905d1a77bd71981d9be01424d502a017a04952
