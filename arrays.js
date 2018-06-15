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

        case 'slice':
            console.log(stringArr);
            console.log(`Sliced from 1,3: ${stringArr.slice(1,3)}`);
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

const sortFind = (operation) => {
    console.log(operation);
    switch (operation){
        case 'includes':
            console.log(numArr);
            console.log(`Does numArr include 7? ${numArr.includes(7)}`);
            console.log(`Does numArr include 18? ${numArr.includes(18)}`)
            break;

        case 'indexof':
            console.log(stringArr);
            console.log(`Index of Gunship: ${stringArr.indexOf('Gunship')}`);
            console.log(`Index of Avicii: ${stringArr.indexOf('Avicii')}`);
            break;

        case 'lastindex':
            console.log(numArr);
            console.log(`Last index of 9: ${numArr.lastIndexOf(9)}`);
            break;
        
        case 'find':
            console.log(stringArr);
            console.log(`First string > 4 characters? ${stringArr.find((e)=>e.length > 4)}`);
            console.log(`First string with a D inside? ${stringArr.find((e)=>e.includes('D'))}`)
            break;

        case 'sort':
            console.log(numArr);
            console.log(`Sorted: ${numArr.sort()}`);
            console.log(stringArr);
            console.log(`Sorted: ${stringArr.sort()}`);
            break;
        
        case 'reverse':
            console.log(stringArr);
            console.log(`Reversed: ${stringArr.reverse()}`);
            break;

        default:
            break;
    }
}

const goodStuff = (operation) => {
    console.log(operation);
    switch (operation){
        case 'flat':
            break;

        default:
            break;
    }
}


// addRemove(method);
// sortFind(method);
goodStuff(method);