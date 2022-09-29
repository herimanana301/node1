let myInfo= require('./information.js');
let cow= require('cowsay');

console.log(cow.say({
      text:`Hello I am ${myInfo.name} from ${myInfo.campus}`,
      e:"oO",
      T:"U ",

}));
