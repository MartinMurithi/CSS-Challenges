async function asyncFunc() {
  try {
    const apiData = await fetch(
      "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json"
    );

    const data = await apiData.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// asyncFunc();

function getCars(url) {
  // Create a new promise which will the cars data

  let promise = new Promise(async function (resolve, reject) {
    try {
      let response = await fetch(url);

      if (!response.ok) {
        reject(
          new Error(`Error : ${response.status} -- ${response.statusText}`)
        );
      } else {
        resolve(await response.json());
      }
    } catch (err) {
      console.error(err);
      reject(new Error(`Error : ${err}`));
    }
  });
  return promise;
}

// getCars("https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(`Error: ${error}`);
//   })
//   .finally(() => console.log("Promise completed"));

// Promise.all()

let url1 = getCars("https://www.anapioficeandfire.com/api/characters");
let url2 = getCars(
  "https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json"
);
let url3 = getCars(
  "https://openlibrary.org/api/books?bibkeys=ISBN:0201558025,LCCN:93005405&format=json"
);

Promise.all([url1, url2, url3])
  .then((results) => console.log(results))
  .catch((err) => console.error(err))
  .finally(() => console.log("Promises.all comleted"));

Promise.any([url1, url2, url3])
  .then((results) => console.log(results))
  .catch((err) => console.error(err))
  .finally(() => console.log("Promises.all comleted"));

Promise.allSettled([url1, url2, url3])
  .then((results) => console.log(results))
  .catch((err) => console.error(err))
  .finally(() => console.log("Promises.all comleted"));

Promise.race([url1, url2, url3])
  .then((results) => console.log(results))
  .catch((err) => console.error(err))
  .finally(() => console.log("Promises.all comleted"));