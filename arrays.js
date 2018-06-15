// So many different ways to process arrays
// Powerful way to approach algorithms, handle responses, or manipulate data

const { stringArr, numArr, objArr } = require('./data.js');

const method = process.argv[2];

const addRemove = (operation) =>{
    console.log(operation)
    switch (operation) {
        case 'push':
            // .push()  - add to end of array
            console.log(`Before:  ${stringArr}`);
            stringArr.push('Pretty Lights');
            console.log(`After: ${stringArr}`);
            break;

        case 'pop':
            // .pop() - remove from end of array
            console.log(`Before:  ${numArr}`);
            numArr.pop();
            console.log(`After: ${numArr}`);
            break;

        case 'shift':
            // .shift() - remove from front of array
            console.log(objArr);
            objArr.shift();
            console.log(objArr);
            break;

        case 'unshift':
            // unshift() - add to front of array
            console.log(`Before:  ${stringArr}`);
            stringArr.unshift('Justice');
            console.log(`After: ${stringArr}`);
            break;

        case 'splice-remove':
            // splice(index, amount of items to remove)
            console.log(`Before removing: ${stringArr}`);
            stringArr.splice(1,2);
            console.log(`After removing: ${stringArr}`);
            break;
        
        case 'splice-add':
            // splice (index, amount of items to remove, item to add)
            console.log(`Before adding: ${numArr}`);
            numArr.splice(3,0,15);
            console.log(`After adding: ${numArr}`);
            break;
        
        case 'concat':
            // concat (array to be added) - joins two arrays into one
            // RETURNS NEW ARRAY
            console.log(`Before: ${stringArr}`);
            console.log(`After (New Array) ${stringArr.concat(['Lane 8', 'Thomas Jack'])}`);
            console.log(`Original array is unchanged ${stringArr}`);
            break;

        default:
            break;
            
    }
}

// const 



addRemove(method);