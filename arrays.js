// So many different ways to process arrays
// Powerful way to approach algorithms, handle responses, or manipulate data

const { stringArr, numArr, objArr } = require('./data.js');

const method = process.argv[2];

const addRemove = (operation) =>{
    console.log(operation)
    switch (operation) {
        case 'push':
            // .push()  - add to end of array
            console.log(`Before: ${stringArr}`);
            stringArr.push('Pretty Lights');
            console.log(`After: ${stringArr}`);
            break;

        case 'pop':
            // .pop() - remove from end of array
            console.log(`Before: ${numArr}`);
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
            console.log(`Before: ${stringArr}`);
            stringArr.unshift('Justice');
            console.log(`After: ${stringArr}`);
            break;

        default:
            break;
            
    }
}

addRemove(method);