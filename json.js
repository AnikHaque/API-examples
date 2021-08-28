
// json (JavaScript Object Notation)

const student = {

    name: 'Ekramul',
    id: 15,
    country: 'Bangladesh'

}

// normal console 
console.log(student);

const stringified = JSON.stringify(student);

    // after converting json now console 
    console.log(stringified);

    // converted into object from stringified 
    const converted = JSON.parse(stringified);
    console.log(converted);

