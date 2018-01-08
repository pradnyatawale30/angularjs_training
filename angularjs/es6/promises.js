// callback functions

let error = true;

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Task executed successfully.......");
        if (error) {
            const user = { first: 'John', last: 'David' };
            reject(user);
        }
        else {
            resolve();
        }
    }, 1000);
});

promise.then(
    () => {
        console.log("Task completed");
        // resolve();
    }, // on fullfilled
    (user) => {
        console.log("Task terminated" + JSON.stringify(user));
        // user will not be available in 2nd then .. for that you have to declare it globally
        resolve();
    }// on failure
).then(
    () => console.log("Task completed"), // on fullfilled
    () => {
        console.log("Task terminated");
        throw new Error("error raised");
    }// on failure
    ).catch((msg) => {
        console.log(msg);
    })
console.log("application started");

// Jets/mocha is used for testign async calls

// in angular RxJS Observable is a type used