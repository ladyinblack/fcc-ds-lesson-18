// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Iterate Through the Keys of an Object with a forr...in Statement</h1>`;

/** TODO:
 * We've defined a function, countOnline, which accepts one argument (a users object).  Use a for...in statement within this function to loop through the users object passed into the function and return the number of users whose online property is set to countOnline is shown below.  Each user will have an online property with either a true or false value.
 *  { Alan: { online: false },
 *    Jeff: { online: true },
 *    Sarah: { online: false } 
 *  }
 
 const users = {
   Alan: {
     online: false
   },
   Jeff: {
     online: true 
   },
   Sarah: {
     online: false 
   }
 }
 
 function countOnline(usersObj) {
   // Only change code below this line 
 
   // Only change code above this line 
 }
 
 console.log(countOnline(users));
 */

const users = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

const users2 = {
  Alan: {
    online: true,
  },
  Jeff: {
    online: false,
  },
  Sarah: {
    online: true,
  },
};

const users3 = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: false,
  },
  Sarah: {
    online: false,
  },
};

function countOnline(usersObj) {
  // Only change code below this line
  let count = 0;
  for (let user in usersObj) {
    if (usersObj[user].online) {
      count += 1;
    }
  }
  return count;
  // Only change code above this line
}

console.log(countOnline(users));
console.log(countOnline(users2));
console.log(countOnline(users3));

/** HINT:
 * NOTE:
 *    - dot-notation will cause errors in this challenge.
 *    - [square-bracket] notation must be used to call a variable property name.
 *    - The following code will not work
 *
 * 1.
 * for (let user in obj) {
 *    if (obj.user.online === true) {
 *        // code
 *    }
 *  }
 *
 * 2. Example 2 demonstrates how using [square-bracket] notation the code will be executed.
 * for (let user in obj) {
 *    if (obj[user].online === true) {
 *        // code
 *    }
 *  }
 */
