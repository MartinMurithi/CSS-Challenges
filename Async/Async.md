## Asyncronous Operations

<p>Asynchronous programming, this is a technique that allows a long-running task to be executed without blocking the main thread.</p>
<p>It allows JavaScript to run opreations such as requesting data from a server and file operations to run in the background while the other synchronous operations are running.</p>
<p>Asynchronous functions usually returns a <b> Promise </b>, a <b> Promise </b>, is a object that contains the current state of the asynchronous operation.</p>
The states are :
 <ul>
 <li><b>Pending</b>, this indicates that the operation is still running.</li>
 <li><b>Fulfilled</b>, this indicates that the operation is completed successfully.</li>
 <li><b>Pending</b>, this indicates that there was an error and operation was not completed.</li>
 </ul>

 <p>
 <code>async ... await </code> keywords are usually used to indicate an async function.
 </p>

## Promise Constructor

<b>Properties of a Promise Constructor </b>

<ul>
<li><b>Promise.All([])</b>, accepts an array of promises and executes them in parrallel. It awaits for all the promises to resolve and returns an array of results of each promise. When a single promise fails becaus of an array, all the other promises are ignored.</li>
<li><b>Promise.Any([])</b>, accepts an array of promises, it returns the results of the promise that resolves first.</li>
<li><b>Promise.allSettled()</b> This method waits for all promises to settle(resolve/reject) and returns their results as an array of objects. The results will contain a state (fulfilled/rejected) and value, if fulfilled. In case of rejected status, it will return a reason for the error.</li>
<li><b>Promise.race([])</b>, it waits for the first (quickest) promise to settle, and returns the result/error accordingly.</li>
<li><b>Promise.resolve(a promise)</b>, it resolves a promise with the value passed to it.</li>
<li><b>Promise.reject(a promise)</b>, it rejects a promise with the error passed to it. It</li>
</ul>

 <code>
 let promise = new Promise(async function(resolve, reject){
    try{
    let response = await fetch('url');
    if(!response.ok){
        reject(new Error(`Error : ${response.status -- response.statusText}`));
    }else{
        resolve(await response.json());
    }
    }catch(err){
        reject(new Error(`Err : ${err}`));
    }

});
</code>

<p>You may need to create your own promise in JavaScript in several scenarios:</p>
<ul><li>Wrapping Asynchronous Operations: If you're working with a function or library that doesn't directly support promises, you can wrap the asynchronous operation in a promise to make it easier to work with. For example, if you have a function that performs an asynchronous task using callbacks, you can wrap it in a promise to use it with async/await or promise chaining.</li>

<li>Custom Asynchronous Operations: Sometimes, you may need to create custom asynchronous operations that aren't covered by built-in JavaScript APIs or libraries. In such cases, you can encapsulate the asynchronous logic in a promise to provide a consistent and reusable interface for consuming the operation's results.</li>

<li>Error Handling: Promises provide built-in error handling capabilities through rejection. By creating your own promise, you can define how errors are handled within your asynchronous code, including catching and handling errors, retrying operations, or propagating errors to the caller.</li>

<li>Abstraction and Encapsulation: Promises allow you to abstract away the details of asynchronous operations and provide a clean, composable interface for working with them. By creating your own promises, you can encapsulate complex asynchronous logic and expose a simple, high-level API to consumers.</li>

<li>Control Flow: Promises provide a powerful mechanism for controlling the flow of asynchronous code, such as chaining multiple asynchronous operations or running them in parallel. By creating your own promises, you can control the sequencing, concurrency, and error handling of asynchronous operations in a flexible and predictable manner.
</li>
</ul>
