"use strict";

let wordnikWords = "http://api.wordnik.com/v4/words.json/",
    wordnikWord = "http://api.wordnik.com/v4/word.json/",
    apiKey = "?api_key=2efe06dd56a60633b30010e4d970da03b55279db9896d7127",
    wordObj;

let asyncFunction = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("asyncFunction has resolved.");
        }, 4000);
    });
};

let asyncFunction2 = function() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("asyncFunction2 is done.");
        }, 3000);
    });
};

// console.log(asyncFunction())
//
// let promise = asyncFunction();
// promise.then(function(val){
//   console.log("Completed")
//   return asyncFunction2();
// })
//
// let promise2 = promise.then(function(){
//   console.log("Second")
// })
//


// asyncFunction()
//   .then(function(val){
//     console.log("Yeah " + val);
//     return asyncFunction2();
//   })
//   .then(function(val2){
//     console.log("more promises: " + val2)
//   })



// let url =
fetch("https://dog.ceo/api/breeds/image/random")
  .then(function(response){
    wordObj = response;
    console.log(wordObj)
    return response.json();
  })
  .then(function(data){
    console.log(data.message);
    return fetch("https://dog.ceo/api/breeds/list/all")
  })
  .then(function(response){
    console.log(response)
    return response.json();
  })
  .then(function(jsonFied){
    console.log(jsonFied)
  })
  .catch(function(err){
    console.log("oh no")
  })


  console.log("Asynchronous = NOT line by line")
